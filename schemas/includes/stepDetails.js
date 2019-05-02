export default {
  name: 'stepDetails',
  title: 'Steg meta',
  type: 'object',
  fields: [
    {
      name: 'stepNumber',
      title: 'Nummer på steget',
      type: 'number',
    },
    {
      name: 'stepTitle',
      title: 'Navn på steget',
      type: 'string',
    },
    {
      name: 'stepDescription',
      title: 'Formål med steget',
      type: 'text',
    },
  ],
};
