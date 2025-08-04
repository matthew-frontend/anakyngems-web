export default {
  name: "blog",
  title: "Blog Posts",
  type: "document",
  icon: () => "📝",
  fields: [
    {
      name: "title",
      title: "ชื่อ Content",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "ชื่อ Path",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "รูปภาพหลัก Content",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    },
    {
      name: "tags",
      title: "Tags Content",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "excerpt",
      title: "Intro Description",
      type: "text",
      rows: 4,
      description: "รายละเอียดของ Contentจะอยู่บนส่วนบนสุด (ไม่ใส่ก็ได้)",
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "galleryImages",
      title: "รูปภาพ Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(2),
      description: "สามารถเพิ่มได้สูงสุด 2 รูป",
    },
    {
      name: "content",
      title: "รายละเอียดของ Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      description: "ไม่ต้องเลือกก็ได้ ระบบจะ auto เป็นวันที่ปัจจุบัน",
      initialValue: () => new Date().toISOString(),
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};
