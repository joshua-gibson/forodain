# Description

This is a simple web app that displays written summaries of the games played in an ongoing game of Dungeons and Dragons. It is built using Vite with React and Tailwind CSS.

## TO-DO
I intend to make future additions to this app, including:
- [ ] Add a page for each player character
- [ ] Add a page for each important non-player character
- [ ] Add a page for descriptions of the world based on the information the DM has provided
- [ ] Add a page describing the deities of the world
- [ ] Move the data used in this app to a database, replacing the json files currently used

# Installation

to install:
`npm install`

# Run

to run locally:
`npm run dev`

If there are permissions issues running locally (which should now be fixed), run:
`sudo chown -R $USER node_modules`
and retry

to run via docker:
`docker compose up`

to deploy:
`npm run build`
`npm run deploy`


