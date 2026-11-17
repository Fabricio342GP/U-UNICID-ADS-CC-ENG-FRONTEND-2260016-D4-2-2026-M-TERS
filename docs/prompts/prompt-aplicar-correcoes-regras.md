# Prompt: aplicar as correções das regras do site TERS

> **Como usar:** copie tudo a partir de "INÍCIO DO PROMPT" e cole no assistente de IA, com a pasta do site aberta.
> Faça uma fase por vez. Ao fim de cada fase, revise o resultado e registre a mudança em `docs/logs-de-mudanca/`.
> **Fora deste prompt:** a parte de Git e GitHub (itens 15 e 16 da auditoria). Ela será feita depois.

---

## INÍCIO DO PROMPT

Você é o assistente de IA da equipe Eco Inovação no projeto TERS (Transição Energética Renovável Sustentável).
O projeto é um site estático em HTML5, CSS3 e JavaScript puro, em pt-BR, feito para a disciplina Desenvolvimento FRONT-END para WEB.

Antes de mudar qualquer arquivo, leia as 7 regras da pasta `.github/`:
`general-rules.md`, `content-rules.md`, `layout-rules.md`, `accessibility-rules.md`, `javascript-rules.md`, `ai-usage-rules.md` e `git-rules.md`.
As regras valem acima deste prompt. Se algo aqui contrariar uma regra, siga a regra e me avise.

### Regras de trabalho (valem para todas as fases)

1. **Não invente nada.** Isso inclui fontes, links, autores, anos, números e notícias. Se não achar uma fonte confiável, deixe o item como pendência visível (classe `.pendencia`) e coloque-o na lista da equipe. Nunca apague o item.
2. **Não retire fontes nem conteúdo.** Corrija e complete, mas mantenha o que já existe.
3. **Altere só o que a fase pede.** Mantenha a identidade visual, as cores, os textos e a estrutura.
4. **Faça backup antes de cada fase.** Copie os arquivos que vai mudar para `_backup-AAAA-MM-DD/`, usando a data do dia.
5. **Comente o código novo de forma simples.** O comentário diz o que o trecho faz e por quê, para a equipe explicar na apresentação.
6. **Respeite bloqueios.** Se um site bloquear acesso automático, não contorne o bloqueio. Marque o item como "conferir manualmente".
7. **Peça permissão antes de enviar código a serviços externos,** como o W3C Validator online.
8. **Registre cada fase.** Crie um arquivo em `docs/logs-de-mudanca/` seguindo o `modelo.md` da pasta. Anote a data, este prompt, o que mudou, o que foi aceito, o que foi corrigido e o que ficou pendente.
9. **Não faça nada de Git.** Não use `git init`, commit, branch, `.gitignore` nem push.
10. **Responda em português, com frases curtas.**

### Estado atual (já verificado; não refaça)

Estes pontos já obedecem às regras. Apenas confira que continuam certos depois das suas mudanças:

- HTML semântico, `lang="pt-BR"`, UTF-8, um só `<h1>` por página e títulos em ordem.
- Link "Pular para o conteúdo", `<nav aria-label>`, `<main id="conteudo">` e `label` ligado a cada campo.
- Contraste AA nos 24 pares de cores testados, foco visível e `prefers-reduced-motion`.
- O JavaScript segue as regras: `addEventListener`, `textContent`, `try/catch` no localStorage e a chave `ters-rascunho-contato`.
- Os nomes de arquivo estão em minúsculas.
- As páginas `solar-fotovoltaica`, `solar-termica`, `hidraulica-funcionamento` e `hidraulica-impactos` já foram atualizadas com o PDF da equipe. Elas usam as classes `.pendencia`, `.so-revisao`, `.caixa-risco`, `.item-risco`, `.card-comparacao`, `.subtitulo`, `ol.lista`, `.referencias`, `.lista-referencias`, `.ver-tambem` e `.comparacao-texto`. Essas classes estão na seção 18 de `css/style.css`.

---

### FASE 1: Documentação na pasta `/docs` (itens 6 e 13)

1. Crie `docs/referencias.md` com todas as referências do site em formato ABNT, com os links.
   - Junte as referências das seções "Referências" das 4 páginas atualizadas e as fontes das outras páginas.
   - Agrupe por página.
   - Copie as referências como estão no HTML. Não mude autores, anos nem links.
   - Mantenha a pendência que já existe: faltam os autores do material da USP (e-Disciplinas), que só abre com login.
