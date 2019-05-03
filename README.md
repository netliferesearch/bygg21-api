# Bygg 21 API

This repo contains Sanity Studio and Schemas (content models) for Bygg21 API.

The API is public and no authentication is needed. It currently contains:

- "Gjennomføring av bygg- og anleggsprosjekter: Neste steg"
- "Steg for steg - veien til raskere reguleringsplan"

## API and query examples

Our API is created using [Sanity](https://www.sanity.io/), which exposes a traditional HTTP based REST API.

We have a single endpoint for all data, but use a query language called [GROQ](https://www.sanity.io/docs/data-store/how-queries-work) to give us what we want. The query language is quite simmilar to GraphQL, but with more features.

### Examples

Endpoint:<br>
https://q2a6l50y.api.sanity.io/v1/data/query/metier

Get all data about "Neste steg":<br>
https://q2a6l50y.api.sanity.io/v1/data/query/metier?query=*[_type=="nextStep"]

Get all data about "Neste steg", but limit to Step info (number, title and description):<br>
https://q2a6l50y.api.sanity.io/v1/data/query/metier?query=*[_type=="nextStep"]{steps[]{details{number,title,description}}}

Get all data about "Steg for steg":<br>
https://q2a6l50y.api.sanity.io/v1/data/query/metier?query=*[_type=="stepByStep"]

Get all data about "Steg for steg", but limit to Step info (number, title and description):<br>
https://q2a6l50y.api.sanity.io/v1/data/query/metier?query=*[_type=="stepByStep"]{steps[]{details{number,title,description}}}

Or you can get an export of all data and use as you want:<br>
https://q2a6l50y.api.sanity.io/v1/data/export/metier

### Learn more

More about Sanitys HTTP API:<br>
https://www.sanity.io/docs/http-api/http-urls

How to write GRQO queries:<br>
https://www.sanity.io/docs/data-store/how-queries-work

A handy "Query cheat sheet":<br>
https://www.sanity.io/docs/data-store/query-cheat-sheet

## API documentation

TODO: Document non-self-describing keys from the api.

Example: "deliveryFail" (boolean) - This means that the project should return to step 1 if the delivery fails.

## Get started with local development

- Install Sanity: `npm install -g @sanity/cli`
- Clone this repo
- Install dependencies: `npm i`
- Run Sanity studio: `sanity start`

**Important!** Remember to deploy changes to Studio after makeing changes to schemas: Run `sanity deploy`.

## Sanity

Manage content:<br>
https://bygg21-api.sanity.studio

Manage users:<br>
https://manage.sanity.io/

Project ID:<br>
q2a6l50y
