# 🔧 Guia de Instalação - RP Holding

## ✅ Pré-requisitos

- **Node.js**: v16+ (recomendado v18+)
- **npm**: v7+ ou **yarn** ou **pnpm**
- **Git**: para versionamento
- **Docker** (opcional): para containerização

## 📥 Instalação

### 1. Clonar/Baixar o Projeto

```bash
# Se for um repositório Git
git clone https://github.com/seu-repo/rp-holding.git
cd rp-holding

# Ou extrair o ZIP e entrar na pasta
cd rp-holding
```

### 2. Instalar Dependências

```bash
# Com npm
npm install

# Com yarn
yarn install

# Com pnpm
pnpm install
```

### 3. Configurar Variáveis de Ambiente (Opcional)

```bash
# Copiar arquivo de exemplo
cp .env.example .env.local

# Editar conforme necessário
# (Por enquanto, não há variáveis obrigatórias)
```

## 🚀 Executar Projeto

### Desenvolvimento

```bash
npm run dev
```

**Output esperado:**

```
VITE v5.0.8  ready in 123 ms

➜  Local:   http://localhost:5173/
➜  Press h to show help
```

Abra seu navegador em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

**Output:**

```
dist/index.html                   0.84 kB │ gzip:  0.53 kB
dist/assets/index-xxx.js       xx.xx kB │ gzip: xx.xx kB

✓ built in 2.35s
```

### Preview do Build

```bash
npm run preview
```

Visualiza a build de produção localmente em `http://localhost:4173`

## 🐛 Lint e Validação

```bash
# Verificar código
npm run lint

# Corrigir automaticamente (se configurado)
npm run lint -- --fix
```

## 📦 Docker

### Build Local

```bash
docker build -t rp-holding .
```

### Rodar Container

```bash
docker run -p 3000:3000 rp-holding
```

Acesse em `http://localhost:3000`

### Com Docker Compose

```bash
docker-compose up

# Para parar
docker-compose down
```

## 🔍 Troubleshooting

### Erro: "Cannot find module 'react'"

```bash
# Reinstale dependências
rm -rf node_modules
rm package-lock.json
npm install
```

### Porta 5173 em uso

```bash
# Vite usa porta 5173 por padrão
# Se ocupada, use flag --port
npm run dev -- --port 3000
```

### Build falha

```bash
# Limpe cache
rm -rf dist
npm run build

# Ou reconstrua do zero
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Docker não funciona

```bash
# Verifique instalação
docker --version
docker ps

# Rebuilde imagem
docker build --no-cache -t rp-holding .
```

## 📂 Estrutura de Pastas Criada

```
rp-holding/
├── dist/                 # Build output (após npm run build)
├── node_modules/        # Dependências instaladas
├── public/              # Assets estáticos
├── src/                 # Código-fonte
│   ├── components/      # Componentes reutilizáveis
│   ├── sections/        # Seções da página
│   ├── pages/           # Páginas (Home)
│   ├── layouts/         # Layouts compartilhados
│   ├── assets/          # Imagens, ícones
│   ├── App.jsx          # Componente raiz
│   ├── main.jsx         # Entrada React
│   └── index.css        # Estilos globais
├── index.html           # HTML da aplicação
├── package.json         # Configuração npm
├── vite.config.js       # Configuração Vite
├── tailwind.config.js   # Configuração Tailwind
├── postcss.config.js    # Configuração PostCSS
├── Dockerfile           # Configuração Docker
└── .env.example         # Template de variáveis
```

## ✨ Próximos Passos

1. **Personalize o Conteúdo**
   - Edite textos em `src/sections/*.jsx`
   - Atualize números de contato
   - Adicione seu logo em `public/`

2. **Adicione Assets**
   - Imagens em `src/assets/`
   - Ícones customizados em `src/components/Icon.jsx`

3. **Configure Domínio**
   - Aponte seu domínio para o servidor
   - Configure SSL/TLS

4. **Deploy**
   - Veja [DEPLOY.md](./DEPLOY.md) para instruções detalhadas

## 📚 Recursos Úteis

- [Documentação Vite](https://vitejs.dev)
- [Documentação React](https://react.dev)
- [Documentação TailwindCSS](https://tailwindcss.com)
- [Documentação Framer Motion](https://www.framer.com/motion)

## 🆘 Suporte

**Dúvidas ou problemas?**

- 📱 +55 (31) 99834-3236
- 📧 contato@rpholding.com.br

## ✅ Checklist Final

- [ ] Node.js v16+ instalado
- [ ] `npm install` executado com sucesso
- [ ] `npm run dev` funciona
- [ ] Site abre em `http://localhost:5173`
- [ ] Build local funciona (`npm run build`)
- [ ] Conteúdo personalizado
- [ ] Logo e imagens adicionadas
- [ ] Números de contato atualizados
- [ ] Pronto para deploy

---

**Parabéns! Seu site está pronto para desenvolvimento.** 🎉
