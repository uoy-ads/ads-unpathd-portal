# The Unpath'd portal

## Development

You must Remote Desktop to your office PC to do any development work due to IP restrictions on the remotely hosted OpenSearch indeces.

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

If you experience any problems see the "Troubleshooting" section of the readme at https://github.com/uoy-ads/ads-srv
