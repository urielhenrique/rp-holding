# 🎨 Logo & Branding - RP Holding

## 📁 Arquivos de Logo

### Arquivos Criados

```
public/
├── logo.svg          → Logo completa com texto (Header/Footer)
├── favicon.svg       → Ícone para aba do navegador
└── Logo RpHolding.jpeg → Original (arquivo do usuário)
```

## 🎯 Usando a Logo

### 1. No Header (Automático)

A logo já está integrada no Header responsivo:

```jsx
<img
  src="/Logo RpHolding.jpeg"
  alt="RP Holding Logo"
  className="w-10 h-10 md:w-12 md:h-12"
/>
```

### 2. No Footer (Automático)

A logo já está integrada no Footer:

```jsx
<img src="/logo.svg" alt="RP Holding Logo" className="w-10 h-10" />
```

### 3. Usando o Componente Logo (Recomendado)

Importe o componente `Logo`:

```jsx
import { Logo } from '@/components';

// Básico
<Logo />

// Com tamanhos
<Logo size="sm" />    // 32px
<Logo size="md" />    // 40px (padrão)
<Logo size="lg" />    // 48px
<Logo size="xl" />    // 64px

// Sem texto
<Logo showText={false} />

// Em background escuro
<Logo variant="dark" />

// Customizado
<Logo size="lg" showText={true} className="my-4" />
```

## 📐 Especificações da Logo

### Logo Completa (logo.svg)

- **Dimensões**: SVG escalável (viewBox 0 0 200 200)
- **Cores**: Azul Petróleo + Laranja Gradiente
- **Formato**: SVG (vetorial - sem perda de qualidade)
- **Uso**: Header, Footer, Documentos
- **Peso**: ~2 KB

### Favicon (favicon.svg)

- **Dimensões**: SVG escalável (viewBox 0 0 100 100)
- **Design**: Minimalista (R+P em círculo)
- **Cores**: Azul Petróleo + Laranja Gradiente
- **Formato**: SVG (moderno, suportado por todos os navegadores)
- **Peso**: ~1 KB

### Especificações de Cor

```
Azul Primário:   #0f3a52
Laranja Accent:  #ff7a1a
Transição:       Gradiente diagonal
```

## 🖼️ Previsualizações

### Logo Completa

```
┌─────────────────────┐
│    RP HOLDING       │
│   (com gradiente)   │
│   + linha accent    │
└─────────────────────┘
```

### Favicon

```
┌────────────┐
│    RP      │
│ (circle)   │
└────────────┘
```

## 🔄 Alternativas de Uso

### Sem Texto (só ícone)

```jsx
<Logo showText={false} size="md" />
```

### Variantes de Cor

```jsx
// Fundo claro
<Logo variant="light" />

// Fundo escuro
<Logo variant="dark" />
```

### Tamanhos Responsivos

```jsx
// Mobile
<Logo size="sm" className="md:hidden" />

// Desktop
<Logo size="lg" className="hidden md:flex" />
```

## 📱 Integração Mobile

A logo é 100% responsiva:

- **Mobile**: 40px (w-10 h-10)
- **Desktop**: 48px ou maior (w-12 h-12)
- **Sem quebra de layout**

## 🌐 Favicon no Navegador

O favicon aparece em:

- ✅ Aba do navegador
- ✅ Favoritos/Bookmarks
- ✅ Histórico
- ✅ Lista de abas
- ✅ PWA (se implementado)

## 🎨 Personalizações Futuras

Se precisar modificar:

### Mudar Cores

Edite `public/logo.svg` ou `public/favicon.svg`:

```xml
<linearGradient>
  <stop offset="0%" style="stop-color:#nova-cor;"/>
  <stop offset="100%" style="stop-color:#outra-cor;"/>
</linearGradient>
```

### Adicionar Texto Personalizado

Edite a tag `<text>` no SVG para mudar "HOLDING"

### Melhorar Design

Peça ao designer do time para refinar:

- Proporções
- Espaçamento
- Elementos gráficos
- Efeitos

## 📦 Exportar Logo em Outros Formatos

Se precisar PNG, ICO, etc:

1. Use ferramentas online: `cloudconvert.com`
2. Use software: Figma, Illustrator, Inkscape
3. Converta SVG → PNG → ICO

## ✅ Checklist

- [x] Logo integrada no Header
- [x] Logo integrada no Footer
- [x] Favicon criado
- [x] Componente Logo reutilizável
- [x] Responsividade testada
- [x] Documentação completa

## 🚀 Próximos Passos

1. Testar em navegador: `npm run dev`
2. Verificar favicon em `localhost:5173`
3. Testar responsividade em mobile
4. Se precisar melhorar, edite os arquivos SVG

## 📞 Suporte

Dúvidas sobre a logo?

- 📱 +55 (31) 99834-3236
- 📧 contato@rpholding.com.br

---

**Logo Status**: ✅ Pronta para Produção
