# O Rei da Tela - Website Institucional & SEO

Website oficial da **O Rei da Tela**, assistência técnica especializada Apple em Salvador, Bahia. Desenvolvido com foco em alta performance, SEO hyperlocal e conversão.

## 🚀 Tecnologias

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation)
- **UI**: [React 19](https://react.dev/) (Componentes interativos como o Budget Wizard)
- **Estilização**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Animações**: Tailwind Transitions & Astro View Transitions
- **SEO**: [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) + JSON-LD Schema Markup

## 📁 Estrutura do Projeto

```text
/
├── docs/               # Documentação e PRD do projeto
├── public/             # Ativos estáticos (fontes, imagens globais)
├── src/
│   ├── components/     # Componentes React e Astro (Header, Footer, Wizard)
│   ├── data/           # Mock data (serviços, bairros de Salvador)
│   ├── layouts/        # Layout principal (Shell HTML, SEO tags)
│   ├── pages/          # Rotas e páginas dinâmicas (Astro)
│   └── styles/         # CSS Global e configurações de tema
├── astro.config.mjs    # Configuração do Astro e integrações
└── package.json        # Dependências e scripts
```

## 🛠️ Comandos Principais

No terminal, na raiz do projeto:

| Comando | Ação |
| :--- | :--- |
| `npm install` | Instala as dependências |
| `npm run dev` | Inicia o servidor de desenvolvimento (`localhost:4321`) |
| `npm run build` | Gera o site estático na pasta `./dist/` |
| `npm run preview` | Visualiza o build localmente |

## 📈 Estratégia de SEO

O projeto utiliza **Programmatic SEO** para gerar páginas específicas para cada bairro de Salvador:
- As rotas são geradas automaticamente baseadas em `src/data/neighborhoods.json`.
- Cada página possui Schema Markup de `LocalBusiness` e `Service`.
- Sitemap automático gerado em cada build.

## 📦 Deploy (Hostinger)

1. Execute `npm run build`.
2. Carregue o conteúdo da pasta `dist/` para a pasta `public_html` via FTP ou Gerenciador de Arquivos do Hostinger.

---

Desenvolvido por **Antigravity AI** para **O Rei da Tela**.
