export default {
  name: 'carouselImage',
  type: 'image',
  title: 'Obrázek',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Popis obrázku je důležitý pro přístupnost a SEO.',
      validation: Rule => Rule.error('Popis obrázku musí být vyplněn.').required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt'
    }
  }
}
