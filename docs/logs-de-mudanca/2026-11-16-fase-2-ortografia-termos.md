# 2026-11-16: Fase 2, erros de digitação e termos técnicos

- **Data:** 2026-11-16
- **Responsável pela revisão:** (preencher)
- **Feito com IA?** Sim (Claude Code)

## Pedido / prompt usado

O prompt [docs/prompts/prompt-aplicar-correcoes-regras.md](../prompts/prompt-aplicar-correcoes-regras.md), Fase 2 (itens 7 e 8 da auditoria).

A equipe autorizou com "pode seguir para a fase 2". Depois, aprovou as explicações propostas com "Pode prosseguir."

## O que mudou

| Arquivo | O que foi alterado |
|---|---|
| `solar-fotovoltaica.html` | "o conteém" → "o contém", no item "Arco elétrico em CC". |
| `solar-fotovoltaica.html` | Explicações de **altura manométrica** e **altura de recalque**, no item "Bombeamento solar de água". |
| `solar-fotovoltaica.html` | Siglas **AFPE** e **GFCI** com `<abbr title>` e uma explicação no texto, no item "Normas estaduais de bombeiros". |
| `hidraulica-impactos.html` | "rio Ijaí" → "rio Ijuí", no parágrafo "Trecho de vazão reduzida (TVR)". |
| `hidraulica-impactos.html` | `<abbr title="trecho de vazão reduzida">` no "TVR" do item "Licenciamento ambiental". |
| `hidraulica-funcionamento.html` | Explicação de **recalque**, no item "O que é" do carneiro hidráulico. |
| `docs/logs-de-mudanca/` | `README.md` → `readme.md` e `MODELO.md` → `modelo.md`, porque a regra pede nomes em minúsculas. As menções no índice e no prompt foram atualizadas. Os logs antigos ficaram iguais, como registro do que foi feito naquele dia. |

Cada trecho novo no HTML tem um comentário `<!-- Fase 2 (16/11/2026): ... -->` explicando o motivo.

### Texto acrescentado (aprovado pela equipe)

- **Altura manométrica:** "é a altura total que a bomba precisa vencer: o desnível até a caixa d'água somado à perda de pressão da água nos canos."
- **Altura de recalque:** "a diferença de altura entre a bomba e o ponto mais alto aonde a água precisa chegar."
- **Recalque:** "é o trecho em que a água é empurrada para cima, do equipamento até a caixa d'água."
- **AFPE:** "um dispositivo que percebe faíscas nos cabos e desliga o circuito."
- **GFCI:** "que desliga o circuito quando a corrente escapa para a estrutura ou para o chão, o que reduz o risco de choque e de incêndio."

Essas explicações são conhecimento técnico geral, não tiradas de uma fonte específica.

### Por que `<abbr>`

- A tag `<abbr title="...">` marca uma sigla. O navegador mostra o significado quando o mouse passa por cima.
- Esse aviso não aparece no celular nem para quem navega pelo teclado. Por isso a explicação também fica escrita no texto.

## O que foi aceito

- As propostas 1 a 4 foram aceitas sem mudanças: altura manométrica, recalque, AFPE e GFCI, e o `<abbr>` no TVR.

## O que foi corrigido

- **Erro da auditoria:** ela apontou o TVR como termo sem explicação. Isso estava errado: a página já explicava o termo no parágrafo "Trecho de vazão reduzida (TVR)". Por isso só foi acrescentado o `<abbr>` na segunda vez que a sigla aparece.
- **Nomes de arquivo:** a IA tinha criado `README.md` e `MODELO.md` em maiúsculas. O script de conferência apontou o problema, e os arquivos foram renomeados.

## Pendências

- Os 2 erros de digitação vieram do documento da equipe ("Site de Fontes de Energia – Conteúdo das páginas 1 a 4"). Vale corrigir também no documento original.
- **Rio Ijuí:** a UHE São José fica no rio Ijuí (RS), mas nenhuma referência da página cita a usina pelo nome. A equipe deve confirmar no material que deu origem ao parágrafo.
- **Termos opcionais, não alterados:** "golpe de aríete" (`hidraulica-funcionamento.html`) e "vazão remanescente" (`hidraulica-impactos.html`) também são termos técnicos. A equipe decide se quer explicá-los.

## Como testar

1. Abra `solar-fotovoltaica.html`, seção 7 ("No sítio ou na fazenda"), e leia os itens "Bombeamento solar de água" e "Normas estaduais de bombeiros". Passe o mouse em AFPE e GFCI.
2. Abra `hidraulica-funcionamento.html`, item "Carneiro hidráulico" → "O que é".
3. Abra `hidraulica-impactos.html`, procure "Ijuí" e passe o mouse em "TVR" no item "Licenciamento ambiental".
4. Teste no celular (ou com a largura reduzida no navegador) para ver se o texto quebra bem.

## Conferência feita pela IA

- O `diff` com o backup mostra só as linhas esperadas.
- As tags `<abbr>` e `<li>` estão equilibradas: cada uma abre e fecha.
- O script de regras não acusou nenhum problema novo nas páginas. O único aviso continua sendo o `js/script.js`, que é a Fase 6.

## Backup

- `_backup-2026-11-16/`: tem `solar-fotovoltaica.html`, `hidraulica-funcionamento.html` e `hidraulica-impactos.html` de antes desta fase.
