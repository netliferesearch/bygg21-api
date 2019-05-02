export default {
  name: 'managementProcess',
  title: 'Ledelsesprosesser',
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
      name: 'sustainabilityCheck',
      title: 'Bærekraft',
      type: 'string',
      options: {
        list: [{ title: 'Økonomi', value: 'economics' }, { title: 'Miljø', value: 'enviroment' }, { title: 'Sosialt', value: 'social' }],
        layout: 'dropdown',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'sustainabilityCheck',
    },
  },
};
