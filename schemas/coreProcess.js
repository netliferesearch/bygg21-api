export default {
  name: 'coreProcess',
  title: 'Kjerneprosesser',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
    },
    {
      name: 'process',
      title: 'Prosesser',
      type: 'array',
      of: [
        {
          name: 'processes',
          title: 'Prosesser',
          type: 'object',
          fields: [
            {
              name: 'processItem',
              title: 'Prosesspunkt',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'deliveries',
      title: 'Leveranser',
      type: 'array',
      of: [
        {
          name: 'delivery',
          title: 'Leveranse',
          type: 'object',
          fields: [
            {
              name: 'deliveryItem',
              title: 'Leveransepunkt',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'perspective',
      title: 'Perspektiv',
      type: 'string',
      options: {
        list: [{ title: 'Eier', value: 'owner' }, { title: 'Bruker', value: 'user' }, { title: 'Utøvende', value: 'executive' }, { title: 'Offentlig', value: 'public' }],
        layout: 'dropdown',
      },
    },
  ],
};
