# 📐 Arquitetura do Projeto - RP Holding

## Estrutura Geral

```
rp-holding/
├── public/                    # Assets estáticos
├── src/
│   ├── components/           # Componentes reutilizáveis
│   ├── sections/             # Seções da página
│   ├── pages/                # Páginas
│   ├── layouts/              # Layouts base
│   ├── assets/               # Imagens, ícones
│   ├── index.css             # Estilos globais
│   ├── App.jsx               # Componente principal
│   └── main.jsx              # Entrada
├── index.html                # HTML raiz
├── package.json              # Dependências
├── vite.config.js            # Config Vite
├── tailwind.config.js        # Config Tailwind
├── postcss.config.js         # Config PostCSS
├── .eslintrc.json            # ESLint config
├── Dockerfile                # Build Docker
├── docker-compose.yml        # Compose config
├── .gitignore
├── .dockerignore
├── .env.example
├── README.md
├── QUICKSTART.md
├── DEPLOY.md
└── STRUCTURE.md              # Este arquivo
```

## 📦 Componentes

### `/src/components`

#### Button.jsx

- Componente reutilizável de botão
- Variantes: primary, secondary, tertiary
- Tamanhos: sm, md, lg
- Props: `variant`, `size`, `className`, `...props`

#### Container.jsx

- Wrapper com max-width e padding
- Centraliza conteúdo
- Responsivo automático

#### Header.jsx

- Navegação fixa no topo
- Menu mobile responsivo
- Links para seções
- Logo da empresa

#### Footer.jsx

- Footer completo
- Links úteis
- Informações de contato
- Copyright

#### SectionTitle.jsx

- Título com subtítulo opcional
- Estilos padronizados
- Usar em todas as seções

#### Icon.jsx

- Ícones SVG customizados
- RobotIcon, AnalyticsIcon, IntegrateIcon, CloudIcon, CheckIcon, ArrowRightIcon, SparklesIcon
- Escaláveis (className)

#### SEO.jsx

- Gerencia JSON-LD estruturado
- Atualiza meta tags
- Scroll automático ao topo

### `/src/sections`

#### HeroSection.jsx

- Landing principal
- Headline + subheadline
- 2 CTAs principais
- Background gradiente animado
- Decorativos circulares

#### AISolutionsSection.jsx

- 4 soluções de IA em grid
- Cards com hover animations
- Ícones coloridos
- Descrições claras

#### TechnologySection.jsx

- Stack tecnológico em grid (6 colunas)
- Nomes + descrições
- Animated hover
- Card descrição final

#### ProcessSection.jsx

- 3 etapas numeradas
- Timeline conectado
- Highlights com checkmarks
- Layout horizontal

#### ImpactSection.jsx

- Métricas principais
- Counter animado
- Cards com números
- CTA contextual

#### AboutSection.jsx

- Grid 2 colunas (desktop)
- Conteúdo + visual animado
- 4 valores da empresa
- Stats finais

#### CTASection.jsx

- Seção de conversão final
- Call-to-action forte
- Links WhatsApp e Telefone
- Trust indicators

## 🎨 Design System

### Cores (tailwind.config.js)

```
Primary (Azul Petróleo):
  50-900: Gradações de azul

Accent (Laranja):
  50-900: Gradações de laranja

Surface (Neutro):
  50-900: Cinza/preto
```

### Componentes CSS (index.css)

```
.hero-title        → Títulos grandes
.section-title     → Títulos de seção
.btn-primary      → Botão primário
.btn-secondary    → Botão secundário
.container-clean  → Container com padding
.section-spacing  → Py de seção
.gradient-text    → Efeito gradiente
.glass-effect     → Glassmorphism
.card-hover       → Hover efeito
.text-subtle      → Texto secundário
.text-strong      → Texto bold
```

## 🎬 Animações

### Framer Motion

```
- fade-in: opacity 0→1
- slide-up: translateY slide
- glow: opacity pulso
- Hover effects
- Scroll triggers
```

## 📱 Responsive Design

```
Mobile:     < 768px    → Stack vertical
Tablet:   768-1024px   → Layouts intermediários
Desktop:   > 1024px    → Layouts completos
```

## 🔧 Stack Técnico

```
Build:      Vite 5
Framework:  React 18
Styling:    TailwindCSS 3
Animation:  Framer Motion
Icons:      Custom SVG
Fonts:      Inter (Google)
```

## 📊 Performance

- Code splitting automático (Vite)
- Tree-shaking de CSS (Tailwind)
- Lazy loading de componentes
- Minificação (terser)
- Image optimization ready
- Core Web Vitals optimizados

## 🔐 SEO

- Meta tags configuradas (index.html)
- JSON-LD estruturado (SEO.jsx)
- Open Graph (index.html)
- Canonical URLs
- Sitemap ready

## 🚀 Deploy

### Docker

- Multi-stage build
- Serve para produção
- Health checks
- Network config

### Opções

1. Coolify (Docker)
2. Vercel (Vite preset)
3. Netlify
4. Self-hosted Docker

## 🔄 Workflow

```
1. Design em Figma/Sketch
2. Componentes em /components
3. Seções em /sections
4. Integração em pages/Home
5. Teste: npm run dev
6. Build: npm run build
7. Deploy: Docker/Vercel
```

## 📝 Guia de Adicionar Seções

### 1. Criar arquivo em `/sections`

```jsx
// MeuComponente.jsx
import { motion } from "framer-motion";
import Container from "../components/Container";

export default function MinhaSecao() {
  return (
    <section id="my-section" className="section-spacing">
      <Container>{/* Conteúdo */}</Container>
    </section>
  );
}
```

### 2. Exportar em `/sections/index.js`

```js
export { default as MinhaSecao } from "./MinhaSecao";
```

### 3. Importar em `Home.jsx`

```jsx
import { MinhaSecao } from "../sections";

// Dentro do return
<MinhaSecao />;
```

## 🐛 Debugging

### Desenvolvimento

```bash
npm run dev      # Vite dev server
npm run lint     # ESLint
```

### Build

```bash
npm run build    # Production build
npm run preview  # Preview build local
```

### Docker

```bash
docker build -t rp-holding .
docker run -p 3000:3000 rp-holding
```

## 📚 Referências

- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)

## 🎯 Checklist Novo Projeto

- [ ] npm install
- [ ] npm run dev (teste)
- [ ] .env.local setup
- [ ] Números de contato atualizados
- [ ] Assets/logo no lugar
- [ ] Build test
- [ ] Docker build test
- [ ] Lint check
- [ ] Deploy

---

**Desenvolvido com ❤️ pela RP Holding**
