# 2026-11-16: Fase 9, testes finais e revisão das regras

- **Data:** 2026-11-16
- **Responsável pela revisão:** (preencher)
- **Feito com IA?** Sim (Claude Code)

## Pedido / prompt usado

O prompt [docs/prompts/prompt-aplicar-correcoes-regras.md](../prompts/prompt-aplicar-correcoes-regras.md), Fase 9 (item 2 da auditoria). Nesta fase, nenhum arquivo do site foi alterado.

## 1. W3C Validator: as 10 páginas passaram

A equipe autorizou com "Pode validar.". As 10 páginas foram enviadas, uma de cada vez, ao validador oficial do W3C (Nu Html Checker, <https://validator.w3.org/nu/>), em 16/11/2026.

| Página | Erros | Avisos |
|---|---|---|
| `index.html`, `sobre.html`, `contato.html`, `noticias.html` | 0 | 0 |
| `solar-fotovoltaica.html`, `solar-termica.html` | 0 | 0 |
| `eolica-residencial.html`, `eolica-grandes-parques.html` | 0 | 0 |
| `hidraulica-funcionamento.html`, `hidraulica-impactos.html` | 0 | 0 |

**Resultado:** as 10 páginas passaram sem nenhum erro e sem nenhum aviso. Se alguma página for alterada depois, valide de novo em <https://validator.w3.org/#validate_by_upload>.

## 2. Lighthouse: a equipe roda

1. Abra o site pelo Live Server no Chrome ou no Edge.
2. Abra as ferramentas (F12), escolha a aba **Lighthouse** e marque só **Acessibilidade**, em modo "Dispositivo móvel" e depois "Computador".
3. Clique em **Analisar** e anote a nota de cada página.
4. **Prioridade:** `index.html`, `noticias.html` (vídeos e imagens), `contato.html` (formulário) e `hidraulica-funcionamento.html` (calculadora). Se der tempo, rode nas outras 6.
5. Teste também com o **alto contraste ligado**.

## 3. Teclado

**Verificação automática feita pela IA** nas 10 páginas:
- o primeiro item que recebe foco é o link "Pular para o conteúdo" (`#conteudo`);
- não há `tabindex` positivo, que bagunçaria a ordem do Tab;
- nenhum link ou botão está sem nome;
- todo `<iframe>` tem `title`.

**Testes de comportamento com teclado** (Fases 6 e 7, 55 itens, todos passaram): o menu ☰ abre e fecha, o filtro e a calculadora funcionam, o formulário leva o foco ao primeiro erro, e o botão de alto contraste funciona.

**Falta o teste manual da equipe:** navegar por cada página só com Tab, Shift+Tab e Enter, conferindo se o foco fica sempre visível e se o menu lateral abre e fecha com o teclado.

## 4. Revisão das 7 regras

| Regra | Situação | Onde está a prova |
|---|---|---|
| **general:** tags semânticas, UTF-8, `pt-BR`, `alt` | ok | Script de regras, sem avisos |
| **general:** CSS em `/css`, variáveis em `:root` | ok | 0 cores fora do `:root` (Fase 5, parte 1) |
| **general:** Mobile First | ok | Fase 5, parte 2: 0 diferenças em 110 combinações |
| **general:** nomes de arquivo em minúsculas | ok | Script de regras |
| **general:** comentários claros | ok (conferir) | Fases 1 a 7. A sessão das pendências tirou os comentários de "Fase" das 4 páginas solar e hidráulica (`2026-11-16-pendencias-conteudo.md`) |
| **content:** palavras da equipe; fonte de ideias de terceiros | ok | Resumos das notícias escritos pela equipe; [docs/referencias.md](../referencias.md) |
| **content:** fonte e ano de imagens e números | depende da equipe | Falta o autor, o ano e a licença da imagem da home (único selo de pendência no site, escondido com `?revisao`). Os números das Fases 3 e 4 ou ganharam fonte ou saíram com o texto novo da eólica |
| **content:** lista de referências em `/docs` | ok | [docs/referencias.md](../referencias.md) |
| **content:** notícias com link e fonte; textos da equipe identificados | ok | Fase 3, parte 1 |
| **content:** ortografia e linguagem simples | ok | Fase 2 (erros de digitação e termos técnicos) |
| **layout:** estrutura do `index.html` e classes reaproveitadas | ok | Fase 4. As classes novas das Fases 3 e 7 não tinham equivalente e estão comentadas |
| **accessibility:** estrutura, um só `h1`, "Pular para o conteúdo" | ok | Script de regras e verificação de teclado acima |
| **accessibility:** iframes com `title`; vídeos com legenda | depende da equipe | Os `title` estão ok. A legenda depende de cada vídeo; falta a equipe assistir |
| **accessibility:** formulário com `label`, erro e `aria-describedby` | ok | Teste da Fase 6 (`aria-invalid` e foco no primeiro erro) |
| **accessibility:** contraste AA, foco visível, `prefers-reduced-motion` | ok | Auditoria; alto contraste a 21:1 |
| **accessibility:** botão de alto contraste | ok | Fase 7, 17 testes |
| **accessibility:** W3C sem erros | ok | Item 1: 0 erros e 0 avisos nas 10 páginas |
| **accessibility:** Lighthouse | pendente | Item 2 acima |
| **javascript:** `js/main.js` com `defer`, nomes em português e camelCase | ok | Fase 6 |
| **javascript:** `addEventListener`, `textContent`, `aria-pressed` e `aria-expanded` | ok | Código do `main.js`; testes das Fases 6 e 7 |
| **javascript:** localStorage com `try/catch` e prefixo `ters-` | ok | `ters-rascunho-contato` e `ters-alto-contraste` |
| **ai-usage:** diário de bordo e prompts guardados | ok | `docs/logs-de-mudanca/` e `docs/prompts/` |
| **ai-usage:** revisão por um integrante antes do commit | depende da equipe | O campo "Responsável pela revisão" está em branco em todos os logs |
| **git:** branches, commits e PR | depois | Fora deste prompt, como a equipe pediu |

## Pendências da equipe (resumo)

1. (Feito: o W3C validou as 10 páginas sem erros.)
2. Rodar o Lighthouse.
3. Testar com o teclado.
4. Assistir aos vídeos e conferir as legendas.
5. Imagem da home: completar o crédito ou trocar por uma foto de licença livre. Depois, decidir sobre o modo revisão (Fase 8).
6. Preencher "Responsável pela revisão" e "O que foi aceito" nos logs.
7. Parte de Git e GitHub.
