import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Configurações do Site",
  type: "document",
  icon: () => "⚙️",
  fields: [
    defineField({
      name: "title",
      title: "Título do Site",
      type: "string",
      description: "Nome do portfólio",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      description: "Descrição para SEO",
      rows: 3,
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Nome",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "bio",
          title: "Bio",
          type: "text",
          rows: 3,
        },
        {
          name: "avatar",
          title: "Foto de Perfil",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "location",
          title: "Localização",
          type: "string",
        },
        {
          name: "email",
          title: "Email",
          type: "string",
          validation: (Rule) => Rule.email(),
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Links Sociais",
      type: "object",
      fields: [
        { name: "linkedin", title: "LinkedIn", type: "url" },
        { name: "behance", title: "Behance", type: "url" },
        { name: "dribbble", title: "Dribbble", type: "url" },
        { name: "github", title: "GitHub", type: "url" },
        { name: "instagram", title: "Instagram", type: "url" },
        { name: "twitter", title: "Twitter/X", type: "url" },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          validation: (Rule) => Rule.max(60),
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 2,
          validation: (Rule) => Rule.max(160),
        },
        {
          name: "ogImage",
          title: "Imagem Open Graph",
          type: "image",
          description: "Imagem que aparece ao compartilhar o site",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "author.name",
    },
  },
});
