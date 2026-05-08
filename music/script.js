
const sounds = {
    'a': 'sounds/cowbell.wav',
    's': 'sounds/clap.wav',
    'd': 'sounds/hihat.wav',
    'f': 'sounds/kick.wav',
    'g': 'sounds/openhat.wav',
    'h': 'sounds/snare.wav',
    'j': 'sounds/tom.wav',
    'k': 'sounds/yuh.wav',
    'l': 'sounds/snare.wav'
};

/* window.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    if (sounds[key]) {
        const audio = new Audio(sounds[key]);

        audio.currentTime = 0;

        audio.play().catch(error => {
            console.error("Error: Haz clic en la página primero para activar el audio.");
        });

        console.log(`Tocando: ${sounds[key]}`);
    }
}); */


window.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    if (sounds[key]) {
        const keyElement = document.querySelector(`.key[data-key="${key}"]`);
        if (keyElement) {
            keyElement.classList.add('playing');
            setTimeout(() => keyElement.classList.remove('playing'), 100);
        }
        const audio = new Audio(sounds[key]);
        audio.currentTime = 0;
        audio.play().catch(() => {});
    }
});
