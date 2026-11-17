# 2026-11-16: Fase 3 (parte 2), fontes dos números e crédito da imagem da home

- **Data:** 2026-11-16
- **Responsável pela revisão:** (preencher)
- **Feito com IA?** Sim (Claude Code)

## Pedido / prompt usado

O prompt [docs/prompts/prompt-aplicar-correcoes-regras.md](../prompts/prompt-aplicar-correcoes-regras.md), Fase 3, itens 1, 3 e 4 (itens 3 e 5 da auditoria). A equipe autorizou com "Pode prosseguir."

## O que mudou

| Arquivo | O que foi alterado |
|---|---|
| `eolica-residencial.html` | A seção "Onde funciona" ganhou a fonte do vento mínimo: o guia do Departamento de Energia dos EUA (DOE, 2007) indica 4 m/s para sistemas isolados e 4,5 m/s para sistemas ligados à rede. A seção "Tem espaço?" cita o DOE (2007) na regra de 9 m e 90 m e mostra uma pendência na faixa de 12 a 30 m. Uma seção "Referências" nova foi colocada antes da chamada final. |
| `eolica-grandes-parques.html` | O parágrafo "O que é um parque eólico" ganhou o exemplo do aerogerador AGW 7.X da WEG: cubo a 134 m de altura e turbinas de 6,6 a 7 MW (catálogo WEG, 2026). Uma seção "Referências" nova foi colocada antes da chamada final. |
| `solar-fotovoltaica.html` | A seção "Tem espaço?" ganhou o exemplo do módulo Intelbras EMSH-550 HC: 2,28 m × 1,13 m, cerca de 2,6 m² (ficha técnica, 2023). Também ganhou uma pendência para a equipe decidir a faixa. A ficha técnica foi incluída nas Referências, em "Sites e dados setoriais". |
| `index.html` | O banner ganhou o crédito "Imagem: Canal Bioenergia", com link e pendência de autor, ano e licença. O `alt` ficou mais descritivo, escrito depois de ver a imagem: "Fileiras de painéis solares num campo verde, com turbinas eólicas ao fundo e o sol se pondo." |
| `css/style.css` | Seção 5 (banner da home): novas regras `.hero .hero-credito`, com comentário. O seletor tem duas classes para vencer a regra `.hero p`, que deixava o crédito com 18 px. |
| `docs/referencias.md` | Novas seções para as duas páginas de eólica, a ficha da Intelbras na Solar Fotovoltaica, o resumo atualizado (90 referências) e a tabela "Outras páginas" com a situação de cada item. |

As seções novas de Referências reaproveitam as classes `.referencias` e `.lista-referencias`, que já existiam na seção 18 do CSS.

## Como cada número foi conferido

Cada fonte foi lida no documento original, não só no resultado da busca.

| Número no site | Fonte | O que a fonte diz |
|---|---|---|
| Vento de 4 a 5 m/s | DOE, *Small wind electric systems*, ago. 2007 (PDF) | "at least 9 mph (4.0 m/s)" para sistema isolado e "10 mph (4.5 m/s)" para sistema ligado à rede |
| 9 m acima de obstáculos num raio de 90 m | DOE, 2007 (PDF) | "at least 30 feet (9 meters) above any obstacle that is within 300 feet (90 meters)" |
| Torres de 12 a 30 m | Nenhuma fonte confiável encontrada | O guia do DOE só dá o exemplo de torres de 60 e 100 pés (18 m e 30 m) |
| Torres acima de 100 m | Catálogo WEG AGW 7.X, ago. 2026 (PDF) | "Altura do cubo 134m ou site-specific"; modelos AGW 172/7.0 e AGW 190/6.6 |
| De 2 a 2,5 m² por painel | Ficha técnica Intelbras EMSH-550 HC (PDF, pasta 2023-02 do site) | 1134 × 2278 × 30 mm, ou seja, cerca de 2,58 m² |

## O que foi aceito

- (preencher após a revisão)

## O que foi corrigido

