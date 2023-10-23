# :anchor: The Unpath'd portal :anchor:

## Development

You must Remote Desktop to (or be sat at :sweat_smile:) your office PC to do any development work due to IP restrictions on the remotely hosted OpenSearch indeces.

You'll need PHP, Composer, NPM and Docker to be installed there.

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
./up.sh ads-unpathd-portal
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

cd /home/adssys/TEMP/certs
# concatenate the certs
cat unpathd.ads.ac.uk.pem GEANT_OV_CA.pem USERTrust_CA.pem > bundle.pem

# move the concatenated cert and key
mv bundle.pem /srv/certs/unpathd.ads.ac.uk.crt && mv /home/adssys/TEMP/key/unpathd.ads.ac.uk.key /srv/certs/unpathd.ads.ac.uk.key

# restart nginx
docker container restart nginx-proxy

# *check everything is working* before removing the backups...
rm /srv/certs/*-old
```

