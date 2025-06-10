// 📋 ÍNDICE DOS SCHEMAS - REGISTRA TODOS OS TIPOS DE CONTEÚDO

// 🎨 Importar o schema do projeto
import project from "./project.js";

// 🏠 Importar configurações do site (se existir)
// import siteSettings from './siteSettings.js'

// 📊 LISTA DE TODOS OS SCHEMAS
// Adicione aqui todos os tipos de conteúdo que você criar
export const schemaTypes = [
  project, // Schema principal dos projetos
  // siteSettings,      // Configurações gerais do site (descomente se criar)
];

// 🎯 EXPORTAÇÃO PADRÃO
export default schemaTypes;

// 📝 COMO ADICIONAR NOVOS SCHEMAS:
/*

1. Crie um novo arquivo (ex: siteSettings.js)
2. Importe aqui no topo: import siteSettings from './siteSettings.js'
3. Adicione na lista schemaTypes: [..., siteSettings]
4. Reinicie o Sanity Studio (Ctrl+C e npm run dev)

Exemplos de schemas úteis:
- siteSettings.js (configurações gerais)
- blogPost.js (posts do blog)
- testimonial.js (depoimentos)
- client.js (informações de clientes)

*/
