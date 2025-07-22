import BadgeField from '../components/BadgeField.jsx'
import VariantTypeField from '../components/VariantTypeField.jsx'
import VariantTextField from '../components/VariantTextField.jsx'

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
      name: 'badgeType',
      title: 'Badge Type (Optional)',
      type: 'string',
      options: {
        list: [
          { title: 'None (No badge)', value: null },
          { title: 'Sale (Auto-calculate % OFF)', value: 'sale' },
          { title: 'New In', value: 'new' }
        ]
      }
    },
    {
      name: 'badge',
      title: 'Badge Text (Auto-generated)',
      type: 'string',
      description: 'This field is auto-generated based on Badge Type selection',
      components: {
        input: BadgeField
      }
    },
    {
      name: 'variantType',
      title: 'Variant Display Type (Auto-generated)',
      type: 'string',
      description: 'Auto-generated based on Badge Type: new="text", sale="marquee"',
      components: {
        input: VariantTypeField
      }
    },
    {
      name: 'variantText',
      title: 'Variant Text (Auto-generated)',
      type: 'string',
      description: 'Auto-generated based on Badge Type and discount calculation',
      components: {
        input: VariantTextField
      }
    },
    {
      name: 'material',
      title: 'Material',
      type: 'string',
      options: {
        list: [
          { title: 'Sterling Silver', value: 'sterling-silver' },
          { title: 'Gold', value: 'gold' },
          { title: 'Rose Gold', value: 'rose-gold' },
          { title: 'Platinum', value: 'platinum' },
          { title: 'Diamond', value: 'diamond' }
        ]
      }
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
      name: 'productTags',
      title: 'Product Tags (Optional)',
      type: 'array',
      of: [{
        type: 'string'
      }],
      options: {
        list: [
          { title: 'Recommended', value: 'recommended' },
          { title: 'For Sale', value: 'for_sale' },
          { title: 'Best Seller', value: 'best_seller' },
          { title: 'Highlight Products', value: 'highlight_products' }
        ]
      },
      description: 'Select one or more tags to categorize this product for special sections'
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