# 2026-11-16: Validação da 2ª entrega e ajustes finais

- **Data:** 2026-11-16 (à noite)
- **Responsável pela revisão:** (preencher)
- **Feito com IA?** Sim (Claude Code)

## Pedidos / prompts usados

1. O prompt "Validar o site TERS para a 2ª entrega (AV A1)", que só confere o projeto e entrega um relatório, sem mudar arquivos.
2. "Agora faça os ajustes nos arquivos e nos logs de mudança atualize o que precisa ser aceito ou que foi corrigido."

Decisões da equipe durante o trabalho:

- **Hospedagem:** GitHub Pages (o Railway respondia "Application not found").
- **Git:** a IA só deixa os arquivos alterados. A equipe revisa, cria a branch, faz o commit e abre o pull request.
- "Apoie.html retire, porque já serve para esse próposito o contato.html"
- "Deixe no docs o readme.md antigo."

## O que a validação encontrou

| Problema | Prova |
|---|---|
| Site do Railway fora do ar | As 10 páginas respondiam `404 {"message":"Application not found"}` |
| CSS não carregava online | As páginas pedem `css/style.css`, mas o arquivo era `css/style.CSS`. No GitHub Pages, `css/style.css` dava 404 e o site aparecia sem estilo. No Windows funcionava, por isso ninguém tinha notado |
| Nenhum pull request | A API pública do GitHub mostrava 0 PRs e só a branch `main` |
| Faltava `orcamento_hospedagem.html` | Pedido no roteiro do professor |
| Foto da home sem licença | Carregada de canalbioenergia.com.br, sem autor, ano e licença |
| Campo com erro e com foco ficava com borda verde | `.campo input:focus` vencia `.campo .invalido` |
| No celular, o menu ☰ não tinha "Quem somos" | A página só aparecia no rodapé |

## O que mudou

| Arquivo | O que foi alterado |
|---|---|
| `css/style.CSS` → `css/style.css` | Renomeado com `git mv` em 2 passos (o Windows não diferencia maiúsculas). O conteúdo é o mesmo, mais a regra abaixo |
| `css/style.css` | Nova regra `.campo .invalido:focus { border-color: var(--erro); }`, com comentário |
| `index.html` | Foto do banner trocada pela do Parque Eólico Cutia (Copel, 2019, CC0), já usada em Notícias. Crédito completo. Saiu o selo "Pendente" escondido (`so-revisao`) |
| `orcamento_hospedagem.html` | **Página nova**: onde o site está, comparação GitHub Pages × Railway, orçamento (R$ 0 por mês), motivos da escolha e fontes. Só usa classes que já existiam |
| As 10 páginas antigas | Menu lateral, grupo MAIS: novo item "Quem somos". Rodapé: novo link "Orçamento e hospedagem" |
| `apoie.html` | Criada e depois **retirada a pedido da equipe**, com todos os links para ela |
| `README.md` (raiz) | **Novo.** Cópia do escopo com as atualizações: links, metas mensuráveis, tecnologias com JavaScript, critério 2 com validação por JS, fontes do conteúdo, como rodar, estrutura de pastas, publicação e documentação |
| `docs/README.md` | **Sem mudanças**: o escopo original fica como estava, a pedido da equipe |
| `docs/testes.md` | Novo: W3C, links, testes do JavaScript e do teclado, contraste e tabelas para Lighthouse e teste manual |
| `docs/melhorias-mvp.md` | Novo: 15 itens de antes × depois, comparando com o commit `b06c5c6` (27/10/2026) |
| `docs/uso-de-ia.md` | Novo: ferramenta, regras, prompts, o que foi aceito, recusado e corrigido e quem explica cada bloco do JS |
| `docs/referencias.md` | Seção "Orçamento e hospedagem" (3 fontes, total 117) e a pendência da foto da home marcada como resolvida |
| `.gitignore` | Novo: `_backup-*/`, `integrantes*.txt`, `*.zip` e arquivos do sistema |
| 13 logs antigos | Preenchidos "O que foi aceito" e "O que foi corrigido" onde estavam em branco, com o commit de cada mudança como prova. O que a equipe já tinha escrito ficou igual. "Responsável pela revisão" não foi preenchido pela IA |

