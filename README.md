# U-UNICID-ADS-CC-ENG-FRONTEND-2260016-D4-2-2026-M-TERS
Convite para o professor acompanhar o desenvolvimento do seu projeto no GitHub.

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
* **[Visite o nosso site](https://u-unicid-ads-cc-eng-frontend-2260016-d4-2-2026-m-production.up.railway.app/)**

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
└── [Contato e Diagnóstico]

---

## 8. Conteúdo e Identidade Visual
* **Tom de Voz:** Didático, simples e focado em explicar termos técnicos de um jeito que qualquer pessoa consiga entender.
* **Paleta de Cores:** Fundo limpo e claro, utilizando cores suaves para identificar os elementos (azul para água/hidráulica, amarelo/laranja para o sol/solar, e tons de cinza-azulado para o vento/eólica).
* **Tipografia:** Fontes padrão do sistema de alta legibilidade (como Segoe UI ou Arial).
* **Fontes do Conteúdo:** As informações textuais que compõem as páginas foram extraídas de plataformas de pesquisa escolar e conteúdos de domínio público na internet, sendo devidamente selecionadas para preencher os requisitos de conteúdo do escopo técnico.
---

## 9. Tecnologias e Ferramentas
* **Linguagens:** HTML5 para a estrutura e CSS3 para a estilização visual.
* **Suporte:** Uso de Inteligência Artificial como assistente de estudos para refinamento de código e correção de textos.
* **Editores:** Editores de código padrão (como o VS Code) e ferramentas de desenvolvedor do próprio navegador (DevTools) para testar os estilos.

---

## 10. Riscos e Restrições
* **Cronograma Acadêmico:** O principal risco de atraso é a concorrência de tempo com a entrega de trabalhos e provas de outras matérias da faculdade ao longo do semestre.
* **Aprendizado Técnico:** Possíveis dificuldades naturais no início do aprendizado com regras mais avançadas de posicionamento CSS e responsividade para celulares.

---

## 11. Critérios de Aceitação
O projeto final será considerado pronto para a entrega quando cumprir os seguintes pontos:
1. As **10 páginas planejadas estarem criadas e com links funcionando** entre si, sem nenhuma página quebrada.
2. O formulário de contato estar estruturado na tela e com os campos obrigatórios validados nativamente pelo HTML.
3. O código utilizar corretamente as tags semânticas estruturais (como `header`, `nav`, `main`, `section` e `footer`) que foram ensinadas em aula.
4. O visual do site se adaptar de forma legível em telas de computadores e smartphones através de regras de responsividade.

---

## 12. Aprovação
* **Responsável pela Validação do Escopo:** Professor Paulo Fratta  
* **Data de Aprovação:** ____/____/2026  
* **Assinatura do Avaliador:** _______________________________________
