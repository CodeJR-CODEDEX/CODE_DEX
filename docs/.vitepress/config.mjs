import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'pt-BR',
  title: 'CodeDex',
  description: 'Glossário de termos técnicos utilizados na computação e na Code Júnior.',
  base: '/CODE_DEX/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [{ text: 'Início', link: '/' }],
    sidebar: [
      {
        text: 'CodeDex',
        items: [
          { text: 'Início', link: '/' },
          { text: 'Básicos da Programação', link: '/basicos-da-programacao' },
          { text: 'Design e Prototipagem (Figma)', link: '/design-e-prototipagem-figma' },
          { text: 'Controle de Versão (Git e GitHub)', link: '/controle-de-versao-git-e-github' },
          { text: 'HTML e CSS', link: '/html-e-css' },
          { text: 'JavaScript', link: '/javascript' },
          { text: 'Back-End e PHP', link: '/back-end-e-php' },
          { text: 'Banco de Dados, SQL e CRUD', link: '/banco-de-dados-sql-e-crud' },
          { text: 'Metodologia e Boas Práticas', link: '/metodologia-e-boas-praticas' },
          { text: 'Termos e Práticas Internas da Code', link: '/termos-e-praticas-internas-da-code' },
          { text: 'Dúvidas Frequentes', link: '/duvidas-frequentes' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/CodeJR-CODEDEX/CODE_DEX' }],
    search: { provider: 'local' },
    outline: { label: 'Nesta página' },
    docFooter: { prev: 'Anterior', next: 'Próxima' },
    lastUpdated: { text: 'Atualizado em' }
  }
})
