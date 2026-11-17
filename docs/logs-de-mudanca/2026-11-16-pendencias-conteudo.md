# 2026-11-16: Pendências das páginas de conteúdo resolvidas

- **Data:** 2026-11-16
- **Responsável pela revisão:** (preencher)
- **Feito com IA?** Sim (Claude Code)

## Pedido / prompt usado

> Corrija os pendentes que aparece nas páginas de conteúdos.

> Retire qualquer coisa que remeta alguma fase teste do site ou pendente que apareça que não deva ir para o conteúdo final.

Decisões da equipe, tomadas durante o trabalho:

- Os 3 trechos da página Hidráulica – Impactos que mandavam o leitor para a página 3 (metano, área alagada, famílias deslocadas, participação atual na matriz, impactos da construção) ganharam o conteúdo na própria página 4. A página 3 não mudou nesse ponto.
- A área do painel passou de "2 a 2,5 m²" para "2 a 2,6 m²".

## Regra usada

Cada pendência foi resolvida de um destes jeitos:

1. **Achou fonte:** o selo saiu e o texto ganhou a informação com a fonte. A fonte entrou nas Referências da página.
2. **A fonte desmentiu o texto:** o texto foi corrigido pela fonte primária.
3. **Remissão para conteúdo que não existe:** o conteúdo entrou na própria página.

Também saíram do código e da tela: os selos "Pendente", o conteúdo escondido do modo `?revisao`, os avisos "(conhecimento geral, não verificado)", as frases "o ideal é conferir…" e "não foram verificadas nesta pesquisa", os comentários "Nota para a IA" e os comentários de "Fase" no HTML dessas páginas.

## O que mudou

### `hidraulica-funcionamento.html`

| Trecho | Antes | Agora | Fonte |
|---|---|---|---|
| Carneiro: riscos e cuidados | "(conhecimento geral, não verificado)" + selo "confirmar com o órgão estadual" | Outorga explicada pela Lei das Águas; água de córrego deve ser tratada; golpe de aríete de 20 a 100 vezes por minuto pode danificar a tubulação. Saiu "o golpe de aríete é ruidoso", porque nenhuma fonte confirmou | Lei 9.433/1997, art. 12; Embrapa Gado de Leite (Otenio et al., 2013); Abate e Botrel (2002) |
| Classificação CGH/PCH/UHE | Selo "confirmar na REN 673/2015" | Números confirmados. A REN 673/2015 foi consolidada na REN 875/2020 | Lei 9.074/1995, art. 8º (Lei 13.360/2016); REN ANEEL 875/2020, art. 5º (REN 1.070/2023) |
| MCH dispensada pelo estado | Selo "não verificado" | Explica a dispensa de usos insignificantes, definidos em regulamento | Lei 9.433/1997, art. 12, § 1º, e art. 38, V |
| Segurança de barragem | Selo "conferir critérios" | Os 5 critérios da lei (15 m, 3 milhões de m³, resíduos perigosos, dano potencial, risco alto) | Lei 12.334/2010, art. 1º (Lei 14.066/2020) |
| Ligação à rede | "(conhecimento geral, não verificado)" | Proteção anti-ilhamento, desligamento em até 2 s e placa de "risco de choque" | Light, Informação Técnica DTE/DTP 01/2012, rev. abr. 2024, item 5 |
| Referência do material da USP | Selo "AUTORES" | Entrada sem autor, que começa pelo título, como a ABNT manda. O arquivo só abre com login, e não há autoria visível | e-Disciplinas USP |

### `hidraulica-impactos.html`

