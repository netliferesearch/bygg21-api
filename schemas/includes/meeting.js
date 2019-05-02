export default {
  name: 'meeting',
  title: 'Møte',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Navn på møte',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Formål med møtet',
      type: 'text',
    },
    {
      name: 'coreProcesses',
      title: 'Kjerneprosesser',
      type: 'array',
      of: [{ type: 'coreProcess' }],
    },
  ],
};
