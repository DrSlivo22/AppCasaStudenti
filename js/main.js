import { initMap, updateMapMarker } from './map.js';
import { initUI, showToast, toggleTheme } from './ui.js';
import { houseData, favorites, saveFavorite, currentIndex, nextHouse } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initUI(houseData, currentIndex);
    toggleTheme();

    // Aggiorna mappa al cambio house
    window.addEventListener('houseChanged', e => {
        const { coords } = e.detail;
        updateMapMarker(coords);
    });

    // Evento save => toast
    window.addEventListener('houseSaved', e => {
        showToast("✅ Casa salvata nei preferiti!");
    });
});
import { initMap, updateMapMarker } from './map.js';
import { initSwipe } from './swipe.js';
import { initUI } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initUI(updateMapMarker);
    initSwipe();
});
