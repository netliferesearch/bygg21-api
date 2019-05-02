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
              name: 'stepDetails',
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
              title: 'Er det krav om møte etter leveransen?',
              description: 'Feks oppstartsmøte mellom steg 1 og 2',
              type: 'array',
              of: [{ type: 'meeting' }],
            },
          ],
          preview: {
            select: {
              title: 'stepDetails.stepNumber',
              subtitle: 'stepDetails.stepTitle',
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
