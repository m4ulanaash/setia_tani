import {defineField, defineType} from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Liputan Media',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Artikel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publisher',
      title: 'Nama Publisher Media',
      type: 'string',
      description: 'Contoh: Kompasiana, KiosAgri, JurnalPost',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Thumbnail Berita',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link URL Artikel',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
})
