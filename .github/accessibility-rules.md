# Diretrizes para Assistente de IA - Projeto Front-End TERS

## Regras de Acessibilidade

1. **Estrutura**:
   - Usar `lang="pt-BR"` e apenas um `<h1>` por página, com títulos em ordem (`h1`, `h2`, `h3`) sem pular níveis.
   - Usar as áreas semânticas `<header>`, `<nav aria-label="...">`, `<main id="conteudo">` e `<footer>`.
   - Incluir o link "Pular para o conteúdo" no início de cada página.

2. **Imagens e Mídia**:
   - Escrever `alt` descritivo, sem colchetes. Imagens apenas decorativas usam `alt=""`.
   - Vídeos com controles e legenda, áudios com transcrição e `<iframe>` sempre com `title`.

3. **Formulários**:
   - Ligar cada campo a um `<label>` pelos atributos `for` e `id`.
   - Associar a mensagem de erro ao campo com `aria-describedby` e escrever o erro de forma clara.
   - Usar botões com texto de ação (ex.: "Enviar mensagem").

4. **Cores e Teclado**:
   - Garantir contraste AA: 4,5:1 para texto normal e 3:1 para texto grande.
   - Manter o foco visível (`:focus-visible`) e permitir navegar por todo o site só com Tab e Enter.
   - Manter o botão de alto contraste e respeitar `prefers-reduced-motion`.

5. **Testes**:
   - Passar o W3C Validator sem erros em todas as páginas.
   - Rodar o Lighthouse (acessibilidade) e testar a navegação por teclado antes de cada entrega.
