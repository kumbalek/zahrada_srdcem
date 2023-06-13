export default {
  name: 'listOfRecipients',
  type: 'document',
  title: 'Skupina příjemců',
  fields: [
    {
      name: 'group',
      type: 'string',
      title: 'Skupina'
    },
    {
      name: 'emails',
      type: 'array',
      title: 'E-maily',
      description: 'Přidejte seznam emailů.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ]
}
