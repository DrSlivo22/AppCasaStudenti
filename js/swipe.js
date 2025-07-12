import { nextHouse, saveFavorite } from './app.js';
import { showToast } from './ui.js';

export function initSwipe() {
    const card = document.getElementById('house-card');
    let startX, currentX, startTime;

    card.addEventListener('pointerdown', e => {
        startX = e.clientX;
        startTime = Date.now();
        card.setPointerCapture(e.pointerId);
        card.style.transition = 'none';
    });

    card.addEventListener('pointermove', e => {
        if (startX === undefined) return;
        currentX = e.clientX - startX;
        card.style.transform = `translateX(${currentX}px) rotate(${currentX/10}deg)`;
    });

    card.addEventListener('pointerup', e => {
        if (startX === undefined) return;
        const dx = e.clientX - startX;
        const dt = Date.now() - startTime;
        card.releasePointerCapture(e.pointerId);

        const threshold = 100;
        if (Math.abs(dx) > threshold && dt < 1000) {
            if (dx < 0) {
                nextHouse();
            } else {
                saveFavorite();
                showToast("✅ Casa salvata nei preferiti!");
            }
        }
        card.style.transition = 'transform 0.3s';
        card.style.transform = '';
        startX = undefined;
    });
}
