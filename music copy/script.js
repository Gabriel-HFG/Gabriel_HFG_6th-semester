const soundsMap = {
    'a': 'sounds/cowbell.wav', 's': 'sounds/clap.wav', 'd': 'sounds/hihat.wav',
    'f': 'sounds/kick.wav', 'g': 'sounds/openhat.wav', 'h': 'sounds/snare.wav',
    'j': 'sounds/tom.wav', 'k': 'sounds/yuh.wav', 'l': 'sounds/snare.wav'
};

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let currentFX = 'none';
let loop = []; // Almacena { key, time }
let isRecording = false;
let isPlayingLoop = false;
let startTime;

// Botones de efectos
document.querySelectorAll('.fx-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.fx-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFX = btn.dataset.fx;
        document.getElementById('fx-name').innerText = btn.innerText;
    };
});

// Botones de transporte
document.getElementById('rec-btn').onclick = () => {
    isRecording = !isRecording;
    if(isRecording) {
        loop = [];
        startTime = audioCtx.currentTime;
        document.getElementById('status').innerText = "RECORDING...";
    } else {
        document.getElementById('status').innerText = "SAVED";
    }
};

document.getElementById('play-btn').onclick = () => {
    isPlayingLoop = !isPlayingLoop;
    if(isPlayingLoop) playLoop();
    document.getElementById('status').innerText = isPlayingLoop ? "PLAYING" : "STOP";
};

document.getElementById('clear-btn').onclick = () => {
    loop = [];
    document.getElementById('status').innerText = "CLEARED";
};

// Teclado
window.onkeydown = (e) => {
    const key = e.key.toLowerCase();
    if (soundsMap[key]) {
        playSample(key);
        if(isRecording) {
            loop.push({ key, time: audioCtx.currentTime - startTime });
        }
    }
};

async function playSample(key) {
    const res = await fetch(soundsMap[key]);
    const buf = await audioCtx.decodeAudioData(await res.arrayBuffer());
    const source = audioCtx.createBufferSource();
    source.buffer = buf;

    // --- PROCESAMIENTO DE DISTORSIÓN EXTREMA ---
    let node = source;
    if(currentFX === 'grime' || currentFX === 'crunch') {
        const dist = audioCtx.createWaveShaper();
        dist.curve = makeDistortionCurve(currentFX === 'grime' ? 800 : 200);
        node.connect(dist);
        node = dist;
    }

    if(currentFX === 'echo') {
        const delay = audioCtx.createDelay();
        delay.delayTime.value = 0.2;
        node.connect(delay);
        delay.connect(audioCtx.destination);
    }

    node.connect(audioCtx.destination);
    source.start();

    // Animación visual
    const el = document.querySelector(`.pad[data-key="${key}"]`);
    if(el) {
        el.classList.add('playing');
        setTimeout(() => el.classList.remove('playing'), 100);
    }
}

function playLoop() {
    if(!isPlayingLoop || loop.length === 0) return;
    loop.forEach(note => {
        setTimeout(() => {
            if(isPlayingLoop) playSample(note.key);
        }, note.time * 1000);
    });
    // Repetir bucle cada 4 segundos
    setTimeout(playLoop, 4000);
}

function makeDistortionCurve(amount) {
    let k = amount, n = 44100, curve = new Float32Array(n);
    for (let i=0 ; i < n; ++i ) {
        let x = i * 2 / n - 1;
        curve[i] = (3 + k) * x * 20 * (Math.PI / 180) / (Math.PI + k * Math.abs(x));
    }
    return curve;
}
