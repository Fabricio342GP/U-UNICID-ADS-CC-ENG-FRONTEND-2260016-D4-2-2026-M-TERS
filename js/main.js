/* =====================================================
   TERS - JavaScript do site (um único arquivo para todas as páginas)
   Arquivo: js/main.js. Até 16/11/2026 se chamava script.js; o nome
   mudou porque a regra .github/javascript-rules.md pede
   <script src="js/main.js" defer></script>. O conteúdo não mudou.
   Cada bloco só roda se os elementos dele existirem na página.
   1. Menu lateral
   2. Calculadora de potência (página Hidráulica - Funcionamento)
   3. Filtro de notícias (página Notícias)
   4. Formulário de contato com validação e rascunho (página Contato)
   5. Modo revisão (mostra trechos pendentes ao editor)
   6. Alto contraste (todas as páginas)
   ===================================================== */


/* =====================================================
   1. MENU LATERAL (todas as páginas)
   ===================================================== */
(function () {
    var botaoMenu = document.getElementById('botao-menu');
    var botaoFechar = document.getElementById('menu-fechar');
    var menu = document.getElementById('menu-lateral');
    var fundo = document.getElementById('menu-fundo');

    if (!botaoMenu || !menu) return;

    // Abre o menu e leva o foco para dentro dele
    function abrirMenu() {
        menu.classList.add('aberto');
        fundo.classList.add('ativo');
        document.body.classList.add('menu-aberto');
        botaoMenu.setAttribute('aria-expanded', 'true');
        botaoFechar.focus();
    }

    // Fecha o menu e devolve o foco ao botão hambúrguer
    function fecharMenu() {
        menu.classList.remove('aberto');
        fundo.classList.remove('ativo');
        document.body.classList.remove('menu-aberto');
        botaoMenu.setAttribute('aria-expanded', 'false');
        botaoMenu.focus();
    }

    botaoMenu.addEventListener('click', abrirMenu);
    botaoFechar.addEventListener('click', fecharMenu);
    fundo.addEventListener('click', fecharMenu);

    document.addEventListener('keydown', function (evento) {
        if (!menu.classList.contains('aberto')) return;

        // Tecla Esc fecha o menu
        if (evento.key === 'Escape') {
            fecharMenu();
            return;
        }

        // Tab fica "preso" dentro do menu enquanto ele está aberto
        if (evento.key === 'Tab') {
            var itens = menu.querySelectorAll('a, button');
            var primeiro = itens[0];
            var ultimo = itens[itens.length - 1];

            if (evento.shiftKey && document.activeElement === primeiro) {
                evento.preventDefault();
                ultimo.focus();
            } else if (!evento.shiftKey && document.activeElement === ultimo) {
                evento.preventDefault();
                primeiro.focus();
            }
        }
    });
})();


/* =====================================================
   2. CALCULADORA DE POTÊNCIA DA ÁGUA
   Fórmula: potência (W) = 9,81 x vazão (L/s) x queda (m) x eficiência
   ===================================================== */
(function () {
    var form = document.getElementById('calculadora');
    if (!form) return;

    var campoVazao = document.getElementById('calc-vazao');
    var campoQueda = document.getElementById('calc-queda');
    var campoEficiencia = document.getElementById('calc-eficiencia');
    var resultado = document.getElementById('calc-resultado');

    function calcular() {
        var vazao = parseFloat(campoVazao.value.replace(',', '.'));
        var queda = parseFloat(campoQueda.value.replace(',', '.'));
        var eficiencia = parseFloat(campoEficiencia.value);

        // Valida: os dois valores precisam ser números maiores que zero
        if (isNaN(vazao) || isNaN(queda) || vazao <= 0 || queda <= 0) {
            resultado.textContent = 'Preencha a vazão e a queda com números maiores que zero.';
            return;
        }

        var potencia = 9.81 * vazao * queda * eficiencia;
        var kwhPorDia = (potencia * 24) / 1000;

        resultado.innerHTML =
            'Potência estimada: <strong>' + formatar(potencia, 0) + ' W</strong><br>' +
            'Energia por dia (funcionando 24 h): cerca de <strong>' + formatar(kwhPorDia, 1) + ' kWh</strong>';
    }

    // Mostra números no padrão brasileiro (vírgula decimal)
    function formatar(numero, casas) {
        return numero.toLocaleString('pt-BR', {
            minimumFractionDigits: casas,
            maximumFractionDigits: casas
        });
    }

    // Evento: o formulário não recarrega a página
    form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        calcular();
    });
})();


