// 📋 SCHEMA DO PROJETO - DEFINE COMO OS DADOS SÃO ORGANIZADOS NO CMS
// Este arquivo diz ao Sanity quais campos cada projeto deve ter

export default {
  // 🏷️ INFORMAÇÕES BÁSICAS DO SCHEMA
  name: "project", // Nome interno (usado no código)
  title: "Projetos", // Nome que aparece no Studio
  type: "document", // Tipo de documento
  icon: () => "🎨", // Ícone que aparece no menu

  // 📝 CAMPOS DO PROJETO
  fields: [
    // ✏️ TÍTULO DO PROJETO
    {
      name: "title",
      title: "Título do Projeto",
      type: "string",
      description:
        'Nome principal do seu projeto (ex: "App de Receitas Sociais")',
      validation: (Rule) => Rule.required().min(10).max(100),
    },

    // 🔗 SLUG (URL AMIGÁVEL)
    {
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      description:
        'URL do projeto (ex: app-receitas-sociais). Clique "Generate" para criar automaticamente',
      options: {
        source: "title", // Gera automaticamente baseado no título
        maxLength: 50,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-") // Espaços viram hífens
            .replace(/[^\w\-]+/g, "") // Remove caracteres especiais
            .replace(/\-\-+/g, "-") // Remove hífens duplos
            .replace(/^-+/, "") // Remove hífen do início
            .replace(/-+$/, ""), // Remove hífen do fim
      },
      validation: (Rule) => Rule.required(),
    },

    // 📝 SUBTÍTULO (DESCRIÇÃO CURTA)
    {
      name: "subtitle",
      title: "Subtítulo",
      type: "text",
      description: "Descrição curta do projeto em 1-2 linhas",
      rows: 2,
      validation: (Rule) => Rule.required().min(20).max(200),
    },

    // 🏷️ CATEGORIA
    {
      name: "category",
      title: "Categoria",
      type: "string",
      description: "Tipo de projeto",
      options: {
        list: [
          { title: "UX/UI Design", value: "ux-ui" },
          { title: "Web Design", value: "web" },
          { title: "Mobile App", value: "mobile" },
          { title: "Dashboard", value: "dashboard" },
          { title: "E-commerce", value: "ecommerce" },
          { title: "Landing Page", value: "landing" },
          { title: "Sistema", value: "system" },
          { title: "Outros", value: "other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },

    // 🏷️ TAGS
    {
      name: "tags",
      title: "Tags",
      type: "array",
      description: "Palavras-chave do projeto (ex: React, Figma, E-commerce)",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },

    // 🖼️ IMAGEM PRINCIPAL
    {
      name: "mainImage",
      title: "Imagem Principal",
      type: "image",
      description: "Imagem de capa do projeto (recomendado: 1200x800px)",
      options: {
        hotspot: true, // Permite escolher ponto focal da imagem
      },
      fields: [
        {
          name: "alt",
          title: "Texto Alternativo",
          type: "string",
          description: "Descrição da imagem para acessibilidade",
        },
      ],
      validation: (Rule) => Rule.required(),
    },

    // ❗ PROBLEMA/DESAFIO
    {
      name: "problemStatement",
      title: "Problema/Desafio",
      type: "text",
      description:
        "Qual problema este projeto resolve? Explique o contexto e desafios enfrentados",
      rows: 4,
      validation: (Rule) => Rule.required().min(100).max(1000),
    },

    // ⏱️ DURAÇÃO DO PROJETO
    {
      name: "duration",
      title: "Duração",
      type: "string",
      description: 'Quanto tempo levou o projeto (ex: "3 meses", "6 semanas")',
      validation: (Rule) => Rule.required(),
    },

    // 💻 PLATAFORMA
    {
      name: "platform",
      title: "Plataforma",
      type: "string",
      description: 'Onde o projeto roda (ex: "Web", "iOS/Android", "Desktop")',
      options: {
        list: [
          "Web",
          "iOS",
          "Android",
          "iOS/Android",
          "Desktop",
          "Web/Mobile",
          "Todas as plataformas",
        ],
      },
      validation: (Rule) => Rule.required(),
    },

    // 🔄 PASSOS DO PROCESSO
    {
      name: "processSteps",
      title: "Processo de Design",
      type: "array",
      description: "Etapas que você seguiu para criar este projeto",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Nome da Etapa",
              type: "string",
              description: 'Ex: "Pesquisa", "Wireframes", "Prototipação"',
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Descrição",
              type: "text",
              description: "O que você fez nesta etapa",
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
            {
              name: "icon",
              title: "Ícone",
              type: "string",
              description: "Emoji que representa esta etapa (ex: 🔍, 📐, 🎨)",
              validation: (Rule) => Rule.required().max(2),
            },
            {
              name: "duration",
              title: "Duração (opcional)",
              type: "string",
              description: "Quanto tempo levou esta etapa",
            },
            {
              name: "deliverables",
              title: "Entregáveis (opcional)",
              type: "array",
              description: "O que foi criado nesta etapa",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(3).max(8),
    },

    // 🖼️ GALERIA DE IMAGENS
    {
      name: "gallery",
      title: "Galeria de Imagens",
      type: "array",
      description: "Screenshots, mockups e outras imagens do projeto",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Imagem",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "caption",
              title: "Legenda",
              type: "string",
              description: "Descrição do que está sendo mostrado na imagem",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "category",
              title: "Categoria (opcional)",
              type: "string",
              description: "Tipo de imagem",
              options: {
                list: [
                  "Tela Principal",
                  "Fluxo de Usuário",
                  "Wireframe",
                  "Protótipo",
                  "Antes/Depois",
                  "Mobile",
                  "Desktop",
                  "Detalhes",
                ],
              },
            },
            {
              name: "order",
              title: "Ordem",
              type: "number",
              description: "Número para organizar as imagens",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(3).max(20),
    },

    // 🔗 URL DO PROTÓTIPO
    {
      name: "prototypeUrl",
      title: "Link do Protótipo",
      type: "url",
      description: "Link para o protótipo no Figma, Adobe XD, etc.",
    },

    // 📊 URL DO CASE STUDY
    {
      name: "caseStudyUrl",
      title: "Link do Case Study Completo",
      type: "url",
      description: "Link para documentação completa (Behance, Medium, etc.)",
    },

    // 📈 RESULTADOS/IMPACTO
    {
      name: "outcomes",
      title: "Resultados e Impacto",
      type: "array",
      description: "Métricas e resultados que o projeto alcançou",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "metric",
              title: "Métrica",
              type: "string",
              description:
                'Nome da métrica (ex: "Taxa de Conversão", "Downloads")',
              validation: (Rule) => Rule.required(),
            },
            {
              name: "value",
              title: "Valor",
              type: "string",
              description: 'Resultado alcançado (ex: "+47%", "50K+", "4.8/5")',
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Descrição",
              type: "string",
              description: "Explicação do resultado",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "type",
              title: "Tipo de Resultado",
              type: "string",
              options: {
                list: [
                  { title: "Aumento ⬆️", value: "increase" },
                  { title: "Redução ⬇️", value: "decrease" },
                  { title: "Volume 📊", value: "volume" },
                  { title: "Avaliação ⭐", value: "rating" },
                  { title: "Tempo ⏱️", value: "time" },
                  { title: "Outro 📈", value: "other" },
                ],
              },
            },
            {
              name: "icon",
              title: "Ícone (opcional)",
              type: "string",
              description: "Emoji para representar a métrica",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(2).max(6),
    },

    // 🔗 PROJETOS RELACIONADOS
    {
      name: "relatedProjects",
      title: "Projetos Relacionados",
      type: "array",
      description: "Outros projetos que se conectam com este",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "project",
              title: "Projeto",
              type: "reference",
              to: [{ type: "project" }],
              validation: (Rule) => Rule.required(),
            },
            {
              name: "relationship",
              title: "Tipo de Relação (opcional)",
              type: "string",
              description:
                'Como se relacionam (ex: "Continuação", "Mesmo cliente")',
              options: {
                list: [
                  "Mesmo cliente",
                  "Tecnologia similar",
                  "Continuação",
                  "Mesmo setor",
                  "Projeto anterior",
                  "Inspiração",
                ],
              },
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    },

    // ⭐ PROJETO EM DESTAQUE
    {
      name: "featured",
      title: "Projeto em Destaque",
      type: "boolean",
      description: "Marque para aparecer na seção de destaques da home",
      initialValue: false,
    },

    // ✅ PUBLICADO
    {
      name: "published",
      title: "Publicado",
      type: "boolean",
      description: "Desmarque para esconder o projeto do site",
      initialValue: true,
    },

    // 📅 DATA DE PUBLICAÇÃO
    {
      name: "publishedAt",
      title: "Data de Publicação",
      type: "datetime",
      description: "Quando o projeto foi finalizado",
      validation: (Rule) => Rule.required(),
    },

    // 🔢 ORDEM
    {
      name: "order",
      title: "Ordem de Exibição",
      type: "number",
      description:
        "Número para organizar os projetos (menor número = aparece primeiro)",
      initialValue: 1,
    },
  ],

  // 👁️ PREVIEW - COMO O PROJETO APARECE NA LISTA DO STUDIO
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "mainImage",
      published: "published",
      featured: "featured",
    },
    prepare(selection) {
      const { title, subtitle, published, featured } = selection;

      let status = "";
      if (!published) status += "🚫 "; // Não publicado
      if (featured) status += "⭐ "; // Em destaque

      return {
        title: status + title,
        subtitle: subtitle,
      };
    },
  },

  // 📋 ORDENAÇÃO PADRÃO NO STUDIO
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
      title: "Mais Recentes",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Projetos em Destaque",
      name: "featured",
      by: [
        { field: "featured", direction: "desc" },
        { field: "publishedAt", direction: "desc" },
      ],
    },
  ],
};

// 🎯 COMO USAR ESTE SCHEMA:
/*

1. 📝 CADASTRAR UM PROJETO NO STUDIO:
   - Abra http://localhost:3333
   - Clique em "Projetos" → "Create"
   - Preencha os campos obrigatórios (marcados com *)
   - Clique "Publish"

2. 🖼️ FAZER UPLOAD DE IMAGENS:
   - Clique no campo de imagem
   - Arraste a imagem ou clique "Upload"
   - Aguarde o upload finalizar

3. 📊 ORGANIZAR PROJETOS:
   - Use o campo "Ordem" para definir qual aparece primeiro
   - Marque "Featured" para destacar na home
   - Desmarque "Published" para esconder temporariamente

4. 🔗 CONECTAR PROJETOS:
   - No campo "Projetos Relacionados"
   - Clique "Add item" → selecione outro projeto
   - Escolha o tipo de relação

*/
