# 2026-11-16: Fase 1, documentação na pasta /docs

- **Data:** 2026-11-16
- **Responsável pela revisão:** (preencher)
- **Feito com IA?** Sim (Claude Code)

## Pedido / prompt usado

O prompt [docs/prompts/prompt-aplicar-correcoes-regras.md](../prompts/prompt-aplicar-correcoes-regras.md), Fase 1 (itens 6 e 13 da auditoria).

## O que mudou

| Arquivo | O que foi alterado |
|---|---|
| `docs/referencias.md` | Novo. Junta as 70 referências (66 links) das 4 páginas que têm a seção "Referências", agrupadas por página. Tem um resumo no início e, no fim, a tabela "Outras páginas" com o que ainda não tem fonte. |
| `docs/prompts/prompts-que-funcionaram.md` | Novo. Traz 2 prompts sugeridos para a apresentação, cada um com o motivo da escolha e uma lição. |
| `docs/logs-de-mudanca/README.md` | Acrescentada esta fase no índice. |

Nenhum HTML, CSS ou JS foi alterado. Por isso não houve backup nesta fase.

## Como a lista de referências foi feita

- Um script em Node leu a seção `id="referencias"` de cada página e converteu o HTML para Markdown:
  - `<strong>` virou `**negrito**`;
  - `<a>` virou link;
  - `.pendencia` virou ⚠️.
- O texto das referências não foi mudado: autores, anos e links continuam iguais.
- **Conferência:** 70 itens e 66 links, os mesmos números do HTML. Nenhuma tag HTML sobrou no arquivo.

## O que foi aceito

- `docs/referencias.md` e `docs/prompts/prompts-que-funcionaram.md` foram mantidos e enviados ao GitHub no commit `7cf668f` (Fabricio).
- A lista de referências continuou sendo usada e atualizada nas fases seguintes (de 70 para 117 referências).
- Os 2 prompts sugeridos foram usados no documento `docs/uso-de-ia.md`.

_Conferido pela IA em 16/11/2026, à noite: a mudança está no código atual e na versão enviada ao GitHub._

## O que foi corrigido pela equipe

- Nada registrado nesta fase.

## Pendências

- Os autores do material da USP (e-Disciplinas) continuam faltando. O arquivo só abre com login, e a equipe precisa conferir.
- As páginas `index`, `eolica-residencial`, `eolica-grandes-parques` e `noticias` ainda não têm fontes. Isso será resolvido na Fase 3.
- A equipe precisa confirmar os 2 prompts escolhidos em `docs/prompts/prompts-que-funcionaram.md`.
- O item 13 (diário de bordo) já estava resolvido: a pasta `docs/logs-de-mudanca/` existe desde 16/11/2026.

## Como testar

1. Abra `docs/referencias.md` no VS Code (Ctrl+Shift+V para a pré-visualização) ou no GitHub.
2. Confira se as referências de uma página batem com a seção "Referências" do HTML.
3. Clique em alguns links para ver se abrem.
4. Clique nos links do resumo do início, que levam para a seção de cada página.

## Backup

- Não houve, porque nenhum arquivo do site foi alterado.
