# U-UNICID-ADS-CC-ENG-FRONTEND-2260016-D4-2-2026-M-TERS
Site TERS (Transição Energética Renovável Sustentável): explica, em linguagem simples, como usar energia solar, eólica e hidráulica em pequena escala, com foco em quem vive e produz no campo.

* **Site publicado (GitHub Pages, HTTPS):** <https://fabricio342gp.github.io/U-UNICID-ADS-CC-ENG-FRONTEND-2260016-D4-2-2026-M-TERS/>
* **Repositório:** <https://github.com/Fabricio342GP/U-UNICID-ADS-CC-ENG-FRONTEND-2260016-D4-2-2026-M-TERS>
* **Documentação:** [diário de bordo](docs/logs-de-mudanca/readme.md), [prompts](docs/prompts/), [referências](docs/referencias.md), [testes](docs/testes.md), [melhorias do MVP](docs/melhorias-mvp.md) e [uso de IA](docs/uso-de-ia.md)

# DOCUMENTO DE ESCOPO DE PROJETO WEB
**Disciplina:** Desenvolvimento FRONT-END para WEB  
**Professor:** Paulo Fratta  

---

## 1. Identificação
* **Nome da Equipe:** Equipe Eco Inovação
* **Nome do Projeto/Site:** TERS (Transição Energética Renovável Sustentável)
* **Integrantes:**
  * Thiago Roberto de Oliveira
  * Fabricio de Oliveira
  * Evandro Evair Condori Colque
  * João Vitor Ferreira Ramos
  * Gustavo Augusto Barbara