/* =====================================================
   3. FILTRO DE NOTÍCIAS (mostra/oculta cards por categoria)
   ===================================================== */
(function () {
    var botoes = document.querySelectorAll('.filtro');
    var cards = document.querySelectorAll('.noticia');
    var status = document.getElementById('filtro-status');

    if (!botoes.length) return;

    function filtrar(categoria) {
        var visiveis = 0;

        cards.forEach(function (card) {
            var mostrar = categoria === 'todas' || card.dataset.categoria === categoria;
            card.hidden = !mostrar;
            if (mostrar) visiveis++;
        });

        // Atualiza qual botão está ativo (aria-pressed também avisa o leitor de tela)
        botoes.forEach(function (botao) {
            botao.setAttribute('aria-pressed', botao.dataset.filtro === categoria ? 'true' : 'false');
        });

        status.textContent = 'Mostrando ' + visiveis + (visiveis === 1 ? ' informação.' : ' informações.');
    }

    botoes.forEach(function (botao) {
        botao.addEventListener('click', function () {
            filtrar(botao.dataset.filtro);
        });
    });
})();


/* =====================================================
   4. FORMULÁRIO DE CONTATO
   - validação com preventDefault, mensagem de erro e borda vermelha
   - rascunho salvo no localStorage (volta se a página for recarregada)
   - diagnóstico simples conforme o recurso que a pessoa tem
   ===================================================== */
