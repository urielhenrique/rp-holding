# 🖥️ Guia de Comandos - RP Holding

Referência rápida de todos os comandos disponíveis.

## 📦 npm - Desenvolvimento

### Instalar Dependências

```bash
npm install
# Aliases: npm i
```

### Iniciar Servidor de Desenvolvimento

```bash
npm run dev
# Abre em http://localhost:5173
# Tecle 'h' para ver ajuda do Vite
```

### Parar Servidor Dev

```bash
# No terminal: Ctrl + C (Windows/Linux) ou Cmd + C (Mac)
```

### Verificar Código (Linting)

```bash
npm run lint
# Verifica código com ESLint
```

### Corrigir Erros Automáticos

```bash
npm run lint -- --fix
# Corrige issues comuns automaticamente
```

## 🔨 Build & Produção

### Build para Produção

```bash
npm run build
# Gera pasta 'dist' otimizada
# Tempo: 2-5 segundos
```

### Ver Build Localmente

```bash
npm run preview
# Simula servidor de produção
# Acesso: http://localhost:4173
```

### Limpar Build Anterior

```bash
rm -rf dist      # Linux/Mac
rmdir /s dist    # Windows PowerShell
```

## 🐳 Docker

### Build da Imagem Docker

```bash
docker build -t rp-holding .
# Cria imagem de 200-300MB aproximadamente
```

### Rodar Container

```bash
docker run -p 3000:3000 rp-holding
# Acesso: http://localhost:3000
# Parar: Ctrl + C
```

### Rodar Container em Background

```bash
docker run -d -p 3000:3000 --name rp-holding rp-holding
# -d = detached mode (background)
# --name = nome do container

# Parar
docker stop rp-holding

# Iniciar novamente
docker start rp-holding

# Ver logs
docker logs -f rp-holding

# Remover
docker rm rp-holding
```

### Docker Compose - Dev

```bash
# Iniciar
docker-compose up

# Background
docker-compose up -d

# Parar
docker-compose stop

# Parar e remover
docker-compose down

# Ver logs
docker-compose logs -f

# Rebuild
docker-compose up --build
```

### Docker - Limpeza

```bash
# Remover imagens não usadas
docker image prune

# Remover containers parados
docker container prune

# Remover tudo (⚠️ cuidado!)
docker system prune -a
```

## 🔍 Node/npm - Informações

### Versão Node

```bash
node --version
# Exemplo: v18.19.0
```

### Versão npm

```bash
npm --version
# Exemplo: 9.8.1
```

### Verificar Dependências Instaladas

```bash
npm list
# Lista com versões
```

### Ver Dependências Desatualizadas

```bash
npm outdated
# Mostra updates disponíveis
```

### Verificação de Segurança

```bash
npm audit
# Lista vulnerabilidades

npm audit fix
# Corrige vulnerabilidades

npm audit fix --force
# Força correções (pode quebrar)
```

## 🔄 Atualizar Dependências

### Atualizar Tudo

```bash
npm update
# Atualiza para latest minor/patch
```

### Atualizar Específico

```bash
npm update react
npm update tailwindcss
```

### Atualizar para Latest (Maior)

```bash
npm install react@latest
```

## 📂 Gerenciar Arquivos

### Criar Pasta

```bash
mkdir src/components

# Ou criar múltiplas
mkdir -p src/{components,sections,pages}
```

### Deletar Arquivo

```bash
rm arquivo.txt           # Linux/Mac
del arquivo.txt          # Windows CMD
```

### Criar Arquivo Vazio

```bash
touch arquivo.jsx        # Linux/Mac
echo. > arquivo.jsx      # Windows CMD
```

### Listar Arquivos

```bash
ls src/                  # Linux/Mac
dir src/                 # Windows CMD
ls -la                   # Incluir ocultos
```

### Copiar Arquivo

```bash
cp src/App.jsx src/App.backup.jsx   # Linux/Mac
```

## 🌐 Git Commands

### Inicializar Git

```bash
git init
git config user.name "Seu Nome"
git config user.email "seu@email.com"
```

### Adicionar Arquivos