- **Tamanho do crédito da home.** Na primeira versão, o crédito aparecia com 18 px, porque a regra `.hero p` era mais específica. O seletor foi trocado para `.hero .hero-credito`. O selo de pendência dentro do crédito passou a herdar os 13 px, porque com 0,8 em ficava com menos de 10 px.
- **Fontes descartadas.**
  - Revista Pesquisa FAPESP (2020): fala em torres "de até 100 metros", o que não confirma "acima de 100 m".
  - Um material didático da USP (150 m): não tem data nem fonte.
  - Páginas espanholas sobre microeólica: não são sobre o Brasil e não falam da faixa de 12 a 30 m.
- **Fontes antigas e novas do DOE.** O guia atual do DOE (*Small Wind Guidebook*, sem data) repete a regra dos 9 m e 90 m, mas em outro trecho fala num raio de 500 pés (cerca de 150 m). O site cita o guia de 2007, que tem exatamente os números do texto.

## Lista para a equipe: tudo que ficou pendente na Fase 3

| Página | Trecho | O que falta | Onde procurar |
|---|---|---|---|
| `eolica-residencial.html` | "torres que costumam ter de 12 a 30 metros" | Uma fonte para a faixa. Se não houver, trocar o texto pelo exemplo do DOE (18 m e 30 m) | Catálogos de fabricantes de aerogeradores pequenos; CRESESB/Cepel; norma ABNT NBR IEC 61400-2 |
| `solar-fotovoltaica.html` | "Cada painel ocupa em torno de 2 a 2,5 m²" | Decidir se a faixa vira "2 a 2,6 m²" | A ficha da Intelbras já citada; fichas de outros fabricantes |
| `index.html` | Imagem do banner (Canal Bioenergia) | Autor, ano e licença. Sem licença, o site pode estar usando uma foto protegida | Perguntar ao Canal Bioenergia. A outra opção é trocar por uma foto de licença livre (Wikimedia Commons), como na página de notícias |
| `noticias.html` | Foto da PCH Palmeiras | O nome do autor aparece cortado na própria fonte | Página do arquivo no Wikimedia Commons. Se preferir, trocar a foto |
| `noticias.html` | 5 vídeos | Assistir aos vídeos para confirmar os resumos e ver se têm legenda em português | YouTube |
| `hidraulica-impactos.html` | "rio Ijuí" (correção da Fase 2) | Confirmar no material de origem | Documento da equipe e referências da página |
| `hidraulica-funcionamento.html` | Material da USP (e-Disciplinas) | Autores. O arquivo só abre com login | Login de aluno no e-Disciplinas |

## Como testar

1. Abra as páginas pelo Live Server do VS Code.
2. Em `eolica-residencial.html`, confira as seções "Onde funciona" e "Tem espaço?" e a seção "Referências" no fim.
3. Em `eolica-grandes-parques.html`, confira o primeiro parágrafo e a seção "Referências" no fim.
4. Em `solar-fotovoltaica.html`, confira a seção "Tem espaço?".
5. Em `index.html`, veja se o crédito aparece pequeno, logo abaixo da foto do banner, e se o link abre o site do Canal Bioenergia.

## Conferência feita pela IA

- As tags `section`, `div`, `p`, `span`, `ul`, `li` e `a` estão equilibradas nos 4 HTML alterados: cada uma abre e fecha.
- **Contraste AA:**
  - crédito `#55625A` sobre o fundo do banner: 5,55:1 e 5,65:1;
  - selo de pendência: 7,60:1.
- O script de regras não acusou nenhum problema novo. Continua só o aviso do `js/script.js`, que é a Fase 6.
- As capturas de tela em 1280 px mostram as pendências visíveis, as seções de Referências antes da chamada final e o crédito da home no tamanho certo.

## Backup

- `_backup-2026-11-16/antes-fase-3b/`: `eolica-residencial.html`, `eolica-grandes-parques.html`, `solar-fotovoltaica.html`, `index.html` e `css/style.css` de antes desta parte.
