# 2026-11-16: Fase 6, nome do script (`main.js`)

- **Data:** 2026-11-16
- **Responsável pela revisão:** (preencher)
- **Feito com IA?** Sim (Claude Code)

## Pedido / prompt usado

O prompt [docs/prompts/prompt-aplicar-correcoes-regras.md](../prompts/prompt-aplicar-correcoes-regras.md), Fase 6 (item 12 da auditoria).

A equipe pediu: "Espere as outras sessões e prossiga nessa." Esta fase mexe em todas as páginas HTML, e havia outras duas sessões editando o projeto. Por isso a IA esperou até:
- as duas sessões ficarem paradas;
- o projeto ficar 4 minutos sem nenhuma alteração (às 18:40).

A regra `.github/javascript-rules.md` pede: "Carregar os scripts com `<script src="js/main.js" defer></script>`."

## O que mudou

| Arquivo | O que foi alterado |
|---|---|
| `js/script.js` → `js/main.js` | Arquivo renomeado. O código não mudou. Só o comentário do topo ganhou 3 linhas explicando a troca de nome. |
| As 10 páginas HTML | `<script src="js/script.js" defer></script>` → `<script src="js/main.js" defer></script>`, uma linha por página. |
| `noticias.html` | Um comentário que citava "js/script.js" passou a dizer "js/main.js". |

- Nenhuma página do site cita mais `script.js`.
- Os logs antigos e o prompt continuam citando `script.js`, porque registram o que era verdade quando foram escritos.
- A sintaxe do `main.js` foi conferida com `node --check`.

## Como foi testado

Uma página de teste (na pasta temporária da IA) abriu o site num servidor local e conferiu 38 itens:

- `js/main.js` responde e `js/script.js` não existe mais (404);
- nas 10 páginas, a tag é `<script src="js/main.js" defer>`;
- nas 10 páginas, o **menu lateral abre e fecha** (isso prova que o `main.js` carregou e rodou);
- **Notícias:** o filtro "Eólica" mostra só os 6 cards de eólica, e "Todas" volta a mostrar tudo;
- **Hidráulica – Funcionamento:** a calculadora mostra a potência (teste: 245 W);
- **Contato:** o formulário vazio marca 4 campos com erro (`aria-invalid`) e leva o foco ao primeiro;
- **Modo revisão:** `solar-termica.html?revisao` liga a classe `modo-revisao`.

**Resultado:** 38 de 38 itens passaram.

Para conferir o próprio teste, ele foi rodado antes numa cópia do site ainda com `script.js`. Falharam só os 12 itens esperados (os 2 dos arquivos e as 10 tags), e todas as funções passaram.

O script de regras não acusa mais nenhum aviso em nenhuma página. Antes, o aviso "script não é js/main.js" aparecia em todas.

## O que foi aceito

- (preencher após a revisão)

## O que foi corrigido

- Nada.

## Pendências

- Quem tiver o site aberto no navegador deve recarregar com Ctrl+F5, para o navegador não procurar o `script.js` antigo na memória.
- Avisar quem estiver trabalhando em outras sessões: o arquivo agora é `js/main.js`.

## Como testar

1. Abra o site pelo Live Server e recarregue com Ctrl+F5.
2. Teste o menu ☰ em algumas páginas, o filtro de Notícias, a calculadora e o formulário de Contato.
3. No navegador, abra as ferramentas (F12), aba Console: não pode aparecer erro "404 script.js".

## Backup

- `_backup-2026-11-16/antes-fase-6/`: as 10 páginas HTML e `js/script.js` de antes desta fase.