* **Data de Emissão:** 22/09/2026
* **Atualizado em:** 16/11/2026 (2ª entrega). O escopo original, sem mudanças, está em [docs/README.md](docs/README.md).
* **[Visite o nosso site](https://fabricio342gp.github.io/U-UNICID-ADS-CC-ENG-FRONTEND-2260016-D4-2-2026-M-TERS/)** (até 16/11/2026 o site ficava no Railway; o endereço antigo saiu do ar e a hospedagem mudou para o GitHub Pages. Veja a seção 15.)

---

## 2. Contexto e Justificativa
O projeto TERS foi idealizado para ajudar pessoas comuns e pequenos comércios a entenderem melhor o cenário de transição energética. O principal problema que o site aborda é o fato de que muita gente ainda depende de fontes de energia tradicionais simplesmente por não conhecer as alternativas viáveis para a sua realidade.

Este tema é muito relevante porque a maioria das pessoas associa energia limpa apenas às placas solares. Existe uma clara dificuldade em saber qual tipo de energia (eólica, hidráulica ou solar) funciona melhor em cada região e como começar a usá-la. O impacto social e ambiental do site está em facilitar esse conhecimento de forma simples, ajudando a proteger a natureza e incentivando o uso de energias que não agridem a fauna e a flora.

---

## 3. Objetivos
* **Objetivo Geral:** Desenvolver um site informativo, claro e de fácil navegação que ensine os visitantes sobre o funcionamento das principais energias renováveis, ajudando-os a descobrir qual a melhor opção para a sua situação geográfica e de consumo.
* **Objetivos Específicos:**
  * **Organização do Conteúdo:** Estruturar seções bem divididas e explicativas para as 3 matrizes principais: Solar, Eólica e Hidráulica.
  * **Interação com o Usuário:** Criar um formulário de contato simples e funcional para que os visitantes possam enviar suas dúvidas.
  * **Cuidado Visual e Desempenho:** Garantir que o site carregue de forma ágil através da otimização básica do tamanho e formato das imagens utilizadas.
  * **Aplicação de Acessibilidade:** Implementar os conceitos de acessibilidade vistos em sala de aula para que o conteúdo seja amigável para pessoas com deficiência.
* **Metas mensuráveis (2ª entrega):**
  * 10 páginas de conteúdo interligadas, com 0 links internos quebrados.
  * 0 erros no W3C Validator em todas as páginas.
  * Nota de Acessibilidade no Lighthouse de 90 ou mais nas páginas principais.
  * Todo o site navegável só com Tab e Enter, com o foco sempre visível.
  * Formulário que valida os campos com JavaScript e guarda o rascunho no navegador (`localStorage`).

---

## 4. Público-Alvo
O site é voltado para proprietários de casas, moradores de áreas rurais e pequenos empreendedores que têm interesse em adotar energia limpa, mas não sabem por onde começar devido à falta de informação.

* **Perfil Geral:** Conteúdo livre para todos os públicos, sem restrição de idade ou localização, com foco em quem busca economia e sustentabilidade.
* **Acessibilidade:** Pessoas com deficiência (visuais ou motoras) são consideradas público prioritário. O site será estruturado para facilitar a leitura de tela e a navegação intuitiva.

---

## 5. Escopo Funcional (O que o site terá)
O site completo será composto por uma estrutura de **10 páginas interligadas**:

1. **Home (Página Inicial):** Apresentação do projeto TERS e menu principal de navegação.
2. **Quem Somos:** Página contando a história da Equipe Eco Inovação e apresentando os integrantes do grupo.
3. **Energia Solar - Fotovoltaica:** Explicação sobre a geração de eletricidade através da luz do Sol e painéis solares.
4. **Energia Solar - Térmica:** Conteúdo focado no aquecimento de água para uso no dia a dia.
5. **Energia Eólica - Residencial:** Guia prático sobre pequenos geradores de vento para casas e propriedades menores.
6. **Energia Eólica - Grandes Parques:** Informações sobre as grandes usinas de vento e o conceito de Mecanismo de Desenvolvimento Limpo (MDL) citado pela ONU.
7. **Energia Hidráulica - Funcionamento:** Detalhes de como a força e a movimentação da água geram eletricidade através de turbinas.
8. **Energia Hidráulica - Impactos:** Texto explicativo sobre a importância dos reservatórios, funcionamento em épocas de seca e preservação dos rios.
9. **Notícias e Eco-Inovação:** Uma galeria de informações e novidades sobre o mercado de sustentabilidade.
10. **Contato e Diagnóstico:** Página final com um formulário de contato para o usuário tirar dúvidas sobre sua situação.

**Página acrescentada na 2ª entrega:** **Orçamento e hospedagem** (`orcamento_hospedagem.html`), com o custo do site e a escolha da hospedagem. A área de apoio do site é a página **Contato e Diagnóstico**.

---

## 6. Escopo Não Funcional (Como o site vai funcionar)
* **Acessibilidade:** Uso obrigatório do atributo `alt` em todas as imagens, bom contraste de cores entre os textos e fundos, e uso correto de tags semânticas para ajudar os leitores de tela.
* **Sustentabilidade Digital:** Código limpo e organizado, evitando arquivos pesados desnecessários, e imagens salvas em formatos modernos para não pesar o carregamento.
* **Responsividade:** Adaptação do layout para que o site fique bonito e legível tanto no computador quanto em celulares e tablets.
* **SEO Básico:** Organização correta dos títulos (`<h1>` para o nome da página, `<h2>` para as seções principais e `<h3>` para subseções).

---

## 7. Mapa do Site
A estrutura de navegação do usuário funcionará em árvore a partir do menu principal:

[Home (Página Inicial)]
├── [Quem Somos / Equipe]
├── [Energia Solar] ───────► (Fotovoltaica / Térmica)
├── [Energia Eólica] ──────► (Residencial / Grandes Parques)
├── [Energia Hidráulica] ──► (Funcionamento / Impactos)
├── [Notícias & Eco-Inovação]
├── [Contato e Diagnóstico]
└── [Orçamento e hospedagem] (2ª entrega, pelo rodapé)

---

## 8. Conteúdo e Identidade Visual
* **Tom de Voz:** Didático, simples e focado em explicar termos técnicos de um jeito que qualquer pessoa consiga entender.
* **Paleta de Cores:** Fundo limpo e claro, utilizando cores suaves para identificar os elementos (azul para água/hidráulica, amarelo/laranja para o sol/solar, e tons de cinza-azulado para o vento/eólica).
* **Tipografia:** Fontes padrão do sistema de alta legibilidade (como Segoe UI ou Arial).
* **Fontes do Conteúdo:** Os textos são escritos com palavras da equipe. Dados, ideias e imagens de terceiros têm fonte e ano na própria página, e a lista completa está em [referencias.md](docs/referencias.md). As fotos têm licença livre (Wikimedia Commons), com autor e licença na legenda.
---

## 9. Tecnologias e Ferramentas
* **Linguagens:** HTML5 para a estrutura, CSS3 para a estilização visual (variáveis em `:root`, Mobile First, Flexbox e Grid) e JavaScript puro, sem frameworks, em `js/main.js`:
  * menu lateral com teclado (Esc fecha e o Tab fica dentro do menu);
  * filtro de notícias por tipo de energia;
  * calculadora de potência da água;
  * formulário de contato com validação (`preventDefault`, mensagem ao lado do campo, `aria-invalid` e foco no primeiro erro) e rascunho salvo no `localStorage`;
  * botão de alto contraste, com a escolha salva no `localStorage`.
* **Versionamento e publicação:** Git e GitHub; site publicado no GitHub Pages.
* **Suporte:** Uso de Inteligência Artificial (Claude Code) como assistente para refinamento de código, revisão de textos e conferência das regras. Veja [uso-de-ia.md](docs/uso-de-ia.md).
* **Editores:** Editores de código padrão (como o VS Code) e ferramentas de desenvolvedor do próprio navegador (DevTools) para testar os estilos.

---

## 10. Riscos e Restrições
* **Cronograma Acadêmico:** O principal risco de atraso é a concorrência de tempo com a entrega de trabalhos e provas de outras matérias da faculdade ao longo do semestre.
* **Aprendizado Técnico:** Possíveis dificuldades naturais no início do aprendizado com regras mais avançadas de posicionamento CSS e responsividade para celulares.

---

## 11. Critérios de Aceitação
O projeto final será considerado pronto para a entrega quando cumprir os seguintes pontos:
1. As **10 páginas planejadas estarem criadas e com links funcionando** entre si, sem nenhuma página quebrada.
2. O formulário de contato estar estruturado na tela, com os campos obrigatórios validados por JavaScript (`preventDefault`, mensagens de erro ao lado do campo e borda em destaque) e com o rascunho guardado no `localStorage`.
3. O código utilizar corretamente as tags semânticas estruturais (como `header`, `nav`, `main`, `section` e `footer`) que foram ensinadas em aula.
4. O visual do site se adaptar de forma legível em telas de computadores e smartphones através de regras de responsividade.

---

## 12. Aprovação
* **Responsável pela Validação do Escopo:** Professor Paulo Fratta  
* **Data de Aprovação:** ____/____/2026  
* **Assinatura do Avaliador:** _______________________________________

---

## 13. Como rodar o site

1. Baixe o projeto: `git clone https://github.com/Fabricio342GP/U-UNICID-ADS-CC-ENG-FRONTEND-2260016-D4-2-2026-M-TERS.git` (ou "Code" → "Download ZIP" no GitHub).
2. Abra a pasta no VS Code.
3. Clique com o botão direito em `index.html` → **Open with Live Server** (extensão Live Server).
4. O site abre no navegador. Não é preciso instalar mais nada: não há banco de dados nem servidor próprio.

> Abrir o `index.html` com dois cliques também funciona, mas os vídeos do YouTube só tocam por um servidor (Live Server ou o site publicado).

## 14. Estrutura de pastas

```text
/
├── index.html, sobre.html, contato.html, noticias.html
├── solar-fotovoltaica.html, solar-termica.html
├── eolica-residencial.html, eolica-grandes-parques.html
├── hidraulica-funcionamento.html, hidraulica-impactos.html
├── orcamento_hospedagem.html   (2ª entrega)
├── css/style.css          estilos de todas as páginas
├── js/main.js             JavaScript de todas as páginas
├── img/noticias/          fotos com licença livre
├── README.md              este arquivo
├── docs/                  escopo original (README.md), diário de bordo, prompts, referências, testes, MVP e IA
└── .github/               regras de código, conteúdo e uso de IA da equipe
```

## 15. Publicação (deploy)

* **Onde:** GitHub Pages, a partir da branch `main` (Settings → Pages).
* **Por quê:** é gratuito para repositório público, tem HTTPS automático e o site é estático. A comparação com o Railway e o orçamento estão na página [Orçamento e hospedagem](orcamento_hospedagem.html).
* **Cuidado:** o servidor do GitHub Pages diferencia maiúsculas de minúsculas. Por isso todos os nomes de arquivo ficam em minúsculas (o antigo `css/style.CSS` deixava o site sem estilo online).

## 16. Documentação

| Documento | O que tem |
|---|---|
| [logs-de-mudanca/](docs/logs-de-mudanca/readme.md) | Diário de bordo: data, prompt, o que foi aceito e o que foi corrigido em cada mudança |
| [prompts/](docs/prompts/) | Prompts usados e os 2 que funcionaram melhor |
| [referencias.md](docs/referencias.md) | Todas as fontes do site, em ABNT |
| [testes.md](docs/testes.md) | W3C, Lighthouse, teclado e testes do JavaScript |
| [melhorias-mvp.md](docs/melhorias-mvp.md) | O que mudou da 1ª para a 2ª entrega, com antes e depois |
| [uso-de-ia.md](docs/uso-de-ia.md) | Como a equipe usou a IA, o que aceitou e o que corrigiu |
