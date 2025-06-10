import { defineField, defineType } from "sanity";

export default defineType({
  name: "galleryItem",
  title: "Item da Galeria",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Imagem",
      type: "image",
      description: "Tela ou interface do projeto",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texto alternativo",
          description: "Descrição da imagem para acessibilidade",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Legenda",
      type: "string",
      description: "Descrição do que é mostrado na imagem",
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
      name: "category",
      title: "Categoria da Tela",
      type: "string",
      description: "Tipo de interface mostrada",
      options: {
        list: [
          { title: "Página Inicial", value: "homepage" },
          { title: "Login/Cadastro", value: "auth" },
          { title: "Dashboard", value: "dashboard" },
          { title: "Busca/Filtros", value: "search" },
          { title: "Detalhes/Produto", value: "details" },
          { title: "Checkout/Pagamento", value: "checkout" },
          { title: "Perfil/Configurações", value: "profile" },
          { title: "Mobile/Responsive", value: "mobile" },
          { title: "Outros", value: "other" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Ordem",
      type: "number",
      description: "Ordem de exibição na galeria",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "caption",
      subtitle: "category",
      media: "image",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: subtitle || "Sem categoria",
        media: media,
      };
    },
  },
});
