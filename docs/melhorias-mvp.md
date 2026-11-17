# Melhorias do MVP: da 1ª para a 2ª entrega

Este documento mostra o que mudou desde o MVP (1ª entrega) até a versão final (2ª entrega).

- **Antes:** o site como estava no commit `b06c5c6`, de 27/10/2026 ("Link do site no Readme.md"), a última versão antes das regras da pasta `.github/`.
- **Depois:** a versão de 16/11/2026.
- **Como conferir o "antes":** no GitHub, abra o repositório, clique em "Commits" e depois em `b06c5c6` → "Browse files". Ou, no terminal: `git show b06c5c6:index.html`.

## 1. Antes × depois

| # | Área | Antes (MVP, 27/10/2026) | Depois (16/11/2026) | Onde conferir |
|---|---|---|---|---|
| 1 | Páginas | 1 página (`index.html`, 88 linhas), com 3 seções numa página só | 10 páginas de conteúdo interligadas + Orçamento e hospedagem | Raiz do projeto; [README](../README.md), seção 5 |
| 2 | JavaScript | Não havia | `js/main.js`: menu lateral, filtro de notícias, calculadora, formulário com validação e rascunho, alto contraste | [js/main.js](../js/main.js) |
| 3 | Formulário | Não havia | Contato e Diagnóstico com `preventDefault`, mensagem ao lado do campo, `aria-invalid`, foco no primeiro erro e rascunho no `localStorage` | [contato.html](../contato.html), [testes.md](testes.md) |
| 4 | Responsividade | CSS de 96 linhas, sem nenhuma `@media` | CSS Mobile First, com `min-width: 769px` e `1001px`, Flexbox e Grid | [css/style.css](../css/style.css), seção 17 |
| 5 | Cores e fonte | 16 cores em hexadecimal soltas no CSS | Todas as cores, a fonte e os tamanhos em variáveis no `:root` | [css/style.css](../css/style.css), seção 1 |
| 6 | Idioma | `lang="pt-br"` | `lang="pt-BR"` em todas as páginas | Linha 2 de cada HTML |
| 7 | Estrutura | Títulos pulando de `h1` para `h3`; `nav` sem `aria-label`; `main` sem `id` | Um `h1` por página, títulos em ordem, `nav` com `aria-label` e `main id="conteudo"` | Script de conferência em [testes.md](testes.md) |
| 8 | Teclado | Sem link "Pular para o conteúdo" e sem estilo de foco | Link "Pular para o conteúdo", `:focus-visible` com contorno de 3 px e menu que funciona com Tab, Enter e Esc | [testes.md](testes.md), seção 3 |
| 9 | Imagens | 3 fotos carregadas de outros sites (Brasil Escola e Enel), sem crédito, com `alt` entre colchetes (ex.: `alt="[Usina_solar]"`) | Fotos com licença livre salvas em `img/`, `alt` descritivo e crédito com autor, ano e licença | [noticias.html](../noticias.html), [index.html](../index.html) |
| 10 | Conteúdo e fontes | Textos curtos, sem fontes | Textos por página, com fontes em ABNT; 6 notícias, 5 vídeos e textos da equipe identificados | [referencias.md](referencias.md) |
| 11 | Acessibilidade extra | Não havia | Botão de alto contraste (21:1), `prefers-reduced-motion` e contraste AA nas cores principais | [testes.md](testes.md), seção 4 |
| 12 | Ortografia | "Energia Hidraúlica" no menu | "Energia Hidráulica" | Menu lateral |
| 13 | Publicação | Railway (o endereço saiu do ar em 16/11/2026) e CSS com nome `style.CSS`, que não carregava em servidor Linux | GitHub Pages com HTTPS e `css/style.css` em minúsculas | [orcamento_hospedagem.html](../orcamento_hospedagem.html) |
| 14 | Documentação | README com o escopo | README com links, como rodar e estrutura de pastas; diário de bordo, prompts, referências, testes e uso de IA em `/docs` | [README](../README.md), seção 16 |
| 15 | Regras da equipe | Não havia | 7 arquivos de regras em `.github/` (código, layout, conteúdo, acessibilidade, JavaScript, IA e Git) | [.github/](../.github/) |

## 3. Prints de antes e depois (para o slide 6)

> ⚠️ **A equipe tira os prints.** Sugestão:
>
> 1. **Antes:** numa pasta separada, rode `git clone` do repositório e depois `git checkout b06c5c6`. Abra o `index.html` e tire o print.
> 2. **Depois:** tire o print do site publicado no GitHub Pages, no computador e no celular.
> 3. Salve os arquivos fora do repositório, junto com os arquivos do Blackboard.

| Tela | Antes | Depois |
|---|---|---|
| Home no computador | (print) | (print) |
| Home no celular | (print) | (print) |
| Formulário com erro | Não existia | (print) |
