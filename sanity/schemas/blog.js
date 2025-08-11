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
        {
          name: "imageGroup",
          title: "Image Group (2 images side by side)",
          type: "object",
          fields: [
            {
              name: "images",
              title: "Images (max 2)",
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
              validation: (Rule) => Rule.max(2).min(2).error('Please add exactly 2 images'),
            },
          ],
          preview: {
            select: {
              image1: "images.0",
              image2: "images.1",
            },
            prepare({ image1, image2 }) {
              return {
                title: "Image Group (2 images)",
                media: image1,
              };
            },
          },
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