| Trecho | Antes | Agora | Fonte |
|---|---|---|---|
| Assoreamento | Escondido (`?revisao`) | Publicado com fonte | Carvalho et al., *Guia de avaliação de assoreamento de reservatórios*, ANEEL, 2000 |
| Capim Branco I | Selo "não generalizar" | Frase no texto: o resultado é de um único estudo de caso | Paulo (2007), já citado |
| Belo Monte | Selo "falta a posição do empreendedor e do licenciamento" | Posição do Ibama (set. 2025: pediu novo hidrograma) e da Norte Energia (defende o hidrograma atual; segurança energética) e situação em abr. 2026 | Agência Pública (ago. e set. 2025); Agência iNFRA (out. 2025); Folhapress (abr. 2026) |
| Escadas para peixes (80%) | Escondido | Publicado com fonte | Arrais, Costa e Köhler (2012), *Caderno de Pesquisa, série Biologia* |
| Regime de cheias | Escondido | Publicado. "Cheias criam lagoas" virou "o rio se liga às lagoas", que é o que a fonte diz | Agostinho, Pelicice e Gomes (2008), *Brazilian Journal of Biology* |
| Outros impactos | "estão na seção 6 da página 3" (não existia) | Parágrafo próprio: 34 mil km² alagados, 200 mil famílias, metano, contrapontos da EPE e do IPCC | Bermann (2007), *Estudos Avançados*; Aos Fatos (2023) |
| Participação atual na matriz | "veja a página 3" (não existia) | 51,2% em 2025 e 55,3% em 2024 | EPE, *BEN 2026*, ano base 2025 |
| Reservatórios desde os anos 1980 | Selo "conferir antes de generalizar" | Frase atribuída à fonte | Comitê Permanente de Energia (2024), já citado |
| Impactos da construção | "estão na página 3" | Link para a seção 3 desta página | – |
| Microcentral em barragem existente | Escondido | Publicado | Sousa (2017), TCC CEULP/ULBRA, Gurupi-TO |
| Vazão remanescente | Selo "valor depende do órgão estadual" | Frase no texto: quem define é o órgão outorgante, e o critério muda por estado | Melo (2011), já citado |

### `solar-termica.html`

| Trecho | Antes | Agora | Fonte |
|---|---|---|---|
| Coletor certificado | "normas da página 2" (a página não as citava) | Cita a Portaria Inmetro nº 633/2026 (certificação e ENCE), a NBR 16641 e a NBR 15569 | Portaria Inmetro 633/2026 (DOU, 6 nov. 2026); catálogos ABNT |
| ASBC, temperatura | "até 55 °C", tirado de reportagem | "Temperatura máxima do dia mais 20 °C". A fonte primária **não** fala em 55 °C | Sociedade do Sol, *Informações técnicas*, item 10.2 |
| Queimadura e pressão | "(não verificado)" | Válvula misturadora, água a 52 °C no aquecedor de garrafas PET, limite de 5 m.c.a. no reservatório de baixa pressão. Saiu "ou regule o apoio elétrico", sem fonte | Manual Komeco (tubo a vácuo, baixa pressão); manual Celesc (2009) |

A reportagem do Olhar Digital saiu das Referências, porque o documento pedia para trocá-la pela fonte primária e o dado de 55 °C não foi confirmado.

### `solar-fotovoltaica.html`

| Trecho | Antes | Agora | Fonte |
|---|---|---|---|
| Área do painel | "2 a 2,5 m²" + selo | "2 a 2,6 m²" (decisão da equipe) | Ficha Intelbras, já citada |
| Sistema on-grid | "não foram verificadas nesta pesquisa" + selo | Microgeração até 75 kW, formulário-padrão na distribuidora, compensação de energia | Lei 14.300/2022, art. 1º, XI e XIV, e art. 2º, § 3º |

## Fontes conferidas e descartadas

- **Torres de 12 a 30 m (eólica residencial):** não achei fonte. Quando fui corrigir, a página já tinha o texto novo da equipe, sem essa frase.
- **"Golpe de aríete é ruidoso":** nenhuma das fontes confirmou. A frase saiu.
- **REN 673/2015:** foi consolidada na REN 875/2020, que está em vigor com as mudanças da REN 1.070/2023. O site da ANEEL bloqueia o acesso automático. Por isso, o texto da REN 1.070/2023 foi lido numa cópia (lex.com.br), e a referência não traz link da ANEEL.

## O que foi aceito

