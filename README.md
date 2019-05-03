# Bygg 21 API

This repo contains Sanity Studio and Schemas for Bygg 21 API.

## Get started

- Install Sanity: `npm install -g @sanity/cli`
- Clone this repo
- Install dependencies: `npm i`
- Run Sanity studio: `sanity start`

Remember to deploy changes to Studio after changes to schemas or plugins. Run `sanity deploy`.

## Sanity

Manage users:<br>
https://manage.sanity.io/

Manage content:<br>
https://bygg21-api.sanity.studio

Project ID:<br>
q2a6l50y

## Query examples

Get all data about "Neste steg":
https://q2a6l50y.api.sanity.io/v1/data/query/metier?query=*[_type=="nextStep"]

Get all data about "Neste steg", but limit to Step info (number, title and description):
https://q2a6l50y.api.sanity.io/v1/data/query/metier?query=*[_type=="nextStep"]{steps[]{details{number,title,description}}}

Get all data about "Steg for steg":
https://q2a6l50y.api.sanity.io/v1/data/query/metier?query=*[_type=="stepByStep"]

Get all data about "Steg for steg", but limit to Step info (number, title and description):
https://q2a6l50y.api.sanity.io/v1/data/query/metier?query=*[_type=="stepByStep"]{steps[]{details{number,title,description}}}

Learn how to write GRQO queries:<br>
https://www.sanity.io/docs/http-api/http-query
