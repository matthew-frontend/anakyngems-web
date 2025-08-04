export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'collectionImage',
      title: 'Collection Display Image',
      type: 'image',
      description: 'Image for collection slide display (915x1250)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string'
        }
      ]
    },
    {
      name: 'delay',
      title: 'Animation Delay',
      type: 'string',
      description: 'Animation delay for wow effect (e.g., 0.1s, 0.2s)',
      placeholder: '0.1s'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in collection slide (1, 2, 3, etc.)',
      validation: Rule => Rule.min(1)
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}