export default {
  name: 'nextStep',
  title: 'Neste steg API',
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
              title: 'Beskrivelse av steget',
              type: 'stepDetails',
            },

            // CORE PROCESS
            {
              name: 'coreProcesses',
              title: 'Kjerneprosesser',
              type: 'array',
              of: [{ type: 'coreProcess' }],
            },

            // MANAGEMENT PROCESS
            {
              name: 'managementProcesses',
              title: 'Ledelsesprosesser',
              type: 'array',
              of: [{ type: 'managementProcess' }],
            },

            // DELIVERY
            {
              name: 'deliveryFail',
              title: 'Feil ved overlevering?',
              description: 'Gå tilbake til steg 1 ved feil',
              type: 'boolean',
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
