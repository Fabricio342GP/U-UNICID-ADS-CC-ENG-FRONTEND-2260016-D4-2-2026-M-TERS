# Uso de IA no projeto TERS

Este documento resume como a Equipe Eco Inovação usou Inteligência Artificial no site TERS. Os detalhes de cada mudança estão no [diário de bordo](logs-de-mudanca/readme.md).

## 1. Ferramenta e papel da IA

- **Ferramenta:** Claude Code, um assistente de IA usado dentro do VS Code.
- **Para quê:** conferir o site contra as regras da equipe, sugerir e aplicar correções de código, pesquisar e conferir fontes, revisar ortografia e testar o site.
- **O que a IA não decide:** o texto das páginas de conteúdo, a escolha da hospedagem, o que entra no GitHub e quem revisa. Isso fica com a equipe.

## 2. Regras escritas antes de usar a IA (plano de contexto)

A equipe escreveu 7 arquivos de regras na pasta [.github/](../.github/) (28/10 e 14/11/2026). A IA lê essas regras antes de cada pedido.

| Arquivo | O que pede, em resumo |
|---|---|
| `general-rules.md` | HTML semântico, UTF-8 e `pt-BR`, CSS com variáveis e Mobile First, nomes de arquivo em minúsculas |
| `layout-rules.md` | Toda página segue a estrutura do `index.html` e reaproveita as classes do CSS |
| `content-rules.md` | Texto com palavras da equipe, fonte e ano de todo dado e imagem, nada inventado |
| `accessibility-rules.md` | Um `h1`, "Pular para o conteúdo", `alt`, contraste AA, teclado, alto contraste, W3C |
| `javascript-rules.md` | `preventDefault`, `aria-invalid`, `localStorage` com `try/catch` e prefixo `ters-`, `textContent` |
| `ai-usage-rules.md` | Comentar o código, não inventar fontes, registrar prompts e revisar antes do commit |
| `git-rules.md` | Branch por tarefa, mensagens no imperativo, pull request com revisão |

## 3. Como a equipe trabalhou com a IA

1. **Auditoria:** a IA conferiu o site contra as 7 regras e listou 16 itens que faltavam.
2. **Prompt em fases:** os 16 itens viraram um prompt dividido em 9 fases ([prompt-aplicar-correcoes-regras.md](prompts/prompt-aplicar-correcoes-regras.md)).
3. **Uma fase por vez:** a equipe autorizava cada fase. A IA fazia uma cópia de segurança antes de mudar os arquivos.
4. **Registro:** cada fase ganhou um log com o prompt, o que mudou, o que foi aceito e o que foi corrigido.
5. **Revisão e envio:** um integrante revisava e fazia o commit com o próprio usuário do GitHub.

## 4. Prompts que funcionaram

Os 2 prompts escolhidos para a apresentação estão em [prompts-que-funcionaram.md](prompts/prompts-que-funcionaram.md):

1. **Auditoria das regras:** "Verifique se o site obedece todas as rules de nosso site e mostre os que falta."
2. **Correção de um pedido ambíguo:** o primeiro pedido ("Preencha... ou as retire") deixava a IA apagar fontes. O segundo disse o que fazer e o que **não** fazer.

## 5. O que a equipe aceitou

Todas as mudanças abaixo estão na versão enviada ao GitHub:

- validação do formulário, rascunho no `localStorage`, menu, filtro, calculadora e alto contraste em `js/main.js`;
- CSS com variáveis no `:root` e Mobile First, sem mudar a aparência (testado por comparação de telas);
- 6 notícias e 5 vídeos de outros sites, com link e fonte, e textos da equipe identificados;
- fontes em ABNT para os números das páginas e a lista em [referencias.md](referencias.md);
- explicação de termos técnicos (altura manométrica, recalque, AFPE, GFCI).

## 6. O que a equipe recusou ou corrigiu (exemplos para a banca)

| Data | O que a IA sugeriu ou fez | O que a equipe decidiu |
|---|---|---|
| 15/11/2026 | Com o pedido "preencha ou retire", a IA podia apagar fontes incompletas | A equipe corrigiu o pedido: manter todas as fontes e completar o que faltava |
| 16/11/2026 | Criar a página "Como apoiar" (`apoie.html`) para a área de apoio | **Recusada.** A página Contato e Diagnóstico já cumpre esse papel. A página e os links foram retirados |
| 16/11/2026 | Atualizar o `docs/README.md` (o escopo aprovado) | **Corrigido.** O escopo original ficou sem mudanças em `docs/`, e a versão atualizada foi para o `README.md` da raiz |
| 16/11/2026 | Recomendou a hospedagem e se ofereceu para fazer commit e push | A equipe escolheu o GitHub Pages e decidiu fazer ela mesma a branch, o commit e o pull request |
| 16/11/2026 | Texto novo das páginas de eólica | A equipe mandou o próprio texto, e a IA só o colocou nas páginas, sem mudar palavras |

**Erros da IA que foram pegos na conferência:**

- um DOI errado numa referência, corrigido pela base Crossref;
- a auditoria disse que "TVR" não tinha explicação, mas a página já explicava;
- a IA criou `README.md` e `MODELO.md` em maiúsculas, contra a regra de nomes;
- o crédito da foto da home ficou com 18 px, maior que o previsto;
- um vídeo da Band não tocava dentro do site (o canal bloqueia) e foi trocado;
- notícias e fontes sem data, atrás de login ou fora do assunto foram descartadas.

## 7. Como a equipe explica o código feito com IA

O `js/main.js` tem comentários em português em cada bloco. Cada integrante deve saber explicar pelo menos um bloco.

| Bloco do `js/main.js` | Linhas | O que faz | Quem explica |
|---|---|---|---|
| 1. Menu lateral | 19 a 73 | Abre e fecha o menu, Esc fecha, o Tab fica dentro do menu | ⚠️ (preencher) |
| 2. Calculadora | 80 a 121 | Potência = 9,81 × vazão × queda × eficiência | ⚠️ (preencher) |
| 3. Filtro de notícias | 127 a 156 | Mostra só os cards da categoria e atualiza `aria-pressed` | ⚠️ (preencher) |
| 4. Formulário | 165 a 388 | `preventDefault`, mensagens, `aria-invalid`, foco no 1º erro e rascunho | ⚠️ (preencher) |
| 5. Modo revisão | 400 a 405 | `?revisao` no endereço mostra trechos escondidos ao editor | ⚠️ (preencher) |
| 6. Alto contraste | 416 a 455 | Liga a classe `alto-contraste` e guarda a escolha | ⚠️ (preencher) |

## 8. Pendências

- **Modo revisão:** desde 16/11, nenhuma página usa mais trechos escondidos. A equipe decide se mantém ou retira o bloco 5 do JS e as regras do CSS (veja o log da [Fase 8](logs-de-mudanca/2026-11-16-fase-8-modo-revisao.md)).
- **Revisores:** preencher "Responsável pela revisão" nos logs que ainda estão em branco.
