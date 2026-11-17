# 2026-11-16: Formas caseiras da eólica e aviso da imagem da home

- **Data:** 2026-11-16
- **Responsável pela revisão:** Thiago Roberto de Oliveira
- **Feito com IA?** Sim (Claude Code)

## Pedidos / prompts usados

1. Com um print do selo "Pendente: confirmar com a distribuidora local":
   > Ainda tem, quero que arrume essa informações elas não devem permanecer no site.
2. Durante o trabalho:
   > Quero que você adicione uma forma caseira parecida no que tem nas outras energias para a Eólica também.

Decisões pedidas ao usuário no pedido 1:

- **Trecho sem fonte confiável:** "Esconder (modo revisão)". O trecho fica no código com `.so-revisao` e só aparece com `?revisao` no endereço.
- **Frases que mandam para uma "página 2" ou "página 3" que não existe:** corrigir também.

## Duas sessões no mesmo pedido

Outra sessão do Claude Code estava resolvendo as mesmas pendências ao mesmo tempo. As duas combinaram a divisão de arquivos por mensagem:

- **Outra sessão:** `hidraulica-funcionamento.html`, `hidraulica-impactos.html`, `solar-fotovoltaica.html`, `solar-termica.html`, as seções delas em `docs/referencias.md` e o log [2026-11-16-pendencias-conteudo.md](2026-11-16-pendencias-conteudo.md).
- **Esta sessão:** `eolica-residencial.html`, `eolica-grandes-parques.html`, `index.html`, a seção "Eólica Residencial" de `docs/referencias.md` e este log.

Nenhuma edição desta sessão nas 4 páginas da outra foi aplicada. A ferramenta recusou todas, porque os arquivos tinham mudado. A pesquisa feita aqui (Lei 9.433, Lei 12.334, ANEEL, Agência iNFRA, Celesc, Sociedade do Sol, Sousa 2017) chegou às mesmas fontes que a outra sessão usou. O modo revisão (bloco do `js/script.js` e regras do `css/style.css`) ficou intacto, como pede a Fase 8 do prompt da equipe.

## O que mudou

| Arquivo | O que foi alterado |
|---|---|
| `index.html` | O selo "Pendente: autor, ano e licença da imagem" ganhou a classe `so-revisao`. Ele sumiu para o público e só aparece com `?revisao`. O crédito "Imagem: Canal Bioenergia" continua visível. |
| `eolica-residencial.html` | Seção nova "No sítio ou na fazenda: formas caseiras de usar o vento" (`id="no-sitio"`), antes das Referências. A seção Referências passou a ter fundo branco, para manter a alternância. Entraram 2 referências novas. |
| `eolica-grandes-parques.html` | Só um comentário: saiu "criada na Fase 3". |
| `docs/referencias.md` | Seção "Eólica Residencial" com 3 referências, linha do resumo, Total 114 e linha do `index.html` em "Outras páginas". |

## A seção nova, em resumo

Segue o modelo da seção 7 das páginas Solar Térmica (aquecedor solar de baixo custo) e Hidráulica – Funcionamento (carneiro hidráulico): o que é, como foi feito, testes, limites e uma caixa de riscos.

| Parte | Fonte | O que a fonte diz |
|---|---|---|
| A) Cata-vento com bomba de corda | Dums e Pykosz, INOVA 2016 (UDESC) | 8 pás de tiras de cano de PVC de 100 mm num disco de náilon de 27,5 cm. Roda de bicicleta aro 20 e engrenagens de bicicleta. Bombeou 20,01 L em 3 h 12 min e 49,24 L em 2 h 19 min (46 e 125 rpm). A água era de chuva, para usos que não são de beber. "Se o vento parar [...] a bomba de corda também irá parar" |
| B) Gerador de baixo custo | Moori, Fortes e Molon, CONEM 2010 (autores da Poli-USP) | 4 pás de cano de esgoto de PVC de 150 mm × 0,8 m. Motor de corrente contínua com caixa de redução. Projeto de 100 W. Custo menor que US$ 100, contra US$ 400 de um comercial. "Projeto preliminar", sem instrumentação para medir a eficiência |
| Riscos | Departamento de Energia dos EUA, 2007 (já citado na página) | Telhado não recomendado (vibração, ruído, turbulência). Torres basculantes facilitam a manutenção de turbinas de até 5 kW e descem em temporais. Torres de alumínio trincam. Proteção contra excesso de velocidade. Baterias longe dos cômodos. Manutenção anual de parafusos, corrosão e estais |

**Fontes descartadas:**

- um documento da Embrapa Semiárido (INT93), que é sobre captação de água de chuva, e não sobre cata-vento;
- um pôster da Unicamp, cujo link devolveu uma página HTML, e não o PDF;
- um TCC da Unipampa, que é sobre turbina de eixo vertical tipo H, mais distante de uma "forma caseira".

## O que foi aceito

- A seção "No sítio ou na fazenda: formas caseiras de usar o vento" (`id="no-sitio"`) e as referências DUMS e MOORI continuam em `eolica-residencial.html` (commit `8873c4e`, João Vitor).

_Conferido pela IA em 16/11/2026, à noite: a mudança está no código atual e na versão enviada ao GitHub._

## O que foi corrigido pela equipe

- **Imagem da home:** em 16/11/2026, à noite, a foto do Canal Bioenergia foi trocada pela foto do Parque Eólico Cutia (Copel, 2019, CC0), que já estava em `img/noticias/`. Era a opção sugerida na tabela abaixo (veja `2026-11-16-ajustes-entrega-final.md`).

## Para a equipe decidir

| Item | O que decidir |
|---|---|
| Texto da seção de formas caseiras | A seção foi escrita pela IA, com base nas fontes. A regra de autoria (`content-rules.md`) pede texto com palavras da equipe: revise e ajuste a redação. |
| Imagem da home | O aviso está escondido, mas a foto continua sem autor, ano e licença. Sem licença, ela pode ser protegida. Há duas saídas: pedir a licença ao Canal Bioenergia ou trocar por uma foto de licença livre. A busca no Wikimedia Commons não achou foto parecida (campo de painéis com turbinas ao fundo). Uma opção já usada no site é a foto do Parque Eólico Cutia (Copel, 2019, CC0), em `img/noticias/`. |
| Itens do log [2026-11-16-texto-novo-eolica.md](2026-11-16-texto-novo-eolica.md) | Continuam abertos: o catálogo WEG, os 2 cards de notícias que apontam para assuntos que saíram, "Kyoto" ou "Quioto" e os termos técnicos. |

## Como testar

1. Abra `eolica-residencial.html` e confira a seção "No sítio ou na fazenda: formas caseiras de usar o vento" e as 3 referências.
2. Clique nos links "aquecedor solar de baixo custo", "carneiro hidráulico" e "energia solar fotovoltaica". Cada um deve abrir a seção "No sítio" da outra página.
3. Abra `index.html`: o selo "Pendente" não deve aparecer. Abra `index.html?revisao`: ele aparece com contorno vermelho.

## Backup

- `_backup-2026-11-16/antes-remover-pendencias/`: `index.html`, as 4 páginas de solar e hidráulica (versão de antes das duas sessões) e `docs/referencias.md`.
- Não foi feita cópia de `eolica-residencial.html` logo antes da seção nova. Para voltar atrás, apague o bloco entre os comentários "===== 5. NO SÍTIO OU NA FAZENDA" e "===== REFERÊNCIAS", e devolva à seção Referências a classe `secao` sem `secao-branca`. Tire também as referências DUMS e MOORI. A versão de antes do texto novo da equipe está em `_backup-2026-11-16/antes-texto-novo-eolica/`.
