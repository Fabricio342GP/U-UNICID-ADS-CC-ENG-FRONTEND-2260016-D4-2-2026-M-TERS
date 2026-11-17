# 2026-11-16: Fase 5 (parte 2), CSS Mobile First

- **Data:** 2026-11-16
- **Responsável pela revisão:** (preencher)
- **Feito com IA?** Sim (Claude Code)

## Pedido / prompt usado

O prompt [docs/prompts/prompt-aplicar-correcoes-regras.md](../prompts/prompt-aplicar-correcoes-regras.md), Fase 5, item 2 (item 9 da auditoria). A equipe autorizou com "Pode prosseguir."

A regra `.github/general-rules.md` pede: "Escrever código responsivo (Mobile First) utilizando Flexbox e CSS Grid."

## O que é Mobile First (para explicar na apresentação)

| Desktop First (antes) | Mobile First (agora) |
|---|---|
| As regras normais eram as do computador. | As regras normais são as do **celular**. |
| Blocos `@media (max-width: ...)` "desfaziam" coisas para telas pequenas. | Blocos `@media (min-width: ...)` **acrescentam** o que muda em telas maiores. |

Assim, o celular, que é a tela mais simples, recebe o mínimo de CSS, e as telas maiores vão ganhando ajustes.

## O que mudou

Só o arquivo `css/style.css`. Nenhum HTML foi alterado.

| Antes | Agora |
|---|---|
| `@media (max-width: 1000px)` | `@media (min-width: 1001px)`: computador |
| `@media (max-width: 768px)`, na seção 17 | `@media (min-width: 769px)`: tablet e computador |
| `@media (max-width: 768px)`, no fim da seção 18 | `@media (min-width: 769px)` |

- **Regras base com o valor do celular.** 25 propriedades, em 23 regras das seções 3 a 14 e 18, agora têm o valor do celular. Cada uma tem um comentário curto com o valor de tablet e computador. Exemplos:
  - `.secao h2`: `font-size: 25px; /* celular; tablet e computador: 30px (seção 17) */`
  - `.grade-3`: `grid-template-columns: 1fr; /* celular; tablet e computador: 3 colunas */`
  - `header nav`: regra nova com `display: none`. No celular, o menu horizontal fica escondido e se usa o menu lateral; ele aparece a partir de 769 px.
- **Seção 17.** Tem um comentário explicando o Mobile First e dois blocos `min-width`. O de 1001 px vem depois do de 769 px, para vencer quando os dois valem.
- **Grades com três tamanhos:**
  - **perguntas:** 1 coluna no celular, 2 no tablet e 4 no computador;
  - **equipe:** 2 colunas no celular, 3 no tablet e 5 no computador.
- **Duas variáveis novas no `:root`:** `--espaco-secao-celular` (48 px) e `--espaco-secao-grande-celular` (55 px), os espaços das seções no celular.
- **Comentários atualizados:** o índice do topo (item 17), o comentário do `:root` (pontos de quebra 769 px e 1001 px) e o título da seção 17.

Os pontos de quebra são os mesmos de antes:
- até 768 px: celular;
- de 769 a 1000 px: tablet;
- a partir de 1001 px: computador.

## Como foi garantido que a aparência não mudou

1. **Teste de equivalência** (na pasta temporária da IA, não faz parte do site).
   - **Como funciona:** uma página de teste abriu cada uma das 10 páginas do site duas vezes, em `iframe` da mesma largura: uma com o CSS antigo e outra com o novo. Ela comparou **todos os elementos**: posição e tamanho da caixa e 44 propriedades calculadas, como `display`, `grid-template-columns`, margens, paddings, fonte, cores e bordas. Comparou também os `::before` e `::after`.
   - **Larguras testadas:** 360, 412, 600, 767, 768, 769, 800, 1000, 1001, 1280 e 1600 px. Assim os limites dos pontos de quebra também foram testados.
   - **Teste de controle:** antes, o CSS antigo foi comparado com ele mesmo, e o resultado foi 0 diferenças. Isso mostra que o teste não tem "ruído".
   - **Resultado:** **0 elementos diferentes em 110 combinações** (10 páginas × 11 larguras).
2. **Proteção contra outras sessões.** O script só gravou porque o `style.css` continuava igual ao que foi lido (conferido pelo MD5). O arquivo gravado é idêntico, byte a byte, ao que passou no teste.

### Um detalhe técnico

Com `max-width: 768px` e `min-width: 769px`, uma largura **com fração**, entre 768 e 769 px, cai em lados diferentes no CSS antigo e no novo. Isso só acontece com zoom do navegador em valores muito específicos, e o mesmo vale para 1000–1001 px. Uma alternativa seria a sintaxe nova `@media (width > 768px)`. Ela não foi usada porque `min-width` é a forma vista em aula.

## O que foi aceito

- (preencher após a revisão)

## O que foi corrigido

- O script parou sozinho na primeira tentativa, porque `.grade-3` e `.secao ul.lista` aparecem em duas regras cada. A busca foi ajustada para usar o bloco exato. Nada tinha sido gravado.

## Pendências

- Testar num celular de verdade e num tablet. O teste automático garante que o resultado é igual ao de antes, mas não substitui olhar a página.

## Como testar

1. Abra o site pelo Live Server.
2. No navegador, abra as ferramentas (F12) e ative o modo de dispositivo (Ctrl+Shift+M).
3. Teste larguras de celular (360 px), de tablet (800 px) e de computador (1280 px).
4. Confira o menu: o horizontal só aparece a partir de 769 px, e o botão ☰ funciona em todas as larguras.

## Backup

- `_backup-2026-11-16/antes-fase-5b/css/style.css`: o CSS de antes desta parte, já com as variáveis da parte 1.
