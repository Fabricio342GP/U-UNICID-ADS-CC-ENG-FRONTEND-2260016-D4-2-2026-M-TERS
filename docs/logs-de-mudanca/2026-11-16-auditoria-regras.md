# 2026-11-16: Auditoria das regras e prompt de correções

- **Data:** 2026-11-16
- **Responsável pela revisão:** (preencher)
- **Feito com IA?** Sim (Claude Code)

## Pedidos / prompts usados

1. "Verifique se o site obedece todas as rules de nosso site e mostre os que falta."
2. "Quero que você crie um prompt para aplicar todas essas informações e crie uma pasta para os logs de mudança, mas não faça ainda a parte do github."

## O que mudou

| Arquivo | O que foi alterado |
|---|---|
| `docs/prompts/prompt-aplicar-correcoes-regras.md` | Novo. Prompt em 9 fases para corrigir os itens da auditoria, menos Git e GitHub. |
| `docs/logs-de-mudanca/` | Nova pasta: `README.md`, `MODELO.md` e os 2 primeiros logs. |

Nenhum HTML, CSS ou JS foi alterado neste dia.

## Resultado da auditoria

**Já obedece às regras:**
- HTML semântico, `lang` e UTF-8, um `<h1>` por página, títulos em ordem.
- Link "Pular para o conteúdo", `nav` com `aria-label`, `label` nos campos.
- Contraste AA nos 24 pares testados, foco visível, `prefers-reduced-motion`.
- Regras de JS cumpridas; nomes de arquivo em minúsculas.

**Falta (16 itens):**
1. Botão de alto contraste.
2. Rodar o W3C Validator e o Lighthouse.
3. Números sem fonte nem ano:
   - eólica residencial: 4 a 5 m/s, 9 m e de 12 a 30 m;
   - eólica de grandes parques: torres acima de 100 m;
   - solar fotovoltaica: de 2 a 2,5 m² por painel.
4. Os 9 cards de notícias não têm fonte externa nem dizem que são texto da equipe.
5. A imagem da home (canalbioenergia.com.br) não tem crédito.
6. Falta a pasta `/docs` com a lista de referências.
7. Erros de digitação vindos do documento: "o conteém" e "Rio Ijaí" (o certo é Ijuí).
8. Termos técnicos sem explicação: altura manométrica, recalque, AFPE, GFCI e TVR.
9. O CSS não é Mobile First (usa `max-width`).
10. 63 cores em hexadecimal fora do `:root`; não há variáveis de fonte nem de espaçamento.
11. Classes novas que repetem classes antigas:
    - `.comparacao-texto` repete `.texto-coluna`;
    - `.subtitulo` repete `.secao h3`;
    - `.caixa-risco` é parecida com `.caixa-atencao`.
12. O script se chama `js/script.js`, mas a regra pede `js/main.js`.
13. Falta o diário de bordo. **A pasta `docs/logs-de-mudanca/` resolve este item.**
14. O modo revisão (`?revisao`) vai além do pedido. A equipe precisa entendê-lo ou retirá-lo.
15. O projeto não é um repositório Git. **Fica para depois.**
16. A pasta `_backup-2026-11-15/` não deve ir para o GitHub. **Fica para depois.**

## O que foi aceito

- Criar o prompt e a pasta de logs.
- Deixar a parte de Git e GitHub (itens 15 e 16) para depois.

## O que foi corrigido pela equipe

- (preencher após a revisão)

## Pendências

- Aplicar o prompt fase por fase e criar um log para cada fase.
- Os itens 3, 4 e 5 dependem de pesquisa de fontes pela equipe.
- O item 14 depende de uma decisão da equipe.

## Como testar

1. Abra `docs/prompts/prompt-aplicar-correcoes-regras.md` e confira se os 16 itens estão na tabela do final.
2. Confira se esta pasta tem `README.md`, `MODELO.md` e os 2 logs.
