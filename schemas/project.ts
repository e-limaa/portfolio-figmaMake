import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projeto",
  type: "document",
  icon: () => "🎨",
  fields: [
    defineField({
      name: "title",
      title: "Título do Projeto",
      type: "string",
      description: "Nome principal do projeto",
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL amigável do projeto (ex: ecommerce-personalizado)",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtítulo",
      type: "text",
      description: "Breve descrição que aparece abaixo do título",
      rows: 3,
      validation: (Rule) => Rule.required().min(20).max(200),
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      description: "Tipo de projeto (UX/UI Design, Mobile App, etc.)",
      options: {
        list: [
          { title: "UX/UI Design", value: "ux-ui-design" },
          { title: "Mobile App", value: "mobile-app" },
          { title: "Web Design", value: "web-design" },
          { title: "Dashboard", value: "dashboard" },
          { title: "E-commerce", value: "ecommerce" },
          { title: "Branding", value: "branding" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags/Tecnologias",
      type: "array",
      description: "Ferramentas e tecnologias utilizadas",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: "mainImage",
      title: "Imagem Principal",
      type: "image",
      description: "Imagem de capa do projeto",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texto alternativo",
          description: "Importante para acessibilidade e SEO",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "problemStatement",
      title: "Declaração do Problema",
      type: "text",
      description: "Contexto e desafios que o projeto buscou resolver",
      rows: 6,
      validation: (Rule) => Rule.required().min(100).max(1000),
    }),
    defineField({
      name: "duration",
      title: "Duração do Projeto",
      type: "string",
      description: "Ex: 3 meses, 6 semanas",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "platform",
      title: "Plataforma",
      type: "string",
      description: "Ex: Web & Mobile, iOS, Android",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "processSteps",
      title: "Etapas do Processo",
      type: "array",
      description: "Metodologia e processo de design utilizado",
      of: [{ type: "processStep" }],
      validation: (Rule) => Rule.required().min(3).max(8),
    }),
    defineField({
      name: "gallery",
      title: "Galeria de Imagens",
      type: "array",
      description: "Principais telas e interfaces do projeto",
      of: [{ type: "galleryItem" }],
      validation: (Rule) => Rule.min(4).max(12),
    }),
    defineField({
      name: "prototypeUrl",
      title: "URL do Protótipo",
      type: "url",
      description: "Link para o protótipo interativo (Figma, InVision, etc.)",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "caseStudyUrl",
      title: "URL do Case Study",
      type: "url",
      description: "Link para case study completo (Behance, Medium, etc.)",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "outcomes",
      title: "Resultados e Impacto",
      type: "array",
      description: "Métricas e resultados alcançados com o projeto",
      of: [{ type: "outcome" }],
      validation: (Rule) => Rule.min(3).max(6),
    }),
    defineField({
      name: "relatedProjects",
      title: "Projetos Relacionados",
      type: "array",
      description: "Outros projetos similares ou complementares",
      of: [{ type: "relatedProject" }],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: "featured",
      title: "Projeto em Destaque",
      type: "boolean",
      description: "Marque para destacar este projeto na página inicial",
      initialValue: false,
    }),
    defineField({
      name: "published",
      title: "Publicado",
      type: "boolean",
      description: "Projeto visível no site",
      initialValue: true,
    }),
    defineField({
      name: "publishedAt",
      title: "Data de Publicação",
      type: "datetime",
      description: "Data em que o projeto foi publicado",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "order",
      title: "Ordem de Exibição",
      type: "number",
      description: "Ordem em que aparece na listagem (menor número = primeiro)",
      initialValue: 0,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "mainImage",
      published: "published",
    },
    prepare(selection) {
      const { title, subtitle, media, published } = selection;
      return {
        title: title,
        subtitle: `${subtitle} ${published ? "✅" : "❌"}`,
        media: media,
      };
    },
  },

  orderings: [
    {
      title: "Ordem de Exibição",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "publishedAt", direction: "desc" },
      ],
    },
    {
      title: "Mais Recente",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
