# 2026-11-16: Texto novo da equipe nas páginas de eólica

- **Data:** 2026-11-16
- **Responsável pela revisão:** Thiago Roberto de Oliveira
- **Feito com IA?** Sim (Claude Code)

## Pedido / prompt usado

> Substitua os textos das páginas correspondentes por essa nova e siga as Rules.

Junto com o pedido, a equipe mandou dois textos:

1. "Energia Eólica Residencial: energia limpa para sua casa", para `eolica-residencial.html`.
2. "Grandes Parques Eólicos: energia para milhares de pessoas", para `eolica-grandes-parques.html`.

## O que mudou

| Arquivo | O que foi alterado |
|---|---|
| `eolica-residencial.html` | Todo o conteúdo de `<main>` foi trocado pelo texto novo, desde o título até antes da chamada final. O título virou o `h1`, e o primeiro parágrafo ficou no topo da página, como na página Hidráulica – Impactos. Depois vêm 4 seções: "Como funciona?", "Quais são as vantagens?", "O que é necessário para instalar?" e "Energia eólica vale a pena?". A meta description foi reescrita para descrever o conteúdo novo. |
| `eolica-grandes-parques.html` | O mesmo, com 5 seções: "Como funcionam os parques eólicos?", "Quais são os benefícios?", "O que é o Mecanismo de Desenvolvimento Limpo (MDL)?", "Quais são os desafios?" e "O futuro da energia eólica". A seção "Referências" ganhou a fonte do Ipea (2023) para o trecho do MDL. A meta description também foi reescrita. |
| `docs/referencias.md` | Resumo (91 referências), seções das duas páginas de eólica e a tabela "Outras páginas". |
| `docs/logs-de-mudanca/readme.md` | Nova linha no índice. |

Não mudaram: cabeçalho, menus, trilha, chamada final ("Ficou com dúvida sobre o seu terreno?"), navegação entre páginas, rodapé, `<title>`, CSS e JS. Nenhuma classe nova foi criada. O texto usa as classes que já existiam: `.secao`, `.secao-branca`, `.texto-coluna`, `.lista`, `.referencias` e `.lista-referencias`.

## Como as regras foram seguidas

| Regra | O que foi feito |
|---|---|
| `content-rules.md`, Autoria | O texto da equipe foi copiado sem mudanças. Um script comparou, bloco por bloco, o texto da página com o texto enviado: 15 blocos na residencial e 20 nos parques, todos iguais. |
| `content-rules.md`, Fontes | O trecho do MDL usa uma ideia de terceiros, por isso ganhou fonte: Texto para Discussão 2877 do Ipea (2023). Ele foi conferido no PDF aberto pelo DOI e na Crossref. O texto novo não tem números, então nenhum dado numérico ficou sem fonte. |
| `content-rules.md` e `ai-usage-rules.md`, Não retirar fontes | As referências que já existiam (DOE, 2007, e WEG, 2026) foram mantidas. O DOE apoia a seção sobre obstáculos e vento. O WEG ficou sem trecho para apoiar (veja as pendências). |
| `accessibility-rules.md` | Um só `h1` por página e títulos em ordem (`h1` e depois `h2`). O link "Pular para o conteúdo", `<main id="conteudo">` e os `nav` com `aria-label` continuam iguais. |
| `layout-rules.md` | Só o conteúdo de `<main>` mudou. A alternância de fundo das seções (cinza e branco) foi mantida. |
| `general-rules.md` e `ai-usage-rules.md`, Comentários | Cada seção nova tem um comentário curto dizendo de onde veio o texto e por que a fonte está ali. |

## Fontes que não puderam ser usadas

- **Planalto** (Decreto nº 5.445/2005, que publica o Protocolo de Quioto no Brasil): o site não respondeu, e a conexão esgotou o tempo.
- **UNFCCC** (texto do Protocolo e página do MDL): o site bloqueia acesso automático. O bloqueio não foi contornado.
- **MCTI** ("Legado do MDL"): o link encontrado na busca dá erro 404.

## O que foi aceito

