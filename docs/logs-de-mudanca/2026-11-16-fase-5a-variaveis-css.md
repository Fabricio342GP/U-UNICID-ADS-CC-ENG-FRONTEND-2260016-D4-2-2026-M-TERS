# 2026-11-16: Fase 5 (parte 1), variáveis CSS

- **Data:** 2026-11-16
- **Responsável pela revisão:** (preencher)
- **Feito com IA?** Sim (Claude Code)

## Pedido / prompt usado

O prompt [docs/prompts/prompt-aplicar-correcoes-regras.md](../prompts/prompt-aplicar-correcoes-regras.md), Fase 5, item 1 (item 10 da auditoria). A equipe autorizou com "Pode prosseguir."

A Fase 5 foi dividida em duas partes, para cada uma ter sua própria conferência:
1. variáveis (este log);
2. Mobile First (próximo log).

A regra `.github/general-rules.md` pede: "Usar variáveis CSS (`:root`) para cores, fontes e espaçamentos padrão."

## O que mudou

Só o arquivo `css/style.css`. Nenhum HTML foi alterado.

| O quê | Antes | Depois |
|---|---|---|
| Cores fora do `:root` | 73 ocorrências de 40 cores diferentes (na auditoria eram 63; as Fases 3 e 4 acrescentaram algumas) | **0** |
| Variáveis no `:root` | 12 | 69, organizadas em grupos com comentário |
| Trocas por `var(--nome)` | | 73 cores, 1 fonte, 49 tamanhos de texto, 23 cantos arredondados, 11 larguras máximas, 7 espaçamentos |

### Grupos de variáveis no `:root`

- **Cores principais:** verde, azul, amarelo, ocre, cinza-azulado, cada uma com as versões claro, borda e escuro que o site já usava. Também `--branco`, `--fundo`, `--fundo-card`, `--borda-suave` e `--borda-campo`.
- **Textos:** do mais escuro ao mais claro: `--texto`, `--texto-titulo`, `--texto-menu`, `--texto-corpo`, `--texto-topo`, `--texto-suave`, `--texto-hero` e `--texto-card`.
- **Menu lateral (fundo escuro):** `--menu-escuro`, `--menu-titulo`, `--menu-link`, `--menu-destaque` e `--foco-menu`.
- **Erros e avisos:** `--erro`, `--erro-escuro`, `--erro-claro`, `--pendencia-fundo` e `--pendencia-texto`.
- **Transparências:** `--preto-04` até `--preto-50`, `--branco-10` e `--branco-12`. O número é a opacidade em %.
- **Tema da página:** `--tema`, `--tema-claro` e `--tema-borda`. Os temas da seção 2 (solar, eólica e hidráulica) agora usam as cores do `:root`, por exemplo `--tema: var(--ocre)`.
- **Fonte e tamanhos de texto:** `--fonte-principal`, e de `--tamanho-minimo` (12 px) a `--tamanho-destaque` (18 px).
- **Cantos:** de `--raio-minimo` (6 px) a `--raio-card` (14 px).
- **Larguras e espaços:** `--largura-intro` (700 px), `--largura-texto` (760 px), `--largura-caixa` (800 px), `--largura-lista` (860 px), `--espaco-grade` (25 px), `--espaco-secao` (64 px) e `--espaco-secao-grande` (80 px).

### O que ficou com número, e por quê

- **Pontos de quebra das `@media` (1000 px e 768 px):** o CSS não aceita variáveis dentro de `@media (...)`.
- **Tamanhos de título e de ícone (19 px a 58 px):** cada um é usado por um componente só, então não são um "padrão" que se repete.
- **Margens e paddings internos:** quase nenhum valor se repete. Os que se repetiam eram de componentes diferentes, sem relação entre si.

### Um cuidado com `#E8F1EA`

Essa cor aparecia solta em 5 lugares e também era o valor padrão de `--tema-claro`. Ela **não** foi trocada por `var(--tema-claro)`, porque `--tema-claro` muda nas páginas de solar, eólica e hidráulica, e esses 5 lugares mudariam de cor. Foi criada `--verde-claro`, e agora `--tema-claro` também usa `var(--verde-claro)`.

## Como foi garantido que a aparência não mudou

1. **Script com verificação** (na pasta temporária da IA, não faz parte do site). Ele fez as trocas, depois trocou cada `var(--nome)` de volta pelo valor e comparou com o CSS antigo. O resultado foi **idêntico**. Isso cobre também o que a captura de tela não mostra: menu lateral aberto, efeitos ao passar o mouse e foco.
2. **O script só gravava** se o arquivo continuasse igual ao lido no começo (conferido pelo MD5). Isso foi necessário porque havia outras sessões trabalhando no projeto ao mesmo tempo.
3. **Capturas de tela** das 10 páginas em 1280, 768 e 412 px, antes e depois, comparadas pixel a pixel:
   - **27 de 30 iguais**, sem nenhum pixel diferente;
   - **`noticias.html` nas 3 larguras:** só as miniaturas dos vídeos do YouTube mudaram, porque dependem do momento em que cada vídeo carrega. O resto da página é igual.

## O que foi aceito

- As variáveis no `:root` foram mantidas. Na conferência de 16/11/2026, à noite, havia **0** cores em hexadecimal fora do `:root`.
- Enviado no commit `5abfeda` (Evandro).

_Conferido pela IA em 16/11/2026, à noite: a mudança está no código atual e na versão enviada ao GitHub._

## O que foi corrigido

- Nada até aqui.

## Pendências

- Nenhuma desta parte. A próxima é a Fase 5 (parte 2), Mobile First.

## Observação: outras sessões no projeto

Enquanto esta fase rodava, outras duas sessões estavam abertas no mesmo projeto. Elas mudaram `eolica-residencial.html` e `eolica-grandes-parques.html` (texto novo da equipe, com backup em `_backup-2026-11-16/antes-texto-novo-eolica/`), `sobre.html`, `contato.html` e `docs/referencias.md`. Esta fase não mexeu nesses arquivos. As capturas de antes foram feitas depois dessas mudanças, para a comparação ser justa.

## Como testar

1. Abra o site pelo Live Server e navegue pelas páginas: tudo deve estar igual a antes.
2. **Teste rápido:** em `css/style.css`, troque o valor de `--verde` por outra cor, salve e veja o site mudar em vários lugares. Depois desfaça.

## Backup

- `_backup-2026-11-16/antes-fase-5a/css/style.css`: o CSS de antes desta parte.