2. Confira se a pasta `docs/logs-de-mudanca/` existe. Ela é o diário de bordo pedido em `ai-usage-rules.md`. Não crie outro diário.
3. Escolha 1 ou 2 prompts que funcionaram bem e guarde-os em `docs/prompts/`, para mostrar na apresentação.

### FASE 2: Erros de digitação e termos técnicos (itens 7 e 8)

1. Corrija estes erros nos HTML:
   - "o conteém" → "contém"
   - "Rio Ijaí" → "Rio Ijuí"

   Antes de corrigir, procure cada erro com uma busca no projeto e mostre onde ele aparece. No log, diga que os erros vieram do documento da equipe.
2. Explique, em linguagem simples e na primeira vez que aparecem, estes termos técnicos: **altura manométrica, recalque, AFPE, GFCI e TVR**.
   - Use o `<abbr title="...">` para as siglas e uma frase curta no texto para os outros termos.
   - Mostre as explicações antes de aplicar. A regra pede que o texto seja escrito com palavras da equipe.
   - Se uma explicação depender de uma fonte, cite a fonte.

### FASE 3: Fontes de números, imagens e notícias (itens 3, 4 e 5)

Esta fase depende de pesquisa. Siga a regra 1: o que não tiver fonte confiável vira pendência, não é inventado.

1. **Números sem fonte nem ano.** Procure uma fonte confiável (órgão oficial, universidade, ONU, fabricante com norma técnica) para cada número:
   - `eolica-residencial.html`: vento de 4 a 5 m/s, 9 m e de 12 a 30 m.
   - `eolica-grandes-parques.html`: torres acima de 100 m.
   - `solar-fotovoltaica.html`: de 2 a 2,5 m² por painel.

   Se achar a fonte, coloque a fonte e o ano junto do número e acrescente a referência em `docs/referencias.md`. Se não achar, marque com `.pendencia` e escreva o que falta.
2. **Notícias (`noticias.html`, 9 cards).** Cada card precisa de link e fonte, ou da indicação "Texto da equipe Eco Inovação".
   - Mantenha os 9 cards e identifique cada um como "Texto da equipe Eco Inovação".
   - *(Pedido da equipe em 16/11/2026)* Acrescente **notícias e vídeos reais de outros sites**, com link para o original. Prefira órgãos oficiais, universidades e veículos de imprensa conhecidos.
     - Cada card mostra o tipo (Notícia ou Vídeo), o veículo ou canal, a data e um resumo curto escrito com palavras da equipe.
     - Confira cada notícia abrindo a página: título, autor, data e conteúdo. Não use páginas que pedem login.
     - Vídeos: confira o canal e a data, e se o vídeo toca dentro do site. Use `<iframe>` com `title`, pelo domínio `youtube-nocookie.com`.
   - *(Pedido da equipe em 16/11/2026)* Coloque uma **imagem em cada notícia**, só com licença livre (por exemplo, do Wikimedia Commons). Guarde em `img/noticias/` e mostre o crédito: autor, ano e licença. O `alt` descreve só o que aparece na foto.
   - Use o mesmo `data-categoria` dos cards antigos, para o filtro continuar funcionando.
3. **Imagem da home (`index.html`, vinda de canalbioenergia.com.br).** Acrescente o crédito em legenda ou no rodapé, com o nome do site e o link.
   - Se não achar o ano ou o autor da imagem, deixe esses dados como pendência.
   - Confira se o `alt` descreve a imagem.
4. No fim da fase, entregue uma **lista para a equipe** com tudo que ficou pendente: página, trecho, o que falta e onde procurar.

### FASE 4: Reaproveitar classes do CSS (item 11)

A regra `layout-rules.md` diz para não criar classes novas quando já existe uma parecida.

1. Troque `.comparacao-texto` por `.texto-coluna` no HTML. Apague a regra antiga só se o resultado visual for o mesmo.
2. Troque `.subtitulo` pelo estilo de `.secao h3`. Se o `h3` ficar dentro de `.secao`, basta retirar a classe.
3. Compare `.caixa-risco` com `.caixa-atencao`. Se a diferença for pequena, use `.caixa-atencao`, com um modificador se precisar. Se a caixa de risco precisar de destaque próprio, mantenha a classe e explique o motivo num comentário.
4. Tire capturas de tela antes e depois. Mostre se alguma coisa mudou na aparência.

### FASE 5: Variáveis CSS e Mobile First (itens 9 e 10)

Esta é a fase maior. **A aparência do site não pode mudar.**

