# Diretrizes para Assistente de IA - Projeto Front-End TERS

## Regras de Padrão do Layout (Baseadas no index.html)

1. **Reutilização da Estrutura Base**:
   - Toda nova página DEVE manter a estrutura externa do `index.html` (`<header>`, `<nav>` e `<footer>`) e seguir os requisitos estruturais de acessibilidade definidos em `accessibility-rules.md`.
   - Inserir o conteúdo exclusivo da nova página apenas dentro de `<main>`.

2. **Aproveitamento de Estilos Existentes**:
   - Reutilizar as classes do CSS global (pasta `/css`) para títulos, botões, containers e cards.
   - Não criar novas classes CSS se já existir uma classe correspondente usada na página principal.

3. **Hierarquia Visual**:
   - Manter a mesma tipografia, tamanhos de fonte e paleta de cores utilizados na página inicial.
   - Seguir o mesmo padrão de espaçamento interno (padding) e externo (margin) entre as seções.