# Diretrizes para Assistente de IA - Projeto Front-End TERS

## Regras de JavaScript

1. **Padrão Geral**:
   - Usar JavaScript puro, sem frameworks, em arquivos dentro da pasta `/js`.
   - Carregar os scripts com `<script src="js/main.js" defer></script>`.
   - Nomear variáveis e funções em português, no padrão camelCase.
   - Criar funções pequenas, cada uma com uma única tarefa, e comentar apenas os trechos que precisem de esclarecimento.

2. **Formulários**:
   - Usar `preventDefault()` no envio para validar antes de enviar.
   - Mostrar a mensagem de erro ao lado do campo e destacar a borda com uma classe CSS (ex.: `invalido`).
   - Atualizar `aria-invalid` e levar o foco ao primeiro campo com erro.
   - Não depender apenas de cor para indicar o erro.

3. **localStorage**:
   - Sempre usar `try/catch` ao ler e gravar.
   - Usar chaves com o prefixo `ters-` (ex.: `ters-rascunho`).
   - Guardar apenas dados não sensíveis, como rascunho de formulário ou preferências. Nunca guardar senhas.
   - Limpar o rascunho depois que o formulário for enviado.

4. **DOM e Segurança**:
   - Usar `addEventListener` em vez de `onclick` dentro do HTML.
   - Usar `textContent` para inserir texto. Nunca usar `innerHTML` com texto digitado pelo usuário e nunca usar `eval`.
   - Atualizar `aria-expanded` e `aria-pressed` quando botões abrirem menus ou ativarem opções.
