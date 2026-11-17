# 2026-11-16: Fase 3 (parte 1), notícias, vídeos e imagens

- **Data:** 2026-11-16
- **Responsável pela revisão:** Thiago Roberto de Oliveira
- **Feito com IA?** Sim (Claude Code)

## Pedido / prompt usado

O prompt [docs/prompts/prompt-aplicar-correcoes-regras.md](../prompts/prompt-aplicar-correcoes-regras.md), Fase 3, item 2 (item 4 da auditoria). A equipe mudou o pedido durante a fase:

1. "Na parte de notícias da parte 3 quero que você pegue videos e noticias de outro site e faça a integração com o link para elas."
2. "Separe também imagens para representar cada notícia."

O prompt foi atualizado com esses dois pedidos.

## O que mudou

| Arquivo | O que foi alterado |
|---|---|
| `noticias.html` | Novo parágrafo explicando os tipos de card. 6 notícias de outros sites, cada uma com imagem e crédito. 5 vídeos do YouTube dentro dos cards. Os 9 cards antigos receberam a linha "Texto da equipe Eco Inovação". O contador inicial passou de 9 para 20. |
| `css/style.css` | Seção 12 (Notícias e filtros): novas classes `.noticia-figura`, `.noticia-video`, `.noticia-fonte` e `.noticia-credito`, com comentários. Não havia classe parecida para reaproveitar. |
| `img/noticias/` | Pasta nova com 6 fotos de licença livre, em 960 px de largura (de 96 KB a 358 KB cada). |
| `docs/referencias.md` | Nova seção "Notícias e Eco-Inovação" com as 17 referências em ABNT: 6 notícias, 5 vídeos e 6 imagens. |
| `docs/prompts/prompt-aplicar-correcoes-regras.md` | A Fase 3, item 2, agora registra os dois pedidos da equipe. |

O filtro em `js/script.js` não mudou. Os cards novos usam o mesmo `data-categoria`, então o filtro já funciona com eles.

### Notícias acrescentadas

Cada notícia foi aberta e conferida: título, autor, data e conteúdo.

| Categoria | Veículo | Data | Assunto |
|---|---|---|---|
| Solar | Canal Solar | 7 fev. 2025 | Irrigação solar para a agricultura familiar |
| Geral | Brasil 61 | 7 jan. 2026 | Geração própria no meio rural, com dados da Aneel |
| Eólica | Ministério Público Federal | 8 jan. 2026 | Nulidade de contratos de arrendamento de eólicas e solares |
| Eólica | Agência Pública | 23 abr. 2026 | Arrendamentos no semiárido (Remígio, PB) |
| Hidráulica | ANA | 24 mar. 2026 | Programa Produtor de Água (nascentes e mata ciliar) |
| Hidráulica | ((o))eco | 21 nov. 2023 | Manifesto contra novas hidrelétricas e efeito das PCHs nos peixes |

### Vídeos acrescentados

O canal e a data de cada vídeo foram conferidos no YouTube. Também foi testado se o vídeo toca dentro do site, por um servidor local.

| Categoria | Canal | Data | Duração |
|---|---|---|---|
| Solar | TV Alepi (TV Assembleia do Piauí) | 8 jul. 2024 | 4 min 22 s |
| Solar | Gerasol BH (Sociedade do Sol) | 4 set. 2013 | 4 min 04 s |
| Eólica | CNN Brasil | 15 ago. 2024 | 3 min 35 s |
| Eólica | UOL Prime | 26 dez. 2025 | 9 min 05 s |
| Hidráulica | Rio Grande Rural (Emater/RS-Ascar) | 7 maio 2017 | 7 min 03 s |

### Imagens

As fotos foram tiradas do Wikimedia Commons, todas com licença livre: domínio público, CC0 ou CC BY-SA. Cada uma tem crédito na legenda (`<figcaption>`) com o autor, o ano, a licença e o link. A IA abriu cada foto antes de escrever o `alt`, que descreve só o que aparece nela. As fotos ilustram o assunto, mas não são das notícias. Por isso a legenda diz "Foto ilustrativa" e o lugar onde foi tirada.

## O que foi aceito

- Após a assistirmos os vídeos aceitamos as sugestões que ela propôs junto de suas notícias, mas as que haviam permissão para serem adicionadas.

## O que foi corrigido

- **Vídeo da Band trocado.** O vídeo "Energia eólica se torna fonte de renda" (Band Jornalismo) mostrava "Este vídeo não está disponível" dentro do site, porque o canal bloqueia a incorporação. Foi trocado pelo vídeo da CNN Brasil.
- **Fontes descartadas.**
  - A notícia do INPA sobre peixes e hidrelétricas foi descartada porque a página pede login.
  - A notícia do Plano Safra 2026/2027 (MDA) foi descartada porque o texto não fala de energia.
  - Uma notícia do site O Antagonista sobre uma "usina caseira" foi descartada: estava na seção de entretenimento e tinha duas datas diferentes.
  - Vídeos com "Globo Rural" no título foram descartados porque eram de canais de vendedores, não do programa.

## Pendências

- **Assistir aos 5 vídeos.** Os resumos foram escritos a partir da descrição publicada no YouTube, e a IA não assistiu aos vídeos.
- **Conferir as legendas.** O site pede legenda em português (`cc_load_policy=1`), mas ela só aparece se o vídeo tiver. A regra de acessibilidade pede vídeos com legenda.
- **Foto da PCH Palmeiras.** O nome do autor aparece cortado no próprio Wikimedia Commons ("MARCO AURÉLIO ESPARZ…"), que importou a foto do Panoramio. Se a equipe preferir, dá para trocar por outra foto.
- **Testar num celular de verdade.** A captura em modo sem janela do Edge não desce até 412 px de largura, e a página antiga do backup aparece cortada do mesmo jeito. Por isso o layout de celular não foi conferido por imagem.

## Como testar

1. **Abra a página por um servidor.** Use o Live Server do VS Code (botão "Go Live"). Aberto direto do arquivo (`file://`), o YouTube mostra "Erro 153" nos vídeos, porque nesse caso o navegador não informa de qual site vem o pedido. No GitHub Pages, os vídeos funcionam.
2. Clique em Solar, Eólica, Hidráulica e Geral. A contagem deve mudar: 6 cards em Solar, 6 em Eólica, 5 em Hidráulica e 3 em Geral.
3. Clique nos links "Ler a notícia…" e "Assistir no canal…" e confira se abrem o conteúdo certo.
4. Use só o teclado (Tab): os links, os vídeos e os créditos devem receber foco visível.
5. Teste no celular.

## Conferência feita pela IA

- 20 cards (`article`). As tags `figure`, `figcaption`, `p`, `a` e `time` estão equilibradas: cada uma abre e fecha.
- Todas as 6 imagens têm `alt` e existem na pasta.
- O script de regras não acusou nenhum problema novo. Continua só o aviso do `js/script.js`, que é a Fase 6.
- Capturas de tela em 1280 px mostram a grade com 3 colunas, as imagens com crédito e os vídeos carregando, sem erro, pelo servidor local.

## Backup

- `_backup-2026-11-16/noticias.html` e `_backup-2026-11-16/css/style.css`: versões de antes desta parte.
