# 2026-11-16: Fase 7, botão de alto contraste

- **Data:** 2026-11-16
- **Responsável pela revisão:** (preencher)
- **Feito com IA?** Sim (Claude Code)

## Pedido / prompt usado

O prompt [docs/prompts/prompt-aplicar-correcoes-regras.md](../prompts/prompt-aplicar-correcoes-regras.md), Fase 7 (item 1 da auditoria). A equipe autorizou com "Pode prosseguir. e logo depois de terminar já segue com os próximos."

A regra `.github/accessibility-rules.md` pede: "Manter o botão de alto contraste."

## O que mudou

| Arquivo | O que foi alterado |
|---|---|
| As 10 páginas HTML | Botão `<button class="botao-contraste" id="botao-contraste" type="button" aria-pressed="false">` no cabeçalho, logo depois do menu, com o mesmo código e um comentário em todas. |
| `js/main.js` | Novo bloco 6, "Alto contraste". Liga e desliga a classe `alto-contraste` no `<html>`, atualiza o `aria-pressed` e guarda a escolha no localStorage com a chave `ters-alto-contraste`, sempre com `try/catch`. Usa funções pequenas: `aplicarContraste`, `lerPreferencia` e `salvarPreferencia`. |
| `css/style.css`, `:root` | Variáveis `--contraste-fundo` (preto), `--contraste-texto` (branco) e `--contraste-destaque` (amarelo `#FFD700`). |
| `css/style.css`, seção 3 | Estilo do botão (`.botao-contraste`) e `header nav { margin-left: auto; }`, que deixa o menu perto do botão. |
| `css/style.css`, seção 16 | Tema de alto contraste: fundo preto, texto branco, links e botões amarelos e sublinhados, foco amarelo de 3 px, sem sombras, sem degradês e sem animações. As fotos e os vídeos não mudam. |

- **Contraste:** branco sobre preto dá 21:1, e amarelo sobre preto dá 14,9:1. Os dois passam do nível AAA.
- **Por que usar `!important`:** é o jeito de trocar a cor de todos os componentes de uma vez, sem repetir cada regra.
- **Por que usar `:where()`:** deixa a regra geral com especificidade baixa, para a regra dos links (amarelo) conseguir vencer.

## Como foi testado

**Teste automático do botão (17 itens, todos passaram):**
- o botão existe nas 10 páginas, com `type="button"` e `aria-pressed="false"`;
- clicar liga a classe, muda `aria-pressed` para `true` e grava `ters-alto-contraste = sim`;
- com o modo ligado, o fundo fica preto e os links ficam amarelos;
- a escolha continua ao abrir outra página;
- clicar de novo desliga e grava `nao`.

**Teste do JS da Fase 6:** os 38 itens continuam passando (menu, filtro, calculadora, formulário e modo revisão).

**Capturas de tela da home e de Notícias com o modo ligado.** Elas mostraram dois problemas, que foram corrigidos:
- os links do menu ficavam brancos, porque a regra geral era mais específica; foi resolvido com `:where()`;
- o botão "Conheça nossas soluções" parecia só um link; ganhou uma borda amarela.

## O que foi aceito

- (preencher após a revisão)

## Pendências

- **Piscada na troca de página:** como o `main.js` usa `defer`, ao trocar de página com o modo ligado a página pode aparecer com as cores normais por um instante. Para evitar, seria preciso um script pequeno dentro do `<head>` de cada página. Fica para a equipe decidir.
- **Teste no celular:** conferir no aparelho que o botão cabe no cabeçalho ao lado do ☰ e do logo.

## Como testar

1. Abra o site pelo Live Server.
2. Clique em "◐ Alto contraste", mude de página e recarregue.
3. Navegue só com Tab e Enter: o botão recebe foco amarelo e liga e desliga o modo.

## Backup

- `_backup-2026-11-16/antes-fase-7/`: as 10 páginas, `css/style.css` e `js/main.js` de antes desta fase.