(function () {
    var form = document.getElementById('form-contato');
    if (!form) return;

    var CHAVE = 'ters-rascunho-contato';
    var campos = form.querySelectorAll('input, select, textarea');
    var resumo = document.getElementById('resumo-erros');
    var aviso = document.getElementById('rascunho-aviso');
    var resultado = document.getElementById('resultado');

    // Sugestões do diagnóstico (links apontam para páginas do site)
    var DIAGNOSTICOS = {
        agua: {
            titulo: 'Você tem água em movimento: ótimo ponto de partida',
            texto: 'Antes de pensar em qualquer equipamento, meça a vazão (litros por segundo) e a queda (altura, em metros). Com esses dois números dá para saber se uma roda d\'água, um carneiro hidráulico ou uma microturbina faz sentido.',
            links: [
                ['hidraulica-funcionamento.html', 'Como a água vira energia'],
                ['hidraulica-impactos.html', 'Cuidados com o rio e a seca']
            ]
        },
        vento: {
            titulo: 'Vento exige medição antes de investir',
            texto: 'Gerador pequeno só compensa onde o vento é forte e constante. O caminho mais seguro é medir o vento por alguns meses e comparar com a energia solar, que costuma ser mais simples.',
            links: [
                ['eolica-residencial.html', 'Gerador de vento para sítios e casas'],
                ['solar-fotovoltaica.html', 'Comparar com energia solar']
            ]
        },
        sol: {
            titulo: 'Sol é a opção mais fácil de começar',
            texto: 'Painéis fotovoltaicos geram eletricidade e coletores solares aquecem água do banho. Os dois funcionam na maior parte do Brasil, desde que o local não tenha sombra durante o dia.',
            links: [
                ['solar-fotovoltaica.html', 'Eletricidade com painéis solares'],
                ['solar-termica.html', 'Água quente com o Sol']
            ]
        },
        'nao-sei': {
            titulo: 'Vamos descobrir juntos',
            texto: 'Comece olhando o que você tem de graça no terreno: água correndo com desnível, vento forte e constante ou muito sol sem sombra. Depois, olhe seu consumo em kWh na conta de luz. Nossas páginas explicam cada caso.',
            links: [
                ['solar-fotovoltaica.html', 'Energia solar'],
                ['eolica-residencial.html', 'Energia eólica'],
                ['hidraulica-funcionamento.html', 'Energia da água']
            ]
        }
    };

    /* ---------- Validação ---------- */

    // Devolve a mensagem de erro do campo (ou texto vazio se estiver certo)
    function mensagemDeErro(campo) {
        var valor = campo.value.trim();

        if (campo.required && campo.type === 'checkbox' && !campo.checked) {
            return 'Marque esta opção para continuar.';
        }
        if (campo.required && valor === '') {
            return 'Preencha este campo.';
        }
        if (campo.type === 'email' && valor !== '' && campo.validity.typeMismatch) {
            return 'Digite um e-mail válido, como nome@exemplo.com.';
        }
        if (campo.name === 'nome' && valor.length < 3) {
            return 'Digite seu nome com pelo menos 3 letras.';
        }
        if (campo.name === 'mensagem' && valor.length < 10) {
            return 'Escreva pelo menos 10 caracteres para a gente entender sua dúvida.';
        }
        return '';
    }

    // Mostra ou limpa o erro de um campo
    function validarCampo(campo) {
        var erro = mensagemDeErro(campo);
        var area = document.getElementById('erro-' + campo.id);

        if (erro) {
            campo.classList.add('invalido');
            campo.setAttribute('aria-invalid', 'true');
            if (area) area.textContent = erro;
        } else {
            campo.classList.remove('invalido');
            campo.removeAttribute('aria-invalid');
            if (area) area.textContent = '';
        }
        return erro === '';
    }

    /* ---------- Rascunho no localStorage ---------- */

    function salvarRascunho() {
        var dados = {};
        campos.forEach(function (campo) {
            dados[campo.name] = campo.value;
        });
        try {
            localStorage.setItem(CHAVE, JSON.stringify(dados));
        } catch (e) {
            // Se o navegador bloquear o armazenamento, o formulário continua funcionando
        }
    }

    function recuperarRascunho() {
        var dados = null;
        try {
            dados = JSON.parse(localStorage.getItem(CHAVE));
        } catch (e) {
            return;
        }
        if (!dados) return;

        var preencheu = false;
        campos.forEach(function (campo) {
            if (dados[campo.name]) {
                campo.value = dados[campo.name];
                preencheu = true;
            }
        });
        if (preencheu) aviso.hidden = false;
    }

    function apagarRascunho() {
        try {
            localStorage.removeItem(CHAVE);
        } catch (e) {
            // sem problema
        }
        aviso.hidden = true;
    }

    /* ---------- Resultado do diagnóstico ---------- */

    function mostrarResultado(nome, recurso) {
        var d = DIAGNOSTICOS[recurso] || DIAGNOSTICOS['nao-sei'];
        var primeiroNome = nome.trim().split(' ')[0];

        resultado.innerHTML = '';

        var titulo = document.createElement('h2');
        titulo.textContent = primeiroNome + ', ' + d.titulo.charAt(0).toLowerCase() + d.titulo.slice(1);

        var texto = document.createElement('p');
        texto.textContent = d.texto;

        var links = document.createElement('div');
        links.className = 'resultado-links';
        d.links.forEach(function (item) {
            var a = document.createElement('a');
            a.href = item[0];
            a.className = 'botao botao-contorno';
            a.textContent = item[1];
            links.appendChild(a);
        });

        var nota = document.createElement('p');
        nota.className = 'nota';
        nota.textContent = 'Este site é um projeto acadêmico: por enquanto o envio é apenas uma simulação, e a mensagem não é enviada a ninguém.';

        resultado.appendChild(titulo);
        resultado.appendChild(texto);
        resultado.appendChild(links);
        resultado.appendChild(nota);
        resultado.hidden = false;
        resultado.focus();
    }

    /* ---------- Eventos ---------- */

    // Salva o rascunho a cada digitação e tira o erro assim que o campo é corrigido
    campos.forEach(function (campo) {
        campo.addEventListener('input', function () {
            salvarRascunho();
            if (campo.classList.contains('invalido')) validarCampo(campo);
        });
        campo.addEventListener('blur', function () {
            if (campo.value !== '') validarCampo(campo);
        });
    });

    // Envio: impede o recarregamento e valida todos os campos
    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        var primeiroInvalido = null;
        var quantidade = 0;

        campos.forEach(function (campo) {
            if (!validarCampo(campo)) {
                quantidade++;
                if (!primeiroInvalido) primeiroInvalido = campo;
            }
        });

        if (primeiroInvalido) {
            resumo.textContent = quantidade === 1
                ? 'Corrija 1 campo antes de enviar.'
                : 'Corrija ' + quantidade + ' campos antes de enviar.';
            resumo.hidden = false;
            resultado.hidden = true;
            primeiroInvalido.focus();
            return;
        }

        resumo.hidden = true;
        mostrarResultado(form.elements.nome.value, form.elements.recurso.value);
        form.reset();
        apagarRascunho();
    });

    // Botão "Limpar formulário"
    document.getElementById('limpar-form').addEventListener('click', function () {
        form.reset();
        campos.forEach(function (campo) {
            campo.classList.remove('invalido');
            campo.removeAttribute('aria-invalid');
            var area = document.getElementById('erro-' + campo.id);
            if (area) area.textContent = '';
        });
        resumo.hidden = true;
        apagarRascunho();
    });

    recuperarRascunho();
})();


