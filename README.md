# :anchor: The Unpath'd portal :anchor:

## Update SSL Certs

SSL certs need updating annually and will be provided by the system admin.

``` bash
# switch user to root
sudo su

cd /srv/certs
# backup the cert and key
cp unpathd.ads.ac.uk.crt unpathd.ads.ac.uk.crt-old && cp unpathd.ads.ac.uk.key unpathd.ads.ac.uk.key-old

# note the directory where the system admin puts the certs might be different to the one below
cd /home/adssys/TEMP/certs
# concatenate the certs
cat unpathd.ads.ac.uk.pem 'AAA Certificate Services.pem' 'Sectigo ECC Organization Validation Secure Server CA.pem' 'USERTrust ECC Certification Authority.pem' > bundle.pem

# move the concatenated cert and key
mv bundle.pem /srv/certs/unpathd.ads.ac.uk.crt && mv unpathd.ads.ac.uk.key /srv/certs/unpathd.ads.ac.uk.key

# restart nginx
docker container restart nginx-proxy

# *check everything is working* before removing the backups...
rm /srv/certs/*-old
```

## Migrate to a new VM

- Copy the contents of /srv from the old VM to the new one.
- Ask ITS to grant outgoing access.
- Install [Docker](https://docs.docker.com/engine/install/ubuntu/) and add yourself to the docker group:
``` bash
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```
- Run:
``` bash
cd /srv/ads-unpathd-portal
docker compose -f docker-compose.production.yml up --build -d
```
- Ask ITS to grant incoming access.
- Create a hosts entry on your machine to point unpathd.ads.ac.uk at the new VM's IP.
- When everything is working request a DNS change to point at the new VM.

