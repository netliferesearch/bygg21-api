export default {
  name: 'stepByStep',
  title: 'Steg for steg API',
  type: 'document',
  fields: [
    // DOCUMENT META
    {
      name: 'documentMeta',
      title: 'Beskrivelse',
      type: 'documentMeta',
    },

    // STEP
    {
      name: 'steps',
      title: 'Steg',
      type: 'array',
      of: [
        {
          name: 'step',
          title: 'Steg',
          type: 'object',
          fields: [
            // STEP DETAILS
            {
              name: 'details',
              title: 'Beskrivelse av steg',
              type: 'stepDetails',
            },

            // CORE PROCESS
            {
              name: 'coreProcesses',
              title: 'Kjerneprosesser',
              type: 'array',
              of: [{ type: 'coreProcess' }],
            },

            // MEETINGS
            {
              name: 'meetings',
              title: 'Er det et møte etter leveransen?',
              description: 'Feks "Oppstartsmøte" mellom steg 1 og 2',
              type: 'array',
              of: [{ type: 'meeting' }],
            },
          ],
          preview: {
            select: {
              title: 'details.number',
              subtitle: 'details.title',
            },
            prepare(selection) {
              const { title, subtitle } = selection;
              return {
                title: `Steg ${title}`,
                subtitle: subtitle,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: { title: 'documentMeta.title' },
  },
};
