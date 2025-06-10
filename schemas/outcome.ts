import { defineField, defineType } from "sanity";

export default defineType({
  name: "outcome",
  title: "Resultado/Métrica",
  type: "object",
  fields: [
    defineField({
      name: "metric",
      title: "Nome da Métrica",
      type: "string",
      description: "Ex: Conversão, Abandono de Carrinho, Downloads",
      validation: (Rule) => Rule.required().max(30),
    }),
    defineField({
      name: "value",
      title: "Valor/Resultado",
      type: "string",
      description: "Ex: +47%, -23%, 50K+, 4.8/5",
      validation: (Rule) => Rule.required().max(20),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "string",
      description: "Explicação detalhada do resultado",
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: "type",
      title: "Tipo de Métrica",
      type: "string",
      description: "Categoria do resultado",
      options: {
        list: [
          { title: "Aumento ⬆️", value: "increase" },
          { title: "Redução ⬇️", value: "decrease" },
          { title: "Volume 📊", value: "volume" },
          { title: "Avaliação ⭐", value: "rating" },
          { title: "Tempo ⏱️", value: "time" },
          { title: "Outros 📈", value: "other" },
        ],
      },
      initialValue: "increase",
    }),
    defineField({
      name: "icon",
      title: "Ícone",
      type: "string",
      description: "Emoji ou ícone para a métrica",
      placeholder: "Ex: 📈, 💰, ⭐, 🚀",
    }),
  ],
  preview: {
    select: {
      metric: "metric",
      value: "value",
      type: "type",
      icon: "icon",
    },
    prepare(selection) {
      const { metric, value, type, icon } = selection;
      const typeEmojis = {
        increase: "⬆️",
        decrease: "⬇️",
        volume: "📊",
        rating: "⭐",
        time: "⏱️",
        other: "📈",
      };

      return {
        title: `${icon || typeEmojis[type] || "📈"} ${metric}: ${value}`,
        subtitle: type,
      };
    },
  },
});
