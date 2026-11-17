# Evidências de testes

Este documento junta os testes do site TERS para a 2ª entrega. Cada seção diz **quem testou**, **quando** e **o resultado**.

- **Testes automáticos:** feitos pela IA (Claude Code) em 16/11/2026, numa cópia do site aberta num servidor local e no navegador Edge sem janela. Os scripts ficaram fora do projeto.
- **Testes manuais:** a equipe faz e preenche as tabelas marcadas com ⚠️.

## 1. W3C Validator (HTML)

| Data | Páginas | Erros | Avisos | Quem |
|---|---|---|---|---|
| 16/11/2026, 19:48 | As 10 páginas de conteúdo | 0 | 0 | IA, com autorização da equipe (log da [Fase 9](logs-de-mudanca/2026-11-16-fase-9-testes-finais.md)) |
| 16/11/2026, à noite | As 11 páginas, depois dos ajustes finais (menu lateral, rodapé e `orcamento_hospedagem.html`) | 0 | 0 | IA, com autorização da equipe ("Pode validar no W3C") |

> **Como foi feito:** cada arquivo foi enviado ao Nu Html Checker (<https://validator.w3.org/nu/>), um de cada vez. Se alguma página mudar de novo, valide outra vez em <https://validator.w3.org/#validate_by_upload>.

## 2. Links e estrutura (script de conferência)

16/11/2026, nas 11 páginas, conferindo maiúsculas e minúsculas como faz o servidor do GitHub Pages:

| Item | Resultado |
|---|---|
| Links internos e âncoras quebrados | **0** |
| `lang="pt-BR"` e `<meta charset="UTF-8">` | 11 de 11 |
| Um só `<h1>` e títulos sem pular nível | 11 de 11 |
| `header`, `nav` com `aria-label`, `main id="conteudo"` e `footer` | 11 de 11 |
| Primeiro link da página = "Pular para o conteúdo" | 11 de 11 |
| Imagens sem `alt` | 0 (7 imagens) |
| `iframe` sem `title` | 0 (5 vídeos) |
| `onclick` e outros `on*` no HTML | 0 |
| `tabindex` positivo | 0 |

**Problema achado e corrigido:** as páginas pediam `css/style.css`, mas o arquivo se chamava `css/style.CSS`. No Windows funcionava. No GitHub Pages, `css/style.css` respondia **404** e o site abria sem estilo. O arquivo foi renomeado para `style.css`.

## 3. JavaScript e teclado (navegador)

16/11/2026, Edge sem janela, servidor local. **Todos passaram.**

| Teste | Resultado |
|---|---|
| Formulário vazio: a página não recarrega (`preventDefault`) | Passou |
| Formulário vazio: 4 campos com `aria-invalid="true"` e classe `invalido` | Passou |
| Formulário vazio: resumo "Corrija 4 campos antes de enviar." | Passou |
| Formulário vazio: foco vai para o 1º campo com erro (Nome) | Passou |
| Mensagem de erro ao lado do campo ("Preencha este campo.") | Passou |
| Borda vermelha em todos os campos com erro, inclusive o que está com foco | Passou (corrigido em 16/11; antes, o campo com foco ficava com borda verde) |
| E-mail inválido (`maria@`) é barrado | Passou |
| Rascunho salvo em `ters-rascunho-contato` | Passou |
| Recarregar a página: os dados voltam e aparece "Recuperamos o que você tinha digitado antes." | Passou |
| Envio correto: mostra o diagnóstico, leva o foco ao resultado, limpa o formulário e apaga o rascunho | Passou |
| Alto contraste: liga, `aria-pressed="true"`, grava `ters-alto-contraste` e continua em outra página | Passou |
| Filtro de notícias "Eólica": 6 cards e "Mostrando 6 informações." | Passou |
| Calculadora: 10 L/s, 5 m e eficiência padrão = 245 W | Passou |
| 1º Tab da página = "Pular para o conteúdo" | Passou |
| Enter no ☰ abre o menu e leva o foco ao ✕ | Passou |
| Tab dentro do menu aberto dá a volta (não sai do menu) | Passou |
| Esc fecha o menu e devolve o foco ao ☰ | Passou |
| Foco visível: contorno sólido de 3 px | Passou |
| As 11 páginas carregam `css/style.css` e o menu tem "Quem somos" | Passou |
| Erros no console | Nenhum |

### ⚠️ Teste manual de teclado (equipe)

Navegue só com Tab, Shift+Tab, Enter e Esc. Marque ✅ ou ❌.

| Página | Foco sempre visível | Menu ☰ abre e fecha | Chega a todos os links | Quem / data |
|---|---|---|---|---|
| index.html | | | | |
| contato.html (enviar com erro e corrigir) | | | | |
| noticias.html (filtros e vídeos) | | | | |
| hidraulica-funcionamento.html (calculadora) | | | | |
| As outras 7 páginas | | | | |

## 4. Contraste (WCAG AA)

16/11/2026, calculado pela fórmula da WCAG. AA pede 4,5:1 para texto normal e 3:1 para contorno de foco.

| Par de cores | Contraste | Resultado |
|---|---|---|
| Texto do corpo `#404E45` sobre branco | 8,77:1 | AA |
| Texto do card `#68756C` sobre fundo do card `#F7FAF7` (o pior caso) | 4,59:1 | AA |
| Botão: branco sobre verde `#286C45` | 6,32:1 | AA |
| Mensagem de erro `#B3261E` sobre branco | 6,54:1 | AA |
| Rodapé: branco sobre `#4B5E70` | 6,70:1 | AA |
| Menu lateral: `#D5E0D9` sobre `#1E2B24` | 10,86:1 | AAA |
| Contorno de foco `#B77A20` sobre branco | 3,61:1 | AA (contorno) |
| Alto contraste: branco sobre preto | 21:1 | AAA |

## 5. ⚠️ Lighthouse (equipe)

Chrome ou Edge → F12 → aba **Lighthouse** → marque **Acessibilidade** → **Analisar**. Rode pelo site publicado.

| Página | Celular | Computador | Com alto contraste | Quem / data |
|---|---|---|---|---|
| index.html | | | | |
| contato.html | | | | |
| noticias.html | | | | |
| hidraulica-funcionamento.html | | | | |

Meta do escopo: **90 ou mais**.

## 6. Site publicado (GitHub Pages)

| Data | O que foi testado | Resultado |
|---|---|---|
| 16/11/2026 | As 10 páginas pelo endereço do GitHub Pages | 200 (abrem) com HTTPS |
| 16/11/2026 | `css/style.css` pelo GitHub Pages | **404**: o site aparecia sem estilo. Corrigido no projeto; vale depois do envio para a `main` |
| 16/11/2026 | Endereço antigo do Railway | 404 "Application not found" (fora do ar) |
| ⚠️ (preencher) | Depois do envio: as 11 páginas com estilo, no computador e no celular | |
