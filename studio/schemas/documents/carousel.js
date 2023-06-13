export default {
  name: 'carousel',
  type: 'document',
  title: 'Carousel',
  fields: [
    {
      name: 'carouselImages',
      type: 'array',
      title: 'Obrázky carouselu',
      of: [{type: 'carouselImage'}]
    }
  ],
  preview: {
    select: {},
    prepare () {
      return {
        title: 'Nastavení carouselu'
      }
    }
  }
}