- O texto da equipe está nas duas páginas, com a fonte do Ipea (2023) no trecho do MDL. Enviado nos commits `8873c4e` e `5fbd8c1` (João Vitor).

_Conferido pela IA em 16/11/2026, à noite: a mudança está no código atual e na versão enviada ao GitHub._

## O que foi corrigido pela equipe

- Nada registrado. As decisões da tabela abaixo continuam abertas: o catálogo WEG ainda está nas Referências, e os cards "Sistema híbrido" e "Parques eólicos e arrendamento de terras" ainda levam a páginas que não falam desses assuntos.

## Pendências

| Página | Trecho | O que falta | Quem decide |
|---|---|---|---|
| `eolica-grandes-parques.html` | Referência do catálogo WEG (2026) | Ela era a fonte dos números do texto antigo (cubo a 134 m e turbinas de 6,6 a 7 MW), que saíram da página. Decidir se a referência continua. | Equipe |
| `noticias.html` | Card "Sistema híbrido: vento e sol juntos" | O link "Saiba mais →" leva à página residencial, que não fala mais em sistema híbrido (antes era a seção "Solar ou eólica?"). Trocar o link, mudar o card ou trazer o assunto de volta. | Equipe |
| `noticias.html` | Card "Parques eólicos e arrendamento de terras" | O link "Saiba mais →" leva à página de parques, que não fala mais em arrendamento (antes era a seção "E para quem tem terra?"). Mesma decisão do item acima. | Equipe |
| `eolica-grandes-parques.html` | "Protocolo de Kyoto" | O texto foi mantido como veio. Em português, as duas formas são usadas, mas a forma aportuguesada é "Quioto". Ela aparece no texto antigo e na fonte do Ipea. Escolher uma forma para o site. | Equipe |
| As duas páginas | "rotor", "tensão", "créditos de carbono", "transição energética" | A regra de tom de voz pede para explicar termos técnicos para leigos. Como na Fase 2, a explicação precisa ser aprovada pela equipe antes de entrar no texto. | Equipe |
| As duas páginas | Trechos práticos do texto antigo | Saíram com a troca: o aviso "Meça antes de comprar", os passos da montagem e o alerta sobre turbina no telhado (residencial). Na página de parques, saíram a tabela "Pequeno gerador ou grande parque?" e o alerta sobre contratos de arrendamento. Estão no backup, se a equipe quiser algum de volta. | Equipe |

**Pendência encerrada:** a faixa de torres "de 12 a 30 metros", sem fonte desde a Fase 3 (veja [2026-11-16-fase-3b-numeros-imagem-home.md](2026-11-16-fase-3b-numeros-imagem-home.md)), não está no texto novo. Por isso, deixou de ser pendência.

## Como testar

1. Abra `eolica-residencial.html` e `eolica-grandes-parques.html` pelo Live Server do VS Code.
2. Compare o texto de cada seção com o texto enviado pela equipe.
3. Confira a seção "Referências" no fim de cada página e abra os links.
4. Navegue só com Tab e Enter: o link "Pular para o conteúdo" deve levar ao título da página.
5. Teste em tela de celular (DevTools, 360 px) e de computador.

## Conferência feita pela IA

- Texto idêntico ao enviado, conferido por script (15 e 20 blocos).
- Um `h1` por página. Títulos: `h1` e depois só `h2`.
- As tags `section`, `div`, `p`, `ul`, `li`, `a`, `nav`, `strong` e `span` estão equilibradas: cada uma abre e fecha.
- Diferença com o backup: fora de `<main>`, só a meta description mudou.
- Capturas de tela em 1280 px mostram as seções na ordem certa e o fundo alternado. A captura em 360 px feita sem janela corta a lateral direita. A versão antiga da página mostra o mesmo corte, então é uma limitação da captura, e não da página. Mesmo assim, vale conferir no DevTools (passo 5).

## Backup

- `_backup-2026-11-16/antes-texto-novo-eolica/`: `eolica-residencial.html`, `eolica-grandes-parques.html`, `docs/referencias.md` e `docs/logs-de-mudanca/readme.md` de antes desta mudança.
