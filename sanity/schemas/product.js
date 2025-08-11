import BadgeField from "../components/BadgeField.jsx";
import VariantTypeField from "../components/VariantTypeField.jsx";
import VariantTextField from "../components/VariantTextField.jsx";

export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "ชื่อสินค้า",
      type: "string",
      // validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug (ลิ้งค์ที่แสดง)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      // validation: Rule => Rule.required()
    },
    {
      name: "description",
      title: "รายละเอียดสินค้า",
      type: "text",
      rows: 4,
    },
    {
      name: "price",
      title: "ราคา",
      type: "number",
      // validation: Rule => Rule.required().positive()
    },
    {
      name: "oldPrice",
      title: "ราคาเดิมของผลิตภัณฑ์",
      type: "number",
      description:
        "ถ้าใส่ราคาเดิม จะอัตโนมัติเลือกประเภทป้ายเป็น Sale และเพิ่มแท็ก For Sale",
      validation: (Rule) => 
        Rule.positive().custom((oldPrice, context) => {
          const price = context.document?.price;
          if (oldPrice && price && oldPrice <= price) {
            return 'ราคาเดิมต้องมากกว่าราคาปัจจุบัน (Old price must be greater than current price)';
          }
          return true;
        })
    },
    {
      name: "images",
      title: "รูปภาพสินค้า (เพิ่มได้มากกว่า 1 รูป)",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
      // validation: Rule => Rule.min(1).error('At least one image is required')
    },
    {
      name: "category",
      title: "หมวดหมู่ผลิตภัณฑ์",
      type: "reference",
      to: [{ type: "category" }],
      // validation: Rule => Rule.required()
    },
    {
      name: "badgeType",
      title: "ประเภทป้ายของผลิตภัณฑ์ (ตัวเลือก)",
      type: "string",
      description: "ถ้าใส่ราคาเดิม (oldPrice) ควรเลือก 'Sale (Auto-calculate % OFF)'",
      options: {
        list: [
          { title: "ไม่มีป้าย (No badge)", value: null },
          { title: "Sale (Auto-calculate % OFF)", value: "sale" },
          { title: "New In", value: "new" },
        ],
      },
    },
    {
      name: "badge",
      title: "Badge Text (Auto-generated)",
      type: "string",
      description: "This field is auto-generated based on Badge Type selection",
      hidden: true,
      components: {
        input: BadgeField,
      },
    },
    {
      name: "variantType",
      title: "Variant Display Type (Auto-generated)",
      type: "string",
      description:
        'Auto-generated based on Badge Type: new="text", sale="marquee"',
      hidden: true,
      components: {
        input: VariantTypeField,
      },
    },
    {
      name: "variantText",
      title: "Variant Text (Auto-generated)",
      type: "string",
      description:
        "Auto-generated based on Badge Type and discount calculation",
      hidden: true,
      components: {
        input: VariantTextField,
      },
    },
    // {
    //   name: "material",
    //   title: "Material",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "Sterling Silver", value: "sterling-silver" },
    //       { title: "Gold", value: "gold" },
    //       { title: "Rose Gold", value: "rose-gold" },
    //       { title: "Platinum", value: "platinum" },
    //       { title: "Diamond", value: "diamond" },
    //     ],
    //   },
    // },
    {
      name: "productTags",
      title:
        "ประเภทสินค้า สำหรับให้โชว์แต่ละ section ของหน้าแรก (ไม่เลือกก็ได้)",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        list: [
          { title: "Recommended", value: "recommended" },
          { title: "For Sale", value: "for_sale" },
          { title: "Best Seller", value: "best_seller" },
          {
            title: "Highlight Products (สูงสุด 3 ชิ้น)",
            value: "highlight_products",
          },
        ],
      },
      description:
        "เลือกแท็กหนึ่งรายการหรือมากกว่าเพื่อจัดหมวดหมู่ผลิตภัณฑ์นี้ (ถ้าใส่ราคาเดิม ควรเลือก 'For Sale')",
    },
    {
      name: "variants",
      title: "Product Variants",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "color",
              title: "สี",
              type: "string",
            },
            {
              name: "weight",
              title: "น้ำหนัก",
              type: "string",
            },
            {
              name: "material",
              title: "วัสดุ",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
      price: "price",
    },
    prepare(selection) {
      const { title, media, price } = selection;
      return {
        title,
        subtitle: `$${price}`,
        media,
      };
    },
  },

  // กำหนดการจัดกลุ่มและเรียงลำดับ
  orderings: [
    {
      title: "Category, then Title",
      name: "categoryTitle",
      by: [
        { field: "category.title", direction: "asc" },
        { field: "title", direction: "asc" },
      ],
    },
    {
      title: "Price (High to Low)",
      name: "priceDesc",
      by: [{ field: "price", direction: "desc" }],
    },
    {
      title: "Price (Low to High)",
      name: "priceAsc",
      by: [{ field: "price", direction: "asc" }],
    },
    {
      title: "Recently Created",
      name: "createdDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
};