- As 4 páginas ficaram com as fontes novas e sem selos: `2 a 2,6 m²` e Lei 14.300/2022 (solar fotovoltaica), Portaria Inmetro 633/2026 (solar térmica), Lei 12.334/2010 (hidráulica – funcionamento) e BEN 2026 (hidráulica – impactos). Nenhuma das 4 tem mais `class="pendencia"`.
- Enviado nos commits `71b3252` e `846e180` (Gustavo) e `3db2bbb` (Fabricio).

_Conferido pela IA em 16/11/2026, à noite: a mudança está no código atual e na versão enviada ao GitHub._

## O que foi corrigido pela equipe

- A equipe decidiu trazer para a página 4 o conteúdo que mandava o leitor para a "página 3", em vez de mexer na página 3.
- A equipe mudou a área do painel de "2 a 2,5 m²" para "2 a 2,6 m²", para bater com o exemplo da Intelbras.

## Pendências

- Os autores do material da USP continuam desconhecidos (o arquivo exige login). A referência segue o padrão ABNT para obra sem autor.
- **Belo Monte** é um caso em andamento. O texto traz a situação até abril de 2026. Vale conferir antes da apresentação.
- **Frases retiradas por falta de fonte:** "o golpe de aríete é ruidoso" (carneiro hidráulico) e "ou regule o apoio elétrico" (solar térmica). Se a equipe preferir, elas podem voltar escondidas no modo `?revisao`.
- **Remissões numeradas:** a seção 7 da Solar Térmica diz "veja a seção de orientação na página 2", e a própria Solar Térmica é a página 2. O conteúdo existe (seção "Onde funciona"), mas o leitor não sabe que "página 2" é esta página. O mesmo vale para "página 3" e "página 4" nos textos de comparação. Isso não é pendência e não foi mudado.

## Divisão com a outra sessão

Outra sessão do Claude Code trabalhava no projeto ao mesmo tempo (texto novo da eólica e Fase 5 do CSS). As duas combinaram quem mexe em cada arquivo:

- **Com esta mudança:** as 4 páginas acima, `noticias.html` (só os comentários "Fase 3" viraram comentários simples), `docs/referencias.md` (seções de solar e hidráulica, resumo e total) e este log.
- **Com a outra sessão:** `eolica-residencial.html` e `eolica-grandes-parques.html` (o texto novo da equipe já não tem a frase das torres de 12 a 30 m nem selos), `index.html` (selo do crédito da imagem) e a seção "Eólica Residencial" do `docs/referencias.md`.
- **Mantidos de propósito:** o modo `?revisao` (bloco 5 do `js/script.js` e regras `.pendencia`, `.so-revisao` e `.modo-revisao` do `css/style.css`). O prompt da equipe manda, na Fase 8: "Não apague e não mude o modo revisão". O modo não aparece para o público, e as 4 páginas desta mudança já não o usam.
- Os comentários de "Fase" no `css/style.css` também ficaram, porque o CSS estava sendo reescrito na Fase 5.

## Como testar

1. Abra as 4 páginas pelo Live Server.
2. Procure na tela por "Pendente", "não verificado" e "página 3". Não deve aparecer nada disso, exceto o link "página 3" da seção 7 da página 4, que leva à seção 7 da página 3, que existe.
3. Abra `hidraulica-impactos.html?revisao`. Além do aviso do próprio modo revisão, nenhum trecho novo deve aparecer, porque a página não tem mais conteúdo escondido.
4. Confira os links novos nas seções de Referências.

## Conferência feita pela IA

- As tags `section`, `div`, `p`, `ul`, `ol`, `li`, `a`, `span`, `strong`, `em`, `h2` e `h3` estão equilibradas nas 4 páginas.
- Nenhuma das 4 páginas tem mais `class="pendencia"`, `so-revisao`, "Nota para a IA" ou comentário de "Fase".

## Backup

- `_backup-2026-11-16/antes-pendencias/`: todas as páginas, `css/style.css`, `js/script.js` e `docs/referencias.md` de antes desta mudança.
