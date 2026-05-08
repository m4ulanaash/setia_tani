import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Produk Setia Tani',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Produk',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Harga',
      type: 'string',
      description: 'Contoh: Rp 15.000 / kg',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto Produk',
      type: 'image',
      options: {
        hotspot: true, // Memungkinkan crop gambar di admin panel
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'linkWA',
      title: 'Link WhatsApp',
      type: 'url',
      description: 'Contoh: https://wa.me/6281234567890 (Jika dikosongkan, akan otomatis menggunakan nomor WA default)',
    }),
  ],
})
