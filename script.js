// ==========================================================================
// 1. DATASETS LOCAIS (ARRAYS DE OBJETOS PARA RENDERIZAÇÃO)
// ==========================================================================
const dbInovacoes = [
    { id: 1, icon: "🛰️", title: "Sensoriamento Espectral", desc: "Análise em tempo real de índices NDVI por satélite para combater preventivamente o estresse hídrico vegetal." },
    { id: 2, icon: "🧬", title: "Bioinsumos Sistêmicos", desc: "Uso de microrganismos vivos na terra para acabar com a dependência de fertilizantes químicos poluentes." },
    { id: 3, icon: "💧", title: "Irrigação por Telemetria", desc: "Gotejamento subterrâneo inteligente integrado com previsões climáticas, resultando em desperdício zero de água." }
];

const dbDiretrizesFatos = [
    { id: "f-1", tabTitle: "Uso Estrutural da Água", factText: "Sistemas tradicionais por aspersão perdem mais de 50% da água limpa antes mesmo dela chegar à raiz por conta da evaporação acelerada.", techHelp: "A microirrigação IoT monitora a umidade interna e irriga sob o solo diretamente na raiz, economizando mananciais inteiros." },
    { id: "f-2", tabTitle: "Saúde Biológica do Solo", factText: "O uso em massa de agrotóxicos comuns elimina a microbiota da terra, tornando o solo infértil e dependente de mais aditivos químicos.", techHelp: "A aplicação cirúrgica mapeada por drones substitui os pesticidas por agentes biológicos naturais focados, protegendo a vida do solo." }
];

const dbMetricasPreservacao = [
    { label: "Preservação de Fontes de Água Potável (%)", ecoVal: 94, badVal: 20 },
    { label: "Manutenção de Nutrientes e Vida no Solo (%)", ecoVal: 88, badVal: 15 }
];

