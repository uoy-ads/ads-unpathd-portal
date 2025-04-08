# :anchor: The Unpath'd portal :anchor:

## Development

You must Remote Desktop to an office PC to do any development work due to IP restrictions on the remotely hosted OpenSearch indeces.

You'll need [PHP](https://windows.php.net/download/), [Composer](https://getcomposer.org/download/), [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [Docker](https://docs.docker.com/desktop/setup/install/windows-install/) to be installed there.

Creating a more convenient "works out of the box" dev environment is on the to-do list.

### Run Server

``` bash
# install all packages (server dir)
composer install

# run server (root dir)
docker compose up

```

### Run Client

``` bash
# install all packages (client dir)
npm i

# run the dev server (client dir)
npm run dev
```

## Deploy

The project is set up for deployment to both http://ads20demo0/unpathd (staging) and https://unpathd.ads.ac.uk (production)

Currently you need to SSH to the relevant machine (production is ads20unpathd0) and run:

``` bash
cd /srv
./up.sh ads-unpathd-portal master
```

If you experience any problems see https://github.com/uoy-ads/ads-srv#troubleshooting

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
- Install [Docker](https://docs.docker.com/engine/install/ubuntu/).
- Run:
``` bash
cd /srv/ads-unpathd-portal
sudo docker compose -f docker-compose.production.yml up --build -d
```
- Ask ITS to grant incoming access.
- Create a hosts entry on your machine to point unpathd.ads.ac.uk at the new VM's IP.
- When everything is working request a DNS change to point at the new VM.

