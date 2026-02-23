# 📦 Package & Version Info

## Versão

**RP Holding v1.0.0**
Data: 23 de Fevereiro de 2026
Status: ✅ Pronto para Produção

## Compatibilidade

### Node.js & npm

```
Node.js: >=16.0.0 (recomendado v18+)
npm: >=7.0.0
yarn: >=1.22.0 (opcional)
pnpm: >=7.0.0 (opcional)
```

Verificar sua versão:

```bash
node --version   # v18.x.x
npm --version    # 9.x.x
```

### Navegadores Suportados

| Browser        | Versão Mínima | Status          |
| -------------- | ------------- | --------------- |
| Chrome         | 90+           | ✅ Full Support |
| Firefox        | 88+           | ✅ Full Support |
| Safari         | 14+           | ✅ Full Support |
| Edge           | 90+           | ✅ Full Support |
| Mobile Safari  | 14+           | ✅ Full Support |
| Chrome Android | 90+           | ✅ Full Support |

### Sistemas Operacionais

| SO      | Status       |
| ------- | ------------ |
| Windows | ✅ Suportado |
| macOS   | ✅ Suportado |
| Linux   | ✅ Suportado |

## Dependências Diretas

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.16"
}
```

## Dependências de Desenvolvimento

```json
{
  "@vitejs/plugin-react": "^4.2.1",
  "vite": "^5.0.8",
  "tailwindcss": "^3.3.6",
  "postcss": "^8.4.32",
  "autoprefixer": "^10.4.16",
  "eslint": "^8.55.0",
  "eslint-plugin-react": "^7.33.2"
}
```

### Total de Dependências

- **Diretas**: 3
- **Transversas**: ~150
- **Tamanho (node_modules)**: ~350MB (não inclusos no dist)
- **Bundle Size (gzip)**: ~50-60KB estimado

## Plataformas de Deployment

### Cloud Platforms

| Plataforma            | Suporte    | Notas             |
| --------------------- | ---------- | ----------------- |
| Coolify               | ✅ Full    | Docker ready      |
| Vercel                | ✅ Full    | Vite preset       |
| Netlify               | ✅ Full    | Pre-built ready   |
| AWS S3+CloudFront     | ✅ Full    | Static hosting    |
| Azure Static Web Apps | ✅ Full    | CI/CD integration |
| Firebase Hosting      | ✅ Full    | Google cloud      |
| GitHub Pages          | ✅ Parcial | Sem SSR           |

### Container Platforms

| Platform       | Status  | Notes                       |
| -------------- | ------- | --------------------------- |
| Docker         | ✅ Full | Dockerfile included         |
| Kubernetes     | ✅ Full | YAML configs needed         |
| Docker Compose | ✅ Full | docker-compose.yml included |

### Self-Hosted

| Opção          | Status     | Notes              |
| -------------- | ---------- | ------------------ |
| Ubuntu/Debian  | ✅ Full    | Linux servers      |
| CentOS/RHEL    | ✅ Full    | RedHat-based       |
| Windows Server | ✅ Full    | WSL ou Docker      |
| Raspberry Pi   | ⚠️ Parcial | Possível mas lento |

## Recursos de Hardware Recomendados

### Desenvolvimento Local

```
CPU: 2+ cores
RAM: 4GB mínimo (8GB recomendado)
Disco: 5GB (com node_modules)
Banda: Internet fluido
```

### Produção (Docker)

```
CPU: 1 core
RAM: 256MB mínimo (512MB confortável)
Disco: 100MB (imagem Docker)
Banda: ~100Mbps
```

## Especificações Técnicas

### Build Tool

- **Vite 5.0.8**
  - ES Modules support
  - HMR (Hot Module Replacement)
  - Minificação Terser
  - Tree-shaking otimizado

### Framework

- **React 18.2.0**
  - Concurrent rendering
  - Automatic batching
  - Suspense (preparado)
  - Strict mode enabled

### Styling

- **TailwindCSS 3.3.6**
  - JIT compiler
  - Custom colors
  - Animation tokens
  - Dark mode ready

### Animações

- **Framer Motion 10.16.16**
  - Smooth animations
  - Gesture recognition
  - Layout animations
  - Scroll triggers

## Performance Metrics

### Lighthouse Scores (Target)

| Métrica        | Target | Atual/Esperado |
| -------------- | ------ | -------------- |
| Performance    | 90+    | 95+            |
| Accessibility  | 90+    | 95+            |
| Best Practices | 90+    | 95+            |
| SEO            | 90+    | 95+            |

### Core Web Vitals

| Métrica | Target  |
| ------- | ------- |
| LCP     | < 2.5s  |
| FID     | < 100ms |
| CLS     | < 0.1   |

### Bundle Size

| Asset     | Size                   |
| --------- | ---------------------- |
| index.js  | ~45-50KB (gzip)        |
| CSS       | ~5-8KB (gzip)          |
| Fonts     | ~0KB (loaded external) |
| Assets    | ~0KB (no images)       |
| **Total** | **~50-60KB**           |

## Compatibilidade de Código

### ECMAScript

```
Target: ES2020
Polifills: Automáticos via Vite/Babel se necessário
```

### Módulos

```
Formato: ES Modules
Suporte: import/export nativo
```

### CSS

```
Processor: PostCSS
Prefixer: Autoprefixer (últimos 2 navegadores)
```

## Segurança

- ✅ Dependências auditadas (`npm audit`)
- ✅ HTTPS ready (recomendado em produção)
- ✅ CSP headers ready (configurar no servidor)
- ✅ XSS protection (React sanitization)
- ✅ CSRF protection (implement no backend)

## Escalabilidade

- ✅ Modular component structure
- ✅ Easy to add new sections
- ✅ Reusable components
- ✅ CSS variables ready
- ✅ Theme system prepared
- ✅ i18n structure ready

## Manutenção

### Atualizações Recomendadas

A cada **3 meses** ou quando:

- Segurança: Imediatamente
- Maiores: Trim/Quad
- Menores/Patches: Mensal

### Verificar Atualizações

```bash
npm outdated

# Atualizar segurança
npm audit fix

# Atualizar tudo
npm update
```

## Suporte

**RP Holding**

- 📱 +55 (31) 99834-3236
- 📧 contato@rpholding.com.br
- 🕐 Horário: 9h-18h (seg-sex)

---

**Última atualização**: 23 de Fevereiro de 2026
**Próxima revisão**: Junho de 2026