let dbMuralPosts = [
    { id: 101, autor: "Fazenda_Recanto_Verde", tipo: "image", conteudo: "Substituímos os agroquímicos tradicionais por bioinsumos biológicos nesta safra. Resultado: Solo muito mais rico e fauna polinizadora totalmente preservada!", url: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?auto=format&fit=crop&w=600&q=80", subComments: ["Exemplo fantástico para a região!", "Como ficou o custo de produção por hectare?"] },
    { id: 102, autor: "TechCampo_Produtores", tipo: "text", conteudo: "Nossos drones de pulverização localizada reduziram o uso de defensivos em 45%. Economia financeira direta e proteção real para o meio ambiente.", url: "", subComments: ["Tecnologia de ponta a favor da vida."] }
];

const dicionarioTraducoes = {
    pt: {
        "nav-home": "🏠 Início", "nav-arcade": "> Área Infantil: Eco-Arcade", "nav-comments": "> Mural dos Agricultores",
        "nav-tech": "> Tecnologia Aplicada", "nav-facts": "> Fatos Ecológicos", "nav-metrics": "> Painel de Métricas", "nav-rating": "> Avaliar Plataforma",
        "manifesto-tag": "[ FUNDAMENTAÇÃO CIENTÍFICA / PRESERVAÇÃO PLANETÁRIA ]", "manifesto-title": "Por que a Tecnologia no Campo é Vital para a Sobrevivência do Planeta?",
        "game-tag": "[ ÁREA INFANTIL EDUCACIONAL ]", "game-title": "Missão Protetor Ambiental: Salve a Plantação",
        "game-desc": "Instruções de Jogo: Escolha seu herói ecológico. No computador, use as teclas [A / D] ou [Setas] para andar e [ESPAÇO] para pular. No celular ou tablet, use os botões arcade virtuais que aparecem logo abaixo da tela. Desvie das nuvens de agrotóxicos químicos (quadrados magenta) e colete as esferas de energia sustentável (círculos ciano). Dificuldade progressiva!",
        "game-choose-hero": "ESCOLHA SEU AGENTE BIOLÓGICO:", "reward-congratulations": "🏆 CERTIFICADO DE ECO-HERÓI CONQUISTADO!",
        "reward-desc": "Incrível! Você neutralizou a dispersão de defensivos químicos, protegeu a plantação e coletou energia limpa. Assista abaixo ao documentário sobre biotecnologia agrícola:",
        "reward-btn": "IMPRIMIR CERTIFICADO DIGITAL", "feed-tag": "[ RELATOS TÉCNICOS DE CAMPO ]",
        "feed-title": "Mural Interativo da Comunidade Agrícola", "feed-submit": "PUBLICAR RELATO NO MURAL",
        "tech-tag": "[ INFRAESTRUTURA DIGITAL APLICADA ]", "tech-title": "Sistemas Tecnológicos Aplicados ao Manejo de Precisão",
        "facts-tag": "[ ANÁLISE DE IMPACTO AMBIENTAL ]", "facts-title": "Mapeamento de Desafios Reais e Resoluções Práticas",
        "metrics-tag": "[ COMPARATIVO QUANTITATIVO ]", "metrics-title": "Balanço Ambiental: Modelo Tecnológico Sustentável vs Convencional",
        "rating-tag": "[ VALIDACAO DE UX ]", "rating-title": "Avalie o Nível Informativo Desta Plataforma",
        "rating-desc": "Seu feedback valida o alcance e a clareza das informações exibidas:", "rating-not-rated": "Nenhuma avaliação enviada até o momento."
    },
    en: {
        "nav-home": "🏠 Home/Start", "nav-arcade": "> Kids Zone: Eco-Arcade", "nav-comments": "> Farmers Wall",
        "nav-tech": "> Applied Tech", "nav-facts": "> Eco Facts", "nav-metrics": "> Metrics Board", "nav-rating": "> Rate Us",
        "manifesto-tag": "[ SCIENTIFIC APPROACH / PLANETARY DEFENSE ]", "manifesto-title": "Why Agri-Tech is Crucial for the Planet's Survival?",
        "game-tag": "[ EDUCATIONAL KIDS ZONE ]", "game-title": "Eco-Protector Mission: Save the Field",
        "game-desc": "Game Instructions: Pick your hero. On computers, use [A/D] or [Arrows] to run and [SPACE] to jump. On mobile, use the virtual arcade buttons. Dodge chemical pesticide clouds (magenta) and collect sustainable energy (cyan). Progression difficulty!",
        "game-choose-hero": "SELECT YOUR BIOLOGICAL AGENT:", "reward-congratulations": "🏆 ECO-HERO CERTIFICATE UNLOCKED!",
        "reward-desc": "Excellent! You neutralised the chemicals, protected the soil, and collected green energy. Watch the biotech documentary below:",
        "reward-btn": "DOWNLOAD DIGITAL CERTIFICATE", "feed-tag": "[ FIELD TECHNICAL REPORTS ]",
        "feed-title": "Agricultural Community Interactive Wall", "feed-submit": "PUBLISH REPORT ON THE WALL",
        "tech-tag": "[ APPLIED DIGITAL INFRASTRUCTURE ]", "tech-title": "Technological Systems for Precision Farming",
        "facts-tag": "[ ENVIRONMENTAL IMPACT ANALYSIS ]", "facts-title": "Mapping Real Challenges and Practical Solutions",
        "metrics-tag": "[ QUANTITATIVE COMPARISON ]", "metrics-title": "Environmental Balance: Sustainable Tech Model vs Conventional",
        "rating-tag": "[ UX VALIDATION ]", "rating-title": "Rate the Information Quality of This Platform",
        "rating-desc": "Your feedback validates the impact and clarity of the facts presented:", "rating-not-rated": "No ratings sent yet."
    }
};

// ==========================================================================
// 2. RENDERIZADORES DINÂMICOS
// ==========================================================================
function injetarComponentesDinamicos() {
    const track = document.getElementById('carousel-track');
    if (track) {
        track.innerHTML = dbInovacoes.map(item => `
            <div class="carousel-item">
                <h3>${item.icon} ${item.title}</h3>
                <p style="color:#C6D0C5; font-size:1rem; text-align:justify; margin-top:8px;">${item.desc}</p>
            </div>
        `).join('');
    }

    const headerTabs = document.getElementById('tabs-header-list');
    const bodyTabs = document.getElementById('tabs-content-pane');
    if (headerTabs && bodyTabs) {
        headerTabs.innerHTML = dbDiretrizesFatos.map((tab, idx) => `
            <button role="tab" id="tab-btn-${tab.id}" aria-selected="${idx === 0}" class="tab-trigger" onclick="switchTabEngine(this, '${tab.id}')">${tab.tabTitle}</button>
        `).join('');

        bodyTabs.innerHTML = dbDiretrizesFatos.map((tab, idx) => `
            <div id="panel-box-${tab.id}" class="tab-view-panel ${idx === 0 ? 'active' : ''}">
                <p style="color:var(--game-pink); font-weight:700; margin-bottom:5px; font-family:'Share Tech Mono', monospace;">⚠️ SISTEMA ANTIGO SEM TECNOLOGIA:</p>
                <p style="margin-bottom:15px; font-size:1.05rem; text-align:justify; color:#EBF2EA;">${tab.factText}</p>
                <p style="color:var(--game-mint); font-weight:700; margin-bottom:5px; font-family:'Share Tech Mono', monospace;">⚙️ MODELO SUSTENTÁVEL DA ATUALIDADE:</p>
                <p style="font-size:1.05rem; text-align:justify; color:#EBF2EA;">${tab.techHelp}</p>
            </div>
        `).join('');
    }

    const containerMetricas = document.getElementById('metrics-charts-grid');
    if (containerMetricas) {
        containerMetricas.innerHTML = dbMetricasPreservacao.map(m => `
            <div class="chart-card">
                <strong class="chart-title-lbl">${m.label}</strong>
                <span style="font-size:0.9rem; color:var(--game-mint); display:block; margin-bottom:4px; font-family:'Share Tech Mono', monospace;">Manejo Guiado por Dados</span>
                <div class="meter-rail"><div class="meter-bar eco" data-target="${m.ecoVal}"></div></div>
                <span style="font-size:0.9rem; color:var(--game-pink); display:block; margin-bottom:4px; font-family:'Share Tech Mono', monospace;">Agricultura Convencional Predatória</span>
                <div class="meter-rail"><div class="meter-bar bad" data-target="${m.badVal}"></div></div>
            </div>
        `).join('');
    }
}

window.switchTabEngine = function(el, id) {
    document.querySelectorAll('.tab-trigger').forEach(b => b.setAttribute('aria-selected', 'false'));
    document.querySelectorAll('.tab-view-panel').forEach(p => p.classList.remove('active'));
    el.setAttribute('aria-selected', 'true');
    document.getElementById(`panel-box-${id}`).classList.add('active');
};

function renderizarMuralInstagram() {
    const container = document.getElementById('dynamic-feed-container');
    if (!container) return;

    container.innerHTML = dbMuralPosts.map(post => {
        let foto = (post.tipo === 'image' && post.url) ? `<img class="feed-img" src="${post.url}" alt="Foto de @${post.autor}">` : '';
        let blocosComentarios = post.subComments.map(c => `<div class="sub-comment-node"><strong>Validado:</strong> ${c}</div>`).join('');

        return `
            <div class="feed-card game-border-blue">
                <div class="feed-header">
                    <strong>@${post.autor}</strong>
                    <span>CONEXÃO #00${post.id}</span>
                </div>
                <p style="color:#FFF; font-size:1.05rem; text-align:justify;">${post.conteudo}</p>
                ${foto}
                <div class="sub-comments-area">
                    ${blocosComentarios}
                    <div class="comment-input-box">
                        <input type="text" placeholder="Escreva uma validação técnica..." aria-label="Comentar" onkeydown="if(event.key==='Enter') postarComentarioInterno(this, ${post.id})">
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

window.postarComentarioInterno = function(input, id) {
    const post = dbMuralPosts.find(p => p.id === id);
    if (post && input.value.trim()) {
        post.subComments.push(input.value.trim());
        input.value = '';
        renderizarMuralInstagram();
    }
};

// ==========================================================================
// 3. ENGINES DE ACESSIBILIDADE (AUDIO-NARRAÇÃO E LEGENDAS)
// ==========================================================================
let narradorAtivo = false;
const synth = window.speechSynthesis;

function narrarTextoAcessivel(texto) {
    if (!narradorAtivo || !synth) return;
    synth.cancel(); // Para leituras anteriores para evitar travamentos de áudio sobreposto
    let fala = new SpeechSynthesisUtterance(texto);
    fala.lang = document.documentElement.lang === 'en' ? 'en-US' : 'pt-BR';
    synth.speak(fala);
}

const dbLegendasVideo = [
    { s: 1, txt: "[Transcrição IA]: Escaneamento por drones ativado. Iniciando mapeamento da lavoura." },
    { s: 5, txt: "[Transcrição IA]: Monitoramento hídrico aponta solo em condições ideais de conservação." },
    { s: 9, txt: "[Transcrição IA]: Redução no uso de químicos químicos comprovada por análise espectral." },
    { s: 12, txt: "[Transcrição IA]: Ciclo de manejo finalizado com sucesso. Sustentabilidade garantida." }
];

function ativarLegendasIA() {
    const video = document.getElementById('eco-documentary-video');
    const overlay = document.getElementById('ai-subtitles-box');
    if (!video || !overlay) return;

    video.addEventListener('timeupdate', () => {
        let tempo = Math.floor(video.currentTime);
        let legenda = dbLegendasVideo.find(l => tempo >= l.s && tempo < l.s + 3);
        if (legenda) overlay.innerText = legenda.txt;
        else if (video.paused) overlay.innerText = "[Transcrição pausada]";
        else overlay.innerText = "[IA analisando o vídeo em tempo real...]";
    });
}

// ==========================================================================
// 4. MOTOR DO JOGO MULTIPLATAFORMA (CANVAS + TECLADO + TOUCH DE CELULAR)
// ==========================================================================
let canvas, ctx, loopId;
let gameAtivo = false;
let heroiEmoji = "";

let player = { x: 50, y: 180, w: 26, h: 26, vx: 0, vy: 0, noSolo: false, vel: 5, forcaPulo: 10.5 };
let gravidade = 0.5;
let score = 0;
let vidas = 3;
let dificuldadeNivel = 1;

const paletas = {
    neon: { top: '#00FF66', base: '#1D2618', item: '#00E5FF', bad: '#FF0055', fundo: '#0B0F09' },
    cyber: { top: '#FFD600', base: '#111', item: '#00FF66', bad: '#FF00FF', fundo: '#000000' },
    retro: { top: '#FFF', base: '#444', item: '#FFF', bad: '#777', fundo: '#151515' }
};
let paletaNome = 'neon';

const platforms = [
    { x: 0, y: 320, width: 800, height: 30 },
    { x: 130, y: 220, width: 160, height: 10 },
    { x: 450, y: 160, width: 170, height: 10 },
    { x: 100, y: 110, width: 120, height: 10 }
];
let energyItems = [
    { x: 200, y: 180, r: 8, pegou: false },
    { x: 520, y: 120, r: 8, pegou: false },
    { x: 150, y: 70, r: 8, pegou: false },
    { x: 700, y: 280, r: 8, pegou: false },
    { x: 350, y: 280, r: 8, pegou: false }
];
let pesticideEnemies = [
    { x: 300, y: 296, w: 24, h: 24, velX: -1.5, xMin: 120, xMax: 500 },
    { x: 470, y: 136, w: 24, h: 24, velX: -1, xMin: 450, xMax: 620 }
];

let inputsAtivos = {};
let audioCtx = null;
let somLigado = false;

function tocarSomBeep(freq, onda, tempo) {
    if (!somLigado) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        let osc = audioCtx.createOscillator();
        let gain = audioCtx.createGain();
        osc.type = onda;
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + tempo);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + tempo);
    } catch(e) {}
}

function startEcoGame(emoji) {
    heroiEmoji = emoji;
    document.getElementById('char-selection-panel').classList.add('hidden');
    document.getElementById('game-frame-wrapper').classList.remove('hidden');
    
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    
    if (!gameAtivo) {
        gameAtivo = true;
        // Escuta teclado (PC)
        window.addEventListener('keydown', e => { inputsAtivos[e.key] = true; });
        window.addEventListener('keyup', e => { inputsAtivos[e.key] = false; });
        
        // CONFIGURAÇÃO DOS EVENTOS UNIFICADOS (TOUCH PARA CELULAR + MOUSE PARA PC)
        configurarBotoesTouchMobile();
        
        loopJogo();
    }
}

function configurarBotoesTouchMobile() {
    const btnEsq = document.getElementById('touch-left');
    const btnDir = document.getElementById('touch-right');
    const btnPulo = document.getElementById('touch-jump');

    // PointerEvents lidam nativamente com touch e clique de forma idêntica
    btnEsq.addEventListener('pointerdown', (e) => { e.preventDefault(); inputsAtivos['ArrowLeft'] = true; });
    btnEsq.addEventListener('pointerup', (e) => { e.preventDefault(); inputsAtivos['ArrowLeft'] = false; });
    btnEsq.addEventListener('pointerleave', () => { inputsAtivos['ArrowLeft'] = false; });

    btnDir.addEventListener('pointerdown', (e) => { e.preventDefault(); inputsAtivos['ArrowRight'] = true; });
    btnDir.addEventListener('pointerup', (e) => { e.preventDefault(); inputsAtivos['ArrowRight'] = false; });
    btnDir.addEventListener('pointerleave', () => { inputsAtivos['ArrowRight'] = false; });

    btnPulo.addEventListener('pointerdown', (e) => { 
        e.preventDefault(); 
        inputsAtivos['ArrowUp'] = true; 
    });
    btnPulo.addEventListener('pointerup', (e) => { 
        e.preventDefault(); 
        inputsAtivos['ArrowUp'] = false; 
    });
}

function loopJogo() {
    if (!gameAtivo) return;

    // Movimentação Esquerda / Direita
    if (inputsAtivos['ArrowRight'] || inputsAtivos['d'] || inputsAtivos['D']) player.vx = player.vel;
    else if (inputsAtivos['ArrowLeft'] || inputsAtivos['a'] || inputsAtivos['A']) player.vx = -player.vel;
    else player.vx = 0;

    // Pulo
    if ((inputsAtivos['ArrowUp'] || inputsAtivos[' '] || inputsAtivos['w'] || inputsAtivos['W']) && player.noSolo) {
        player.vy = -player.forcaPulo;
        player.noSolo = false;
        tocarSomBeep(350, 'square', 0.1);
    }

    player.vy += gravidade;
    player.x += player.vx;
    player.y += player.vy;

    // Barreiras laterais
    if (player.x < 0) player.x = 0;
    if (player.x > canvas.width - player.w) player.x = canvas.width - player.w;

    // Colisões com Plataformas
    player.noSolo = false;
    platforms.forEach(p => {
        if (player.x < p.x + p.width && player.x + player.w > p.x &&
            player.y + player.h <= p.y + 8 && player.y + player.h + player.vy >= p.y) {
            player.vy = 0;
            player.y = p.y - player.h;
            player.noSolo = true;
        }
    });

    // Piorando a dificuldade devagar com base no progresso
    dificuldadeNivel = Math.min(3, Math.floor(score / 2) + 1);
    const viewNivel = document.getElementById('game-level-view');
    if (viewNivel) {
        if (dificuldadeNivel === 1) viewNivel.innerText = "DIFICULDADE: FÁCIL";
        if (dificuldadeNivel === 2) viewNivel.innerText = "DIFICULDADE: MÉDIA (+50% VELOCIDADE DOS INIMIGOS)";
        if (dificuldadeNivel === 3) viewNivel.innerText = "DIFICULDADE: CRÍTICA (+100% VELOCIDADE DOS INIMIGOS)";
    }

    // Inimigos com Multiplicador de Dificuldade Progressiva
    pesticideEnemies.forEach(e => {
        let multiplicador = 1.0 + (dificuldadeNivel - 1) * 0.5;
        e.x += e.velX * multiplicador;

        if (e.x <= e.xMin) { e.x = e.xMin; e.velX = Math.abs(e.velX); }
        if (e.x + e.w >= e.xMax) { e.x = e.xMax - e.w; e.velX = -Math.abs(e.velX); }

        // Dano ao Herói
        if (player.x < e.x + e.w && player.x + player.w > e.x &&
            player.y < e.y + e.h && player.y + player.h > e.y) {
            vidas--;
            tocarSomBeep(120, 'sawtooth', 0.3);
            player.x = 50; player.y = 180;
            document.getElementById('game-lives').innerText = `INTEGRIDADE: ${"❤️".repeat(vidas)}`;
        }
    });

    // Coleta dos Itens
    energyItems.forEach(item => {
        if (!item.pegou && player.x < item.x + item.r*2 && player.x + player.w > item.x &&
            player.y < item.y + item.r*2 && player.y + player.h > item.y) {
            item.pegou = true;
            score++;
            tocarSomBeep(600, 'sine', 0.15);
            document.getElementById('game-score').innerText = `ENERGIA LIMPA: ${score}/5`;
        }
    });

    // Renderização no Canvas
    let cor = paletas[paletaNome];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Plataformas
    platforms.forEach(p => {
        ctx.fillStyle = cor.base;
        ctx.fillRect(p.x, p.y, p.width, p.height);
        ctx.fillStyle = cor.top;
        ctx.fillRect(p.x, p.y, p.width, 4);
    });

    // Energias
    energyItems.forEach(item => {
        if (!item.pegou) {
            ctx.fillStyle = cor.item;
            ctx.beginPath();
            ctx.arc(item.x, item.y, item.r, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    // Inimigos
    pesticideEnemies.forEach(e => {
        ctx.fillStyle = cor.bad;
        ctx.fillRect(e.x, e.y, e.w, e.h);
    });

    // Desenha o Emoji
    ctx.font = `${player.h}px Arial`;
    ctx.textBaseline = 'top';
    ctx.fillText(heroiEmoji, player.x, player.y);

    // Fim de Jogo ou Vitória
    if (vidas <= 0) {
        gameAtivo = false;
        ctx.fillStyle = 'rgba(0,0,0,0.9)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'var(--game-pink)';
        ctx.font = '16px "Press Start 2P"';
        ctx.fillText("SIMULAÇÃO RETIDA: CAMPO DEGRADADO!", 80, 180);
    } else if (score >= 5) {
        gameAtivo = false;
        ctx.fillStyle = 'rgba(0,0,0,0.9)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'var(--game-mint)';
        ctx.font = '16px "Press Start 2P"';
        ctx.fillText("MANEJO REGENERATIVO CONCLUÍDO!", 100, 180);
        
        document.getElementById('reward-panel').classList.remove('hidden');
        ativarLegendasIA();
        tocarSomBeep(880, 'sine', 0.5);
    } else {
        loopId = requestAnimationFrame(loopJogo);
    }
}

// ==========================================================================
// 5. REDIMENSIONADOR E ACESSIBILIDADE DE TELA
// ==========================================================================
let baseSize = 14;
function mudarTamanhoFonte(mod) {
    baseSize += mod;
    if (baseSize < 12) baseSize = 12;
    if (baseSize > 18) baseSize = 18;
    document.documentElement.style.setProperty('--font-size-base', `${baseSize}px`);
}

window.translateEngine = function(lang) {
    document.querySelectorAll('.lang-selector button').forEach(b => b.classList.remove('active-lang'));
    const ativo = lang === 'pt' ? document.getElementById('btn-lang-pt') : document.getElementById('btn-lang-en');
    if (ativo) ativo.classList.add('active-lang');
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        let key = el.getAttribute('data-i18n');
        if (dicionarioTraducoes[lang] && dicionarioTraducoes[lang][key]) {
            el.innerText = dicionarioTraducoes[lang][key];
        }
    });
};

// ==========================================================================
// 6. INICIALIZAÇÃO E ASSINATURA DE EVENTOS (DOM)
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
    injetarComponentesDinamicos();
    renderizarMuralInstagram();

    // Alternar campo URL no Mural
    const typeSelect = document.getElementById('media-type');
    const urlInput = document.getElementById('media-url');
    if (typeSelect && urlInput) {
        typeSelect.addEventListener('change', () => {
            if (typeSelect.value === 'image') urlInput.classList.remove('hidden');
            else urlInput.classList.add('hidden');
        });
    }

    // Formulário do Mural
    const form = document.getElementById('agro-post-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            dbMuralPosts.unshift({
                id: Math.floor(Math.random() * 900),
                autor: document.getElementById('author-name').value.replace(/\s+/g, '_'),
                tipo: typeSelect.value,
                conteudo: document.getElementById('post-text').value,
                url: urlInput.value,
                subComments: []
            });
            form.reset();
            urlInput.classList.add('hidden');
            renderizarMuralInstagram();
        });
    }

    // Menu Sanduíche (Suporte total a clique no Computador e toque no Celular)
    const sidebar = document.getElementById('sidebar-menu');
    document.getElementById('menu-toggle').addEventListener('click', () => {
        sidebar.classList.add('open');
        sidebar.setAttribute('aria-hidden', 'false');
        document.getElementById('menu-close').focus();
    });
    document.getElementById('menu-close').addEventListener('click', () => {
        sidebar.classList.remove('open');
        sidebar.setAttribute('aria-hidden', 'true');
    });
    document.querySelectorAll('.nav-item-link').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebar.setAttribute('aria-hidden', 'true');
        });
    });

    // Binds de Acessibilidade
    document.getElementById('btn-font-increase').addEventListener('click', () => mudarTamanhoFonte(1));
    document.getElementById('btn-font-decrease').addEventListener('click', () => mudarTamanhoFonte(-1));
    document.getElementById('btn-contrast').addEventListener('click', () => document.body.classList.toggle('high-contrast'));

    // Leitor de Tela Inteligente por Voz
    document.getElementById('btn-ai-narration').addEventListener('click', (e) => {
        narradorAtivo = !narradorAtivo;
        e.target.innerText = narradorAtivo ? "🔊 Narrador: ON" : "🔊 Narrador: OFF";
        if (narradorAtivo) narrarTextoAcessivel("Leitura assistiva por voz ativada.");
    });

    document.querySelectorAll('main section, h2, h3, .tab-trigger, footer strong').forEach(el => {
        const lerElemento = () => { if (narradorAtivo) narrarTextoAcessivel(el.innerText); };
        el.addEventListener('mouseenter', lerElemento);
        el.addEventListener('focus', lerElemento);
    });

    // Gatilhos dos Emojis do Jogo
    document.getElementById('btn-char-water').addEventListener('click', () => startEcoGame('💦'));
    document.getElementById('btn-char-leaf').addEventListener('click', () => startEcoGame('🍃'));
    document.getElementById('btn-char-globe').addEventListener('click', () => startEcoGame('🌏'));

    document.getElementById('game-palette-select').addEventListener('change', (e) => { paletaNome = e.target.value; });
    document.getElementById('btn-toggle-audio').addEventListener('click', (e) => {
        somLigado = !somLigado;
        e.target.innerText = somLigado ? "🎵 Áudio: ON" : "🎵 Áudio: OFF";
    });

    document.getElementById('btn-fullscreen-game').addEventListener('click', () => {
        const target = document.getElementById('gameCanvas');
        if (target.requestFullscreen) target.requestFullscreen();
        else if (target.webkitRequestFullscreen) target.webkitRequestFullscreen();
    });

    document.getElementById('btn-action-cert').addEventListener('click', () => {
        alert("Certificado de Conduta Sustentável gerado com sucesso em nome do portador.");
    });

    // Lógica do Carrossel
    let carrosselIdx = 0;
    const track = document.getElementById('carousel-track');
    document.getElementById('carousel-next').addEventListener('click', () => {
        const max = window.innerWidth >= 768 ? dbInovacoes.length - 2 : dbInovacoes.length;
        carrosselIdx = (carrosselIdx + 1) % max;
        let p = window.innerWidth >= 768 ? 33.333 : 100;
        track.style.transform = `translateX(-${carrosselIdx * p}%)`;
    });
    document.getElementById('carousel-prev').addEventListener('click', () => {
        if (carrosselIdx > 0) carrosselIdx--;
        let p = window.innerWidth >= 768 ? 33.333 : 100;
        track.style.transform = `translateX(-${carrosselIdx * p}%)`;
    });

    // Sistema de Estrelas de Avaliação
    const estrelas = document.querySelectorAll('.star-btn');
    const txtStatus = document.getElementById('rating-status-text');
    estrelas.forEach(star => {
        star.addEventListener('click', () => {
            let val = parseInt(star.getAttribute('data-value'));
            estrelas.forEach(s => {
                let sVal = parseInt(s.getAttribute('data-value'));
                s.classList.toggle('selected', sVal <= val);
            });
            txtStatus.innerText = `Obrigado! Sua nota de nível [${val}/5 estrelas] foi enviada para validação.`;
        });
    });

    // PERFORMANCE ANTITRAVAMENTO: Animações de Entrada suaves e Barras com Intersection Observer
    const obsOpcoes = { threshold: 0.15 };
    const secaoObs = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.id === 'metricas') {
                    entry.target.querySelectorAll('.meter-bar').forEach(b => {
                        b.style.width = `${b.getAttribute('data-target')}%`;
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, obsOpcoes);

    document.querySelectorAll('.reveal').forEach(s => secaoObs.observe(s));
});