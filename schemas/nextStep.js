export default {
  name: 'nextStep',
  title: 'Neste steg',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
    },
    {
      name: 'version',
      title: 'Versjon',
      type: 'number',
      description: 'Hvilken versjon av normen. Feks: 1.2',
    },
    {
      name: 'lastChanged',
      title: 'Sist endret',
      type: 'date',
      description: 'Når ble normen sist endret.',
    },

    // STEP
    {
      name: 'step',
      title: 'Steg',
      type: 'array',
      of: [
        {
          name: 'step',
          title: 'Steg',
          type: 'object',
          fields: [
            {
              name: 'stepNumber',
              title: 'Steg nummer',
              type: 'number',
            },
            {
              name: 'stepTitle',
              title: 'Steg tittel',
              type: 'string',
            },
            {
              name: 'stepDescription',
              title: 'Steg beskrivelse',
              type: 'text',
            },
          ],
          preview: {
            select: {
              title: 'stepNumber',
              subtitle: 'stepTitle',
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

    // CORE PROCESS
    {
      name: 'coreProcess',
      title: 'Kjerneprosesser',
      type: 'array',
      of: [
        {
          name: 'process',
          title: 'Prosess',
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
                list: [{ title: 'Eier', value: 'owner' }, { title: 'Bruker', value: 'user' }],
                layout: 'dropdown',
              },
            },
          ],
        },
      ],
    },

    // MANAGEMENT PROCESS
    {
      name: 'managementProcess',
      title: 'Ledelsesprosesser',
      type: 'array',
      of: [
        {
          name: 'process',
          title: 'Prosess',
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
        },
      ],
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
    select: { title: 'title' },
  },
};