1. **Variáveis.** Em `css/style.css` existem 63 cores em hexadecimal fora do `:root`.
   - Crie variáveis em `:root` para essas cores e para as fontes e os espaçamentos que se repetem. Use nomes em português, por exemplo `--cor-texto` e `--espaco-medio`.
   - Antes de criar uma variável, veja se ela já existe.
   - Troque os valores soltos pelas variáveis.
   - Depois da troca, confira o contraste AA.
2. **Mobile First.** Hoje as media queries usam `max-width` (desktop primeiro).
   - Reescreva os estilos para que o padrão seja o celular e as telas maiores usem `min-width`.
   - Mantenha os mesmos pontos de quebra.
3. **Teste.** Compare cada página antes e depois em 360 px, 768 px e 1280 px de largura. Mostre as diferenças. Se houver diferença, corrija antes de seguir.
4. Atualize o índice no topo de `css/style.css`, se as seções mudarem.

### FASE 6: Nome do script (item 12)

1. Renomeie `js/script.js` para `js/main.js`.
2. Troque, em todas as páginas, a tag do script por `<script src="js/main.js" defer></script>`.
3. Procure no projeto qualquer outra menção a `script.js` e atualize.
4. Teste o menu lateral, a calculadora, o filtro de notícias, o formulário com rascunho e o modo revisão.

### FASE 7: Botão de alto contraste (item 1)

1. Crie um botão "Alto contraste" no cabeçalho de todas as páginas, com a mesma estrutura em todas.
2. No `main.js`, escreva uma função pequena que liga e desliga uma classe no `<html>` ou no `<body>`.
   - A função atualiza o `aria-pressed`.
   - Ela guarda a preferência no localStorage com a chave `ters-alto-contraste`, usando `try/catch`.
3. No CSS, crie o tema de alto contraste reaproveitando as variáveis da Fase 5.
4. Teste: o botão funciona só com Tab e Enter, o foco fica visível e a escolha continua depois de recarregar a página.

### FASE 8: Modo revisão (item 14), só documentar

O modo `?revisao` mostra dados sem fonte (classe `.so-revisao`) para quem edita. Ele não foi pedido pelas regras.

1. Não apague e não mude o modo revisão.
2. No log, explique de forma simples como ele funciona e onde está no código: bloco 5 do JS e seção 18 do CSS.
3. Liste os pontos para a equipe decidir:
   - manter o modo como está;
   - transformar os trechos `.so-revisao` em `.pendencia` visível;
   - retirar o modo.

### FASE 9: Testes finais (item 2)

1. **W3C Validator.** Pergunte antes se pode enviar as páginas ao validador online. Se não puder, explique como a equipe faz isso: upload do arquivo em https://validator.w3.org/#validate_by_upload.
2. **Lighthouse.** Explique como rodar no Chrome ou no Edge: DevTools, aba Lighthouse, categoria Acessibilidade. Indique quais páginas testar.
3. **Teclado.** Navegue por todas as páginas só com Tab, Shift+Tab e Enter. Anote qualquer problema.
4. **Revisão das regras.** Confira de novo as 7 regras e mostre uma tabela com três colunas: regra, situação (ok, pendente ou depende da equipe) e onde está a prova.

### Entrega de cada fase

Ao terminar cada fase, responda com:

1. **O que mudou:** os arquivos e as linhas.
2. **O que precisa da equipe:** pendências, decisões e textos para aprovar.
3. **Como testar:** passos curtos.

Depois, crie o log da fase em `docs/logs-de-mudanca/`.

## FIM DO PROMPT

---

### Itens da auditoria e fases

| Item | Assunto | Fase |
|---|---|---|
| 1 | Botão de alto contraste | 7 |
| 2 | W3C Validator e Lighthouse | 9 |
| 3 | Números sem fonte e ano | 3 |
| 4 | Notícias sem link e fonte | 3 |
| 5 | Crédito da imagem da home | 3 |
| 6 | Pasta `/docs` e lista de referências | 1 |
| 7 | Erros de digitação | 2 |
| 8 | Termos técnicos sem explicação | 2 |
| 9 | CSS não é Mobile First | 5 |
| 10 | Cores fora do `:root` | 5 |
| 11 | Classes duplicadas | 4 |
| 12 | `script.js` → `main.js` | 6 |
| 13 | Diário de bordo | 1 (pasta `docs/logs-de-mudanca/`) |
| 14 | Modo revisão | 8 |
| 15 | Repositório Git | **depois** (fora deste prompt) |
| 16 | Backup fora do GitHub | **depois** (fora deste prompt) |
