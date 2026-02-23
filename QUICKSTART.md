# ⚡ Quick Start - RP Holding

## 🚀 Iniciar Desenvolvimento

### 1. Instalar Dependências

```bash
npm install
```

### 2. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### 3. Build para Produção

```bash
npm run build
```

Output em `dist/`

## 📁 Estrutura Rápida

```
src/
├── components/      # Botões, Header, Footer, etc
├── sections/        # Hero, AI Solutions, etc
├── pages/           # Home.jsx
└── App.jsx          # Componente principal
```

## 🎨 Personalizar

### Cores

Editar em `tailwind.config.js`:

```js
colors: {
  primary: { /* azul petróleo */ },
  accent: { /* laranja */ }
}
```

### Conteúdo

Editar em `src/sections/*`:

- HeroSection.jsx
- AISolutionsSection.jsx
- etc

### Números de Contato

Atualizar em:

- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/sections/CTASection.jsx`

Para: `+55 (31) 99834-3236`

## 📦 Build & Deploy

### Local

```bash
npm run build
npm run preview
```

### Docker

```bash
docker build -t rp-holding .
docker run -p 3000:3000 rp-holding
```

## 🔗 Links Úteis

- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)

## 💡 Dicas

- Use `npm run lint` para verificar código
- Todas as cores estão em `tailwind.config.js`
- Componentes em `src/components` são reutilizáveis
- Animações Framer Motion em `src/sections`

## ✅ Checklist Pré-Deploy

- [ ] `npm run build` sem erros
- [ ] Teste local: `npm run preview`
- [ ] `npm run lint` sem warnings
- [ ] Números de contato atualizados
- [ ] SEO title/description verificado
- [ ] Mobile responsividade testada

---

**Dúvidas?** Entre em contato: +55 (31) 99834-3236
