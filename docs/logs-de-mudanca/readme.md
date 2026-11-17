# Logs de mudança (diário de bordo)

Esta pasta guarda o histórico das mudanças no site TERS.
Ela também serve como o **diário de bordo** pedido em `.github/ai-usage-rules.md`.
Ali ficam a data, o prompt usado, o que foi aceito e o que foi corrigido.

## Como registrar

1. Crie um arquivo novo para cada mudança ou fase de trabalho.
2. Use o nome `AAAA-MM-DD-assunto-curto.md`, em minúsculas e com hífens. Exemplo: `2026-11-20-botao-alto-contraste.md`.
3. Copie o conteúdo de [modelo.md](modelo.md) e preencha.
4. Não apague logs antigos. Se algo mudou depois, crie um log novo que cite o anterior.

## Índice

| Data | Log | Resumo |
|---|---|---|
| 2026-11-15 | [2026-11-15-conteudo-solar-hidraulica.md](2026-11-15-conteudo-solar-hidraulica.md) | Atualiza 4 páginas com o PDF da equipe, completa as referências e comenta o código |
| 2026-11-16 | [2026-11-16-auditoria-regras.md](2026-11-16-auditoria-regras.md) | Confere o site contra as 7 regras e cria o prompt de correções e esta pasta |
| 2026-11-16 | [2026-11-16-fase-1-documentacao.md](2026-11-16-fase-1-documentacao.md) | Fase 1: lista de referências em `/docs` e prompts para a apresentação |
| 2026-11-16 | [2026-11-16-fase-2-ortografia-termos.md](2026-11-16-fase-2-ortografia-termos.md) | Fase 2: corrige 2 erros de digitação e explica altura manométrica, recalque, AFPE e GFCI |
| 2026-11-16 | [2026-11-16-fase-3a-noticias-videos-imagens.md](2026-11-16-fase-3a-noticias-videos-imagens.md) | Fase 3 (parte 1): 6 notícias com imagem, 5 vídeos e textos da equipe identificados |
| 2026-11-16 | [2026-11-16-fase-3b-numeros-imagem-home.md](2026-11-16-fase-3b-numeros-imagem-home.md) | Fase 3 (parte 2): fontes dos números das páginas de eólica e do painel, crédito da imagem da home e lista de pendências |
| 2026-11-16 | [2026-11-16-fase-4-classes-css.md](2026-11-16-fase-4-classes-css.md) | Fase 4: troca .comparacao-texto e .subtitulo por classes que já existiam e faz da .caixa-risco uma variação da .caixa |
| 2026-11-16 | [2026-11-16-fase-5a-variaveis-css.md](2026-11-16-fase-5a-variaveis-css.md) | Fase 5 (parte 1): todas as cores, a fonte, os tamanhos de texto, os cantos e as larguras padrão viram variáveis em :root, sem mudar a aparência |
| 2026-11-16 | [2026-11-16-fase-5b-mobile-first.md](2026-11-16-fase-5b-mobile-first.md) | Fase 5 (parte 2): CSS reescrito em Mobile First (min-width 769px e 1001px), sem mudar a aparência |
| 2026-11-16 | [2026-11-16-texto-novo-eolica.md](2026-11-16-texto-novo-eolica.md) | Troca o texto das duas páginas de eólica pelo texto novo da equipe e dá fonte (Ipea, 2023) ao trecho do MDL |
| 2026-11-16 | [2026-11-16-pendencias-conteudo.md](2026-11-16-pendencias-conteudo.md) | Resolve com fonte as 22 pendências das páginas solar e hidráulica e tira dessas páginas os selos, o conteúdo escondido e as marcas de rascunho |
| 2026-11-16 | [2026-11-16-forma-caseira-eolica.md](2026-11-16-forma-caseira-eolica.md) | Cria a seção de formas caseiras da eólica (cata-vento com bomba de corda e gerador de baixo custo) e esconde no modo revisão o aviso da imagem da home |
| 2026-11-16 | [2026-11-16-fase-6-main-js.md](2026-11-16-fase-6-main-js.md) | Fase 6: js/script.js vira js/main.js e as 10 páginas passam a carregar o main.js; 38 testes do JS passaram |
| 2026-11-16 | [2026-11-16-fase-7-alto-contraste.md](2026-11-16-fase-7-alto-contraste.md) | Fase 7: botão de alto contraste nas 10 páginas (HTML, CSS e bloco 6 do main.js); 55 testes passaram |
| 2026-11-16 | [2026-11-16-fase-8-modo-revisao.md](2026-11-16-fase-8-modo-revisao.md) | Fase 8: documenta como o modo ?revisao funciona e o que a equipe precisa decidir |
| 2026-11-16 | [2026-11-16-fase-9-testes-finais.md](2026-11-16-fase-9-testes-finais.md) | Fase 9: teste de teclado, tabela das 7 regras e passos para W3C e Lighthouse (W3C: 0 erros nas 10 páginas) |
| 2026-11-16 | [2026-11-16-ajustes-entrega-final.md](2026-11-16-ajustes-entrega-final.md) | Validação da 2ª entrega e ajustes: CSS em minúsculas, GitHub Pages, página de orçamento, foto CC0 na home, README novo na raiz, testes, melhorias do MVP e uso de IA; "aceito" e "corrigido" preenchidos nos logs |

> Acrescente uma linha nesta tabela a cada log novo.
