# 2026-11-16: Fase 8, modo revisão (só documentação)

- **Data:** 2026-11-16
- **Responsável pela revisão:** (preencher)
- **Feito com IA?** Sim (Claude Code)

## Pedido / prompt usado

O prompt [docs/prompts/prompt-aplicar-correcoes-regras.md](../prompts/prompt-aplicar-correcoes-regras.md), Fase 8 (item 14 da auditoria). Esta fase só documenta o modo revisão: **nenhum arquivo do site foi alterado**.

## Como o modo revisão funciona (para explicar na apresentação)

1. **Quem esconde:** um trecho marcado com a classe `so-revisao` fica escondido para o público. A regra é `body:not(.modo-revisao) .so-revisao { display: none !important; }`, no fim de `css/style.css` (seção 18).
2. **Como ligar:** colocando `?revisao` no fim do endereço, por exemplo `index.html?revisao`. Aí o bloco 5 do `js/main.js` acrescenta a classe `modo-revisao` ao `<body>`.
3. **O que aparece:** com essa classe, os trechos escondidos aparecem com contorno vermelho tracejado, e uma faixa no rodapé avisa que a página está em modo revisão (`body.modo-revisao::after`).

Ele serve para a equipe deixar no código um aviso ou um dado sem fonte, que o público não vê, mas quem edita consegue ver.

## Situação atual (16/11/2026, depois das outras sessões)

- **Páginas solar e hidráulica:** o modo revisão não é mais usado. A sessão das pendências resolveu com fonte as 22 pendências e tirou o conteúdo escondido e os selos (veja `2026-11-16-pendencias-conteudo.md`).
- **Uso que sobrou:** só **1**, em `index.html`. O selo "Pendente: autor, ano e licença da imagem" do banner ganhou `so-revisao` e só aparece com `?revisao` (veja `2026-11-16-forma-caseira-eolica.md`). Esse log também cita um trecho da eólica "Esconder (modo revisão)". Na conferência desta fase não foi encontrado `so-revisao` nas páginas de eólica.
- **Código do modo:** continua no site (bloco 5 do JS e regras `.so-revisao` e `.modo-revisao` do CSS), e o teste da Fase 6 confirmou que ele funciona.

## Pontos para a equipe decidir

1. **Manter o modo como está.** É útil enquanto houver dado sem fonte.
2. **Mostrar o aviso da imagem da home para todos**, tirando a `so-revisao` e deixando o selo `.pendencia` visível. Isso segue a regra de deixar pendências visíveis, mas mostra um aviso ao público.
3. **Retirar o modo.** Para isso:
   - apagar o bloco 5 do `js/main.js`;
   - apagar as regras `.so-revisao` e `.modo-revisao` do CSS;
   - resolver ou retirar o selo da home.

   Faz sentido quando não houver mais nada escondido.

**Recomendação da IA:** opção 3, assim que a imagem da home for trocada por uma foto de licença livre ou ganhar o crédito completo. Assim o site fica só com o que foi pedido nas regras.

## O que foi aceito

- Esta documentação foi enviada ao GitHub no commit `7cf668f` (Fabricio).
- O código do modo revisão continua no site (bloco 5 do `js/main.js` e regras `.so-revisao` e `.modo-revisao` do CSS).

## O que mudou depois

- Em 16/11/2026, à noite, a foto da home foi trocada por uma foto CC0, e o selo "Pendente" que usava `so-revisao` saiu do `index.html`. **Agora nenhuma página usa o modo revisão.** Isso cumpre a condição da opção 3 (veja `2026-11-16-ajustes-entrega-final.md`).

## Pendências

- A equipe escolhe uma das 3 opções.