/* =====================================================
   5. MODO REVISÃO (para o editor)
   Abra a página com ?revisao no endereço
   (ex.: hidraulica-impactos.html?revisao) para ver os
   trechos que ainda não vão ao ar por falta de fonte.
   Adicionado em 15/11/2026. Só acrescenta a classe
   "modo-revisao" no <body>; o CSS (seção 18) é que
   mostra os elementos .so-revisao com contorno vermelho.
   ===================================================== */
(function () {
    // Procura "revisao" nos parâmetros do endereço (?revisao ou &revisao)
    if (/[?&]revisao(=|&|$)/.test(window.location.search)) {
        document.body.classList.add('modo-revisao');
    }
})();


/* =====================================================
   6. ALTO CONTRASTE (todas as páginas)
   Fase 7 (16/11/2026). O botão "Alto contraste" do cabeçalho liga e
   desliga a classe "alto-contraste" no <html>; o CSS (seção 16) troca
   as cores do site por fundo preto, texto branco e links amarelos.
   A escolha fica guardada no localStorage, então continua valendo
   nas outras páginas e depois de recarregar.
   ===================================================== */
(function () {
    var CHAVE = 'ters-alto-contraste';   // regra: chaves com o prefixo "ters-"
    var botao = document.getElementById('botao-contraste');
    var raiz = document.documentElement;  // o elemento <html>

    // Liga ou desliga o modo e avisa o leitor de tela pelo aria-pressed
    function aplicarContraste(ligado) {
        raiz.classList.toggle('alto-contraste', ligado);
        if (botao) {
            botao.setAttribute('aria-pressed', ligado ? 'true' : 'false');
        }
    }

    // try/catch: o localStorage pode estar bloqueado (ex.: navegação privada)
    function lerPreferencia() {
        try {
            return localStorage.getItem(CHAVE) === 'sim';
        } catch (erro) {
            return false;
        }
    }

    function salvarPreferencia(ligado) {
        try {
            localStorage.setItem(CHAVE, ligado ? 'sim' : 'nao');
        } catch (erro) {
            // Sem localStorage o botão continua funcionando, só não lembra a escolha
        }
    }

    aplicarContraste(lerPreferencia());

    if (!botao) return;

    botao.addEventListener('click', function () {
        var ligado = !raiz.classList.contains('alto-contraste');
        aplicarContraste(ligado);
        salvarPreferencia(ligado);
    });
})();
