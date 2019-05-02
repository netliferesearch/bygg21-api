export default {
  name: 'documentMeta',
  title: 'Dokument meta',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      description: 'Fullstendig tittel på dokumentet',
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
  ],
};
