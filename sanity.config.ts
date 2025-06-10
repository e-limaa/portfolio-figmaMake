import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { colorInput } from "@sanity/color-input";
import { media } from "sanity-plugin-media";

import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "portfolio-studio",
  title: "Portfolio UX/UI - Studio",

  projectId: "w9ix77yv", // Seu Project ID
  dataset: "production",

  plugins: [deskTool(), visionTool(), colorInput(), media()],

  schema: {
    types: schemaTypes,
  },

  // Configuração do tema dark
  theme: {
    "--brand-primary": "#8A3FFC",
    "--component-bg": "#0d0d0d",
    "--component-text-color": "#ffffff",
  },

  // Configuração da estrutura do desk
  tools: (prev, { schema }) => {
    return prev.map((tool) => {
      if (tool.name === "desk") {
        return {
          ...tool,
          options: {
            ...tool.options,
            structure: (S) =>
              S.list()
                .title("Conteúdo")
                .items([
                  S.listItem()
                    .title("Projetos")
                    .icon(() => "🎨")
                    .child(
                      S.documentTypeList("project")
                        .title("Projetos")
                        .filter('_type == "project"')
                    ),
                  S.listItem()
                    .title("Configurações")
                    .icon(() => "⚙️")
                    .child(
                      S.documentTypeList("siteSettings")
                        .title("Configurações do Site")
                        .filter('_type == "siteSettings"')
                    ),
                ]),
          },
        };
      }
      return tool;
    });
  },

  // Configuração de CORS para desenvolvimento
  cors: {
    credentials: true,
    origin: [
      "http://localhost:3000",
      "https://localhost:3000",
      // Adicione outros domínios conforme necessário
    ],
  },
});
