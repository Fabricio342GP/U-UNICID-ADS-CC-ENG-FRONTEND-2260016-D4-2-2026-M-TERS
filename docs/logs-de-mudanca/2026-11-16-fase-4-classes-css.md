# 2026-11-16: Fase 4, reaproveitar classes do CSS

- **Data:** 2026-11-16
- **Responsável pela revisão:** (preencher)
- **Feito com IA?** Sim (Claude Code)

## Pedido / prompt usado

O prompt [docs/prompts/prompt-aplicar-correcoes-regras.md](../prompts/prompt-aplicar-correcoes-regras.md), Fase 4 (item 11 da auditoria). A equipe autorizou com "Pode prosseguir."

A regra `.github/layout-rules.md` diz: "Não criar novas classes CSS se já existir uma classe correspondente usada na página principal."

## O que mudou

| Classe criada em 15/11 | Agora | Onde |
|---|---|---|
| `.comparacao-texto` | Trocada por `.texto-coluna`, que já existia | Seção 8 de `solar-fotovoltaica`, `solar-termica`, `hidraulica-funcionamento` e `hidraulica-impactos` |
| `h3.subtitulo` | Retirada: o h3 usa o estilo de `.secao h3`, que já existia | Seção 7 de `solar-fotovoltaica`, `solar-termica` e `hidraulica-funcionamento` (6 subtítulos) |
| `.caixa-risco` | Passou a ser uma variação da `.caixa`, do mesmo jeito que a `.caixa-atencao`. No HTML: `class="caixa caixa-risco"` | Seção 7 de `solar-fotovoltaica`, `solar-termica` e `hidraulica-funcionamento` |

No HTML, cada troca ganhou um comentário curto `<!-- Fase 4 ... -->`.

### No CSS (`css/style.css`, seção 18)

- **Regras retiradas:** `.secao h3.subtitulo` (3 seletores), `.comparacao-texto` e o ajuste de padding da `.caixa-risco` no celular.
- **`.caixa-risco` ficou menor.** Antes eram 7 propriedades. Agora são 3: borda esquerda vermelha, fundo vermelho claro e espaço de baixo. Largura, cantos, espaçamento e borda vêm da `.caixa` (seção 9).
- **Duas regras novas, sem criar classe nova,** só para manter os espaços que já existiam:
  - `.secao .lista + h3 { margin-top: 34px; }`: o subtítulo que vem logo depois de uma lista mantém o espaço maior.
  - `.secao .grade-3 + .texto-coluna { margin-top: 26px; }`: mantém o espaço entre os cartões da comparação e o texto.
- **Comentário do início da seção 18:** agora lista as classes retiradas e lembra que as Fases 3 e 4 mexeram em outras seções.

Foi conferido que nenhuma outra página tem `.grade-3` seguida de `.texto-coluna`, nem um h3 logo depois de uma `.lista` (as listas de referências usam outra classe). As duas regras novas só valem onde antes havia as classes retiradas.

## Por que a caixa de risco não virou `.caixa-atencao`

A caixa de atenção é amarela e serve para recomendações. A caixa de risco avisa de perigo para a pessoa: choque, queda, incêndio, arco elétrico. A equipe pediu que esses avisos ficassem bem visíveis. Por isso ela continua vermelha, mas agora segue o mesmo modelo da caixa de atenção, como variação da `.caixa`.

## Comparação antes × depois

As capturas foram feitas em 1280 px pelo servidor local e comparadas linha por linha com um script. A primeira diferença aparece na seção 7 de cada página. O que mudou na aparência:

| Onde | Antes | Depois |
|---|---|---|
| Caixa "Riscos" | 860 px de largura, borda esquerda de 8 px, contorno fino vermelho | 800 px, borda esquerda de 6 px, sem contorno: igual às outras caixas do site. Continua vermelha |
| Primeiro subtítulo da seção 7 (depois do h2 ou de um parágrafo) | 18 px de espaço acima | 14 px (3 a 4 px mais perto) |
| Subtítulo depois de uma lista | 34 px | 34 px (igual) |
| Texto da seção 8 (comparação) | 860 px de largura | 760 px, a largura padrão de texto do site. O texto ganhou uma linha |
| Link "página 4" na seção 8 | Azul padrão do navegador, diferente do resto do site | Negrito, na cor do tema, como os links de "Veja também" |
| Espaço entre os cartões e o texto da seção 8 | 26 px | 26 px (igual) |

## O que foi aceito

- (preencher após a revisão)

## O que foi corrigido

- Nada até aqui.

## Pendências

- A equipe confirma se aceita as pequenas mudanças de aparência da tabela acima.
- Testar no celular. O ajuste de padding da caixa de risco no celular foi retirado, e agora ela segue a `.caixa`, como a caixa de atenção.

## Como testar

1. Abra pelo Live Server as páginas `solar-fotovoltaica.html`, `solar-termica.html`, `hidraulica-funcionamento.html` e `hidraulica-impactos.html`.
2. Na seção 7, confira os subtítulos e a caixa vermelha "Riscos". Ela deve ter a mesma largura da caixa amarela logo abaixo.
3. Na seção 8, confira o texto depois dos cartões e o link "página 4".
4. Reduza a largura da janela para ver o layout de celular.

## Conferência feita pela IA

- O HTML e o CSS não usam mais `.subtitulo` nem `.comparacao-texto`. Elas só aparecem nos comentários que explicam a troca.
- As tags `div` e `h3` estão equilibradas nas 4 páginas: cada uma abre e fecha.
- O script de regras não acusou nenhum problema novo. Continua só o aviso do `js/script.js`, que é a Fase 6.

## Backup

- `_backup-2026-11-16/antes-fase-4/`: as 4 páginas e `css/style.css` de antes desta fase.
