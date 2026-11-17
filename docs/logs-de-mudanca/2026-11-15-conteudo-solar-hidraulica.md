# 2026-11-15: Conteúdo das páginas solar e hidráulica

- **Data:** 2026-11-15
- **Responsável pela revisão:** Thiago Roberto de Oliveira
- **Feito com IA?** Sim (Claude Code)

## Pedidos / prompts usados

1. "Utilize esse documento para atualizar os conteúdos das páginas: Hidraulica-funcionamento, Hidraulica-impactos, Solar-fotovoltaica, Solar-Termica." (com o PDF "Site de Fontes de Energia – Conteúdo das páginas 1 a 4")
2. "Preencha as partes que estão pendentes nas fontes ou as retire."
3. "Quero que você mantenha as fontes, e coloque as informações faltantes das páginas que são requisitadas e não as retire."
4. "Faça os comentários dos comandos do que foi alterado."

## O que mudou

| Arquivo | O que foi alterado |
|---|---|
| `solar-fotovoltaica.html` | Novas seções antes da chamada final: 7 "No sítio ou na fazenda", 8 "Comparando as fontes" e 9 "Referências" (ABNT com links). As seções antigas ficaram iguais. |
| `solar-termica.html` | As mesmas seções 7, 8 e 9. |
| `hidraulica-funcionamento.html` | As mesmas seções 7, 8 e 9. |
| `hidraulica-impactos.html` | Página reescrita com as seções 1 a 9 do PDF. |
| `css/style.css` | Nova seção 18, também listada no índice do topo, com as classes `.pendencia`, `.so-revisao`, `.caixa-risco`, `.item-risco`, `.card-comparacao`, `.subtitulo`, `ol.lista`, `.referencias`, `.lista-referencias`, `.ver-tambem` e `.comparacao-texto`. |
| `js/script.js` | Novo bloco 5, "Modo revisão": o endereço com `?revisao` mostra os trechos `.so-revisao`. |
| As 4 páginas, o CSS e o JS | Comentários simples explicando cada trecho novo. |

## O que foi aceito

- O texto do PDF foi copiado exatamente como estava, sem acréscimos.
- Os itens marcados [completar] e [confirmar] no PDF aparecem como pendências visíveis (`.pendencia`).
- Os avisos de risco aparecem em caixas destacadas (`.caixa-risco`).
- As referências estão em ABNT, com links. Os DOIs foram conferidos na base Crossref.

## O que foi corrigido

- **Fontes:** no 2º pedido, a IA podia retirar as fontes incompletas. A equipe corrigiu no 3º pedido: manter todas as fontes e completar os dados que faltam.
- **DOI errado:** um DOI de resultado de busca estava errado. Foi corrigido pela Crossref para `10.1590/1519-6984.183883`.

## Pendências

- Autores do material da USP (e-Disciplinas) sobre carneiro hidráulico: o arquivo só abre com login.
- Itens `.pendencia` por página:
  - `solar-fotovoltaica`: 1
  - `solar-termica`: 3
  - `hidraulica-funcionamento`: 5
  - `hidraulica-impactos`: 11
- Trechos `.so-revisao` (dados sem fonte, escondidos do público):
  - `solar-termica`: 2
  - `hidraulica-impactos`: 8
- Os sites core.ac.uk, Anima, Brasil Energia e Peixe Vivo bloqueiam acesso automático. A equipe deve conferir essas fontes manualmente.

## Como testar

1. Abra as 4 páginas e confira as seções novas e as referências.
2. Abra uma das páginas com `?revisao` no fim do endereço. Exemplo: `hidraulica-impactos.html?revisao`. Os trechos de revisão devem aparecer.
3. Teste em tela de celular e de computador.

## Backup

- `_backup-2026-11-15/`: tem as 4 páginas, o CSS e o JS de antes da mudança.