## Como foi testado

- **Script de conferência, 11 páginas:** 0 links quebrados, já diferenciando maiúsculas como o GitHub Pages; um `h1` por página; `alt` e `title` em todas as imagens e vídeos.
- **Navegador (Edge sem janela, servidor local):** os 22 testes do formulário, `localStorage`, alto contraste, filtro, calculadora e teclado passaram. As 11 páginas carregam `css/style.css` e o menu tem "Quem somos". O campo com erro e com foco agora tem borda vermelha. Nenhum erro no console.
- **Capturas:** home no celular (390 px) e no computador (1280 px) e a página de orçamento no celular.
- **W3C Validator (Nu Html Checker):** a equipe autorizou com "Pode validar no W3C". As 11 páginas foram enviadas uma de cada vez: **0 erros e 0 avisos** em todas. Resultado anotado em `docs/testes.md`.

## O que foi aceito

A equipe acompanhou os ajustes e pediu a próxima etapa sem recusar estes itens:

- `css/style.CSS` renomeado para `css/style.css`;
- borda vermelha no campo com erro que está com foco;
- foto CC0 do Parque Eólico Cutia no banner da home, com crédito completo;
- "Quem somos" no menu lateral e "Orçamento e hospedagem" no rodapé;
- página `orcamento_hospedagem.html`, que justifica o GitHub Pages. A equipe confirmou o endereço: <https://fabricio342gp.github.io/U-UNICID-ADS-CC-ENG-FRONTEND-2260016-D4-2-2026-M-TERS/>;
- `README.md` novo na raiz, `docs/testes.md`, `docs/melhorias-mvp.md`, `docs/uso-de-ia.md` e o `.gitignore`;
- "aceito" e "corrigido" preenchidos nos 13 logs antigos;
- validação no W3C (pedida pela equipe).

Os itens aceitos ainda não estão no GitHub: entram quando a equipe fizer o commit e o pull request.

## O que foi corrigido pela equipe

- **Página "Como apoiar" recusada:** a página Contato e Diagnóstico já serve de área de apoio.
- **README:** a IA tinha atualizado o `docs/README.md`. A equipe pediu para manter o escopo original em `docs/`, e a versão nova foi para o `README.md` da raiz.
- **Hospedagem:** a equipe escolheu o GitHub Pages.

## Pendências

| O quê | Quem |
|---|---|
| Revisar `git diff`, criar uma branch (ex.: `ajustes-entrega-final`), fazer o commit, abrir o pull request e pedir a revisão de outro integrante. **Só depois do envio para a `main` o CSS volta a aparecer no GitHub Pages** | Equipe |
| Lighthouse e teste manual de teclado (tabelas em `docs/testes.md`) | Equipe |
| Prints de antes e depois (`docs/melhorias-mvp.md`) e prints da home para o Blackboard | Equipe |
| Comentários do professor na 1ª entrega (`docs/melhorias-mvp.md`, seção 1) | Equipe |
| Quem explica cada bloco do JS (`docs/uso-de-ia.md`, seção 7) | Equipe |
| Papéis de cada integrante (slide 4 e, se quiser, `sobre.html`) e um dado sobre PCD com fonte (slide 2) | Equipe |
| Arquivo `.txt` com nome e RA, slides e `.zip` (fora do GitHub) | Equipe |
| Decidir sobre o modo revisão: nenhuma página usa mais (log da Fase 8) | Equipe |
| Preencher "Responsável pela revisão" nos logs em branco | Equipe |

## Como testar

1. Abra pelo Live Server e recarregue com Ctrl+F5.
2. Confira a nova foto e o crédito na home.
3. No celular (DevTools, 390 px), abra o ☰ e confira "Quem somos".
4. No rodapé, abra "Orçamento e hospedagem".
5. Em Contato, envie vazio: os 4 campos ficam com borda vermelha, inclusive o Nome, que recebe o foco.
6. Depois do push, abra o site no GitHub Pages e confira se o estilo aparece.

## Backup

- Não houve pasta de backup. A versão anterior está no Git (commit `3db2bbb`), e `git diff` mostra todas as mudanças.