```bash
git add .                    # Tudo
git add src/                 # Pasta específica
git add arquivo.jsx          # Arquivo específico
```

### Fazer Commit

```bash
git commit -m "Mensagem curta e descritiva"

# Com descrição longa
git commit -m "Título" -m "Descrição detalhada"
```

### Ver Status

```bash
git status
```

### Ver Histórico

```bash
git log
git log --oneline          # Versão curta
git log --graph --oneline  # Com visualização
```

### Push para Remoto

```bash
git push origin main
```

### Pull de Remoto

```bash
git pull origin main
```

### Criar Branch

```bash
git checkout -b feature/nova-feature
git switch -c feature/nova-feature  # Novo sintaxe
```

### Mudar Branch

```bash
git checkout main
git switch main             # Novo sintaxe
```

## 📊 Análise & Debug

### Ver Tamanho do Projeto

```bash
du -sh .                        # Linux/Mac
Get-ChildItem -Recurse | Measure-Object -Sum Length  # Windows PS
```

### Ver Tamanho folders

```bash
du -h src/                      # Linux/Mac
ls -lh                          # Ver tamanhos
```

### Verificar Portas em Uso

```bash
lsof -i :5173              # Linux/Mac
netstat -ano | findstr 5173 # Windows
Get-NetTCPConnection -LocalPort 5173 # Windows PS
```

### Matar Processo em Porta

```bash
kill -9 $(lsof -ti:5173)   # Linux/Mac
taskkill /PID <PID> /F      # Windows CMD
Stop-Process -Force -Id <PID>  # Windows PS
```

## 🔐 Ambiente

### Ver Variáveis de Ambiente

```bash
env           # Linux/Mac - all
echo $HOME    # Linux/Mac - specific

set           # Windows CMD - all
echo %HOME%   # Windows CMD - specific
```

### Definir Variável Temp

```bash
export VAR=valor        # Linux/Mac
set VAR=valor           # Windows CMD
$env:VAR="valor"        # Windows PowerShell
```

## 📝 Arquivo de Configuração

### Editar Arquivos

```bash
# Usar seu editor favorito
code . (VS Code)
vim arquivo.jsx
nano arquivo.jsx
```

### Comparar Arquivos

```bash
diff arquivo1.jsx arquivo2.jsx
```

### Buscar em Arquivos

```bash
grep -r "search" src/           # Linux/Mac
findstr /S "search" src\        # Windows CMD
Select-String -Recurse "search" src/  # Windows PS
```

## 🧹 Limpeza

### Limpar Cache npm

```bash
npm cache clean --force
```

### Reinstalar Dependências (Nuclear)

```bash
rm -rf node_modules package-lock.json
npm install
```

### Limpar Arquivos Temporários

```bash
rm -rf dist
rm -rf .next
rm .env.local
```

## 📋 Scripts Customizados

### Ver Scripts Disponíveis

```bash
npm run
# Mostra todos os scripts
```

### Atualizar package.json

```bash
# Edite package.json e rode:
npm install
```

### Adicionar Novo Script

```bash
# Edite em package.json:
"scripts": {
  "new-script": "comando aqui"
}

# Use:
npm run new-script
```

## ⚡ Alias Úteis (Opcional)

### Linux/Mac (.bashrc ou .zshrc)

```bash
alias nd="npm run dev"
alias nb="npm run build"
alias ni="npm install"
alias nl="npm run lint"
```

### Windows PowerShell (Profile)

```powershell
Set-Alias -Name nd -Value "npm run dev"
Set-Alias -Name nb -Value "npm run build"
```

## 🆘 Troubleshooting

### Erro: "command not found"

```bash
npm install -g npm  # Reinstale npm globally
```

### Erro: "Port 5173 already in use"

```bash
npm run dev -- --port 3000  # Use porta diferente
```

### npm install lento

```bash
npm install --prefer-offline --no-audit
```

### Limpar tudo e começar

```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run dev
```

## 📞 Ajuda

### Help de um Comando

```bash
npm help <comando>
npm help install
```

### Documentação Online

```bash
npm docs <pacote>
npm docs react
```

---

**Dúvidas?** Entre em contato: +55 (31) 99834-3236
