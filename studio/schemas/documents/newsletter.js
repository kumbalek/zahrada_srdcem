export default {
  name: 'newsletter',
  type: 'document',
  title: 'Newsletter',
  fields: [
    {
      name: 'subject',
      type: 'string',
      title: 'Předmět',
      description: 'Předmět e-mailu se ukáže v náhledu'
    },
    {
      name: 'month',
      type: 'string',
      title: 'Měsíc',
      description: 'Měsíc - nadpis který se zobrazí na webu'
    },
    {
      name: 'body',
      type: 'array',
      title: 'Newsletter',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            {title: 'Normální text', value: 'normal'},
            {title: 'Hlavní nadpis', value: 'h1'},
            {title: 'Vedlejší nadpis', value: 'h3'},
            {title: 'Quote', value: 'blockquote'}
          ],
          lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Number', value: 'number'}],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'}
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'subject',
      media: 'mainImage'
    },
    prepare ({title = 'No title', media}) {
      return {
        title,
        media
      }
    }
  }
}
