import { defineField, defineType } from "sanity";

export default defineType({
  name: "relatedProject",
  title: "Projeto Relacionado",
  type: "object",
  fields: [
    defineField({
      name: "project",
      title: "Projeto",
      type: "reference",
      to: [{ type: "project" }],
      description: "Selecione um projeto existente",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "relationship",
      title: "Tipo de Relação",
      type: "string",
      description: "Como este projeto se relaciona",
      options: {
        list: [
          { title: "Projeto Similar", value: "similar" },
          { title: "Mesmo Cliente", value: "same-client" },
          { title: "Mesma Tecnologia", value: "same-tech" },
          { title: "Evolução/Versão", value: "evolution" },
          { title: "Complementar", value: "complementary" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "project.title",
      subtitle: "relationship",
      media: "project.mainImage",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || "Projeto não encontrado",
        subtitle: subtitle || "Sem tipo definido",
        media: media,
      };
    },
  },
});
