# Diretrizes para Assistente de IA - Projeto Front-End TERS

## Contexto do Projeto
- **Projeto**: TERS (Transição Energética Renovável Sustentável)
- **Equipe**: Eco Inovação
- **Disciplina**: Desenvolvimento FRONT-END para WEB
- **Tecnologias**: HTML5, CSS3, JavaScript (sem frameworks complexos)

## Regras de Padrão do Layout (Baseadas no index.html)

1. **Reutilização da Estrutura Base**:
   - Toda nova página DEVE copiar rigorosamente a estrutura externa do `index.html`: mesmo `<header>`, `<nav>` e `<footer>`.
   - O conteúdo exclusivo da nova página deve ser inserido apenas dentro da tag `<main>`.

2. **Aproveitamento de Estilos Existentes**:
   - Reutilizar as classes do CSS global (pasta `/css`) para títulos, botões, containers e cards.
   - Não criar novas classes CSS se já existir uma classe correspondente usada na página principal.

3. **Hierarquia Visual**:
   - Manter a mesma tipografia, tamanhos de fonte e paleta de cores utilizados na página inicial.
   - Seguir o mesmo padrão de espaçamento interno (padding) e externo (margin) entre as seções.