# Bygg 21 API

## About

This repo contains Sanity Studio and Schemas (content models) for Bygg21 API.

The API is public and no authentication is needed.

## Content

Our API contains simplified and structured information from the two best practise processes for how to develop a regulation plan and for how to carry out a building process:

- [Gjennomføring av bygg- og anleggsprosjekter: Neste steg](https://www.bygg21.no/contentassets/ac0c77e4ec904c7a955525528b474b6c/veileder-for-fasenormen-neste-steg.pdf)
- [Steg for steg - veien til raskere reguleringsplan](https://www.bygg21.no/rapporter-og-veiledere/steg-for-steg/)

Our thought is that this data might be useful to include in project managment tools for the building industry, but you may use it however you like.

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

Most of the data and structure should be self-describing, but a few might need an extra explanation.

`documentMeta` (object)<br>
This contains information about the document. `lastChanged` (date) and `version`(number) should be updated if the structure changes or on a larger text update. Minor text changes will not change this, but be reflected in Sanitys built-in `_updatedAt`.

`deliveryFail` (boolean)<br>
This means that the project should return to step 1 if the delivery fails. This is only relevant for "Neste steg / Next step".

`meetings` (array)<br>
If a step should end with a meeting (for example "Oppstartsmøte"), this array should have one item. The structure of a meeting is similar to a step. This is only relevant for "Steg for steg / Step by step".

## Get started with local development

If you need to make changes to the Schema (content model), this can be done locally:

- Install Sanity: `npm install -g @sanity/cli`
- Clone this repo
- Install dependencies: `npm i`
- Run Sanity studio: `sanity start`

**Important!**<br>
Remember to deploy changes to Studio after making changes to schemas: Run `sanity deploy`. This will probably be automatic in the future (CI).

**Also important!**<br>
Remember that even though you work locally, changes made to the content in Studio will be globally. If you need to experiment with the data, download and work on a copy of the dataset: https://www.sanity.io/docs/data-store/migrating-data

## Sanity

Manage content:<br>
https://bygg21-api.sanity.studio

Manage users:<br>
https://manage.sanity.io/

Project ID:<br>
q2a6l50y
