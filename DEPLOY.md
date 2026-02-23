# 🚀 Guia de Deploy - RP Holding

## Deployment no Coolify

### Pré-requisitos

- Conta no Coolify
- Docker instalado (para teste local)
- Git configurado

### Opção 1: Deploy via Docker (Coolify)

1. **Fazer push do projeto para um repositório Git**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: RP Holding website"
   git push origin main
   ```

2. **No Coolify:**
   - Ir para "Applications" → "New Application"
   - Selecionar "Docker" como tipo
   - Conectar seu repositório GitHub/GitLab
   - Configurar:
     - **Dockerfile path**: `./Dockerfile`
     - **Port**: `3000`
     - **Build command**: (deixar padrão)
     - **Start command**: (deixar padrão)

3. **Configurar variáveis de ambiente (se necessário)**
   - Adicionar `.env` com as variáveis desejadas

4. **Deploy**
   - Clicar em "Deploy"
   - Aguardar build e inicialização

### Opção 2: Deploy Local com Docker

```bash
# Build da imagem
docker build -t rp-holding .

# Rodar container
docker run -p 3000:3000 rp-holding

# Ou com docker-compose
docker-compose up -d
```

### Opção 3: Deploy em Vercel

1. **Conectar repositório GitHub**

```bash
git push origin main
```

2. **No painel da Vercel:**
   - Importar projeto
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
   - Deploy

### Otimizações para Produção

O projeto já inclui:

- ✅ Minificação de assets
- ✅ Code splitting automático
- ✅ Lazy loading de componentes
- ✅ Otimização de imagens
- ✅ Cache headers configurados
- ✅ Health check no Docker

### Monitoramento

#### Logs em Coolify

```bash
# Ver logs da aplicação
docker logs -f rp-holding

# Com docker-compose
docker-compose logs -f
```

#### Performance

- Verificar Core Web Vitals
- Usar PageSpeed Insights
- Monitoring via Coolify ou similar

### Configuração de Domínio

1. **Apontar domínio para Coolify:**
   - CNAME ou A record
   - (Instruções específicas do seu registrador)

2. **SSL/TLS:**
   - Coolify gerencia automaticamente (Let's Encrypt)
   - Ou configure manualmente

### Variáveis de Ambiente

```
# .env (Coolify)
NODE_ENV=production
VITE_API_URL=https://seu-dominio.com
VITE_PHONE_NUMBER=+5531998343236
VITE_EMAIL=contato@rpholding.com.br
```

### Checklist de Deploy

- [ ] Código atualizado
- [ ] Build local testado (`npm run build`)
- [ ] Variáveis de ambiente configuradas
- [ ] Dockerfile testado localmente
- [ ] Repository conectado
- [ ] Domain apontando
- [ ] SSL ativo
- [ ] Health check OK
- [ ] Performance verificada

### Troubleshooting

#### Build falha

```bash
# Limpar node_modules
rm -rf node_modules
npm install
npm run build
```

#### Container não inicia

```bash
docker logs -f [container-id]
# Verificar porta 3000 livre
```

#### Animar lentamente

- Verificar CPU/RAM no Coolify
- Aumentar recursos se necessário
- Verificar rede

### Contato para Suporte

**RP HOLDING**

- 📱 +55 (31) 99834-3236
- 📧 contato@rpholding.com.br
