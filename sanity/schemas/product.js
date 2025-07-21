export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Product Title',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().positive()
    },
    {
      name: 'oldPrice',
      title: 'Original Price (Optional)',
      type: 'number',
      validation: Rule => Rule.positive()
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{
        type: 'image',
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
      }],
      validation: Rule => Rule.min(1).error('At least one image is required')
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
      options: {
        list: [
          { title: 'New In', value: 'NEW IN' },
          { title: 'Sale', value: 'SALE' },
          { title: 'Hot', value: 'HOT' },
          { title: 'Limited', value: 'LIMITED' }
        ]
      }
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'variants',
      title: 'Product Variants',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'color',
            title: 'Color',
            type: 'string'
          },
          {
            name: 'size',
            title: 'Size',
            type: 'string'
          },
          {
            name: 'material',
            title: 'Material',
            type: 'string'
          }
        ]
      }]
    },
    {
      name: 'details',
      title: 'Product Details',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      price: 'price'
    },
    prepare(selection) {
      const { title, media, price } = selection
      return {
        title,
        subtitle: `$${price}`,
        media
      }
    }
  }
}