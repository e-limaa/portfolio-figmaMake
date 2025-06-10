import { defineField, defineType } from "sanity";

export default defineType({
  name: "processStep",
  title: "Etapa do Processo",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Título da Etapa",
      type: "string",
      description: "Ex: Pesquisa, Wireframes, Prototipação",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      description: "Breve explicação do que foi feito nesta etapa",
      rows: 3,
      validation: (Rule) => Rule.required().min(20).max(200),
    }),
    defineField({
      name: "icon",
      title: "Ícone/Emoji",
      type: "string",
      description: "Emoji ou ícone que representa esta etapa (ex: 🔍, 📐, 🎨)",
      validation: (Rule) => Rule.required().max(10),
    }),
    defineField({
      name: "duration",
      title: "Duração",
      type: "string",
      description: "Tempo gasto nesta etapa (opcional)",
      placeholder: "Ex: 2 semanas",
    }),
    defineField({
      name: "deliverables",
      title: "Entregáveis",
      type: "array",
      description: "O que foi produzido nesta etapa",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "icon",
    },
    prepare(selection) {
      const { title, subtitle, icon } = selection;
      return {
        title: `${icon || "📋"} ${title}`,
        subtitle: subtitle,
      };
    },
  },
});
