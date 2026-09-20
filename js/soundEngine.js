class SoundEngine {
    constructor() {
        this.audioCtx = null;
        this.masterVolume = 0.05; // Облачная, мягкая громкость
    }

    _initContext() {
        if (!this.audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.audioCtx = new AudioContext();
            }
        }
        if (this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
    }

    _playTone(frequency, duration, attackTime = 0.08) {
        try {
            this._initContext();
            if (!this.audioCtx) return;

            const oscillator = this.audioCtx.createOscillator();
            const gainNode = this.audioCtx.createGain();

            oscillator.type = 'sine'; // Чистая синусоида без резких углов
            oscillator.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);

            gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
            gainNode.gain.linearRampToValueAtTime(this.masterVolume, this.audioCtx.currentTime + attackTime);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

            oscillator.connect(gainNode);
            gainNode.connect(this.audioCtx.destination);

            oscillator.start();
            oscillator.stop(this.audioCtx.currentTime + duration);
        } catch (e) {
            console.warn('Audio context error:', e);
        }
    }

    playHover() {
        this._playTone(220, 0.25, 0.08); // Мягкий гул
    }

    playClick() {
        this._playTone(330, 0.35, 0.04); // Легкий клик
    }
}

window.soundEngine = new SoundEngine();

// Озвучка всех интерактивных элементов
document.addEventListener('DOMContentLoaded', () => {
    const interactiveSelector = 'a, button, .nav-item, .card, .modal-close, [role="button"]';

    // Используем event delegation с проверкой перехода мышкой (relatedTarget)
    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest(interactiveSelector);
        if (!target) return;

        // Проверяем, откуда пришел курсор.
        // Если мышь уже находилась внутри этой же карточки/кнопки, звук НЕ проигрываем.
        const related = e.relatedTarget;
        if (related && target.contains(related)) {
            return;
        }

        window.soundEngine.playHover();
    });

    document.addEventListener('click', (e) => {
        if (e.target.closest(interactiveSelector)) {
            window.soundEngine.playClick();
        }
    });
});