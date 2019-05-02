export default {
  name: 'stepDetails',
  title: 'Steg meta',
  type: 'object',
  fields: [
    {
      name: 'number',
      title: 'Nummer på steget',
      type: 'number',
    },
    {
      name: 'title',
      title: 'Navn på steget',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Formål med steget',
      type: 'text',
    },
  ],
};
