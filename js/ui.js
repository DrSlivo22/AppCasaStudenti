import { houseData, currentIndex, nextHouse, saveFavorite } from './app.js';

const houseCard = document.getElementById("house-card");
const houseImg = document.getElementById("house-img");
const houseTitle = document.getElementById("house-title");
const houseAddress = document.getElementById("house-address");
const housePrice = document.getElementById("house-price");
const rejectBtn = document.getElementById("reject-btn");
const saveBtn = document.getElementById("save-btn");
const noHousesMsg = document.getElementById("no-houses-message");
const toastEl = document.getElementById("toast");
const themeToggle = document.getElementById("theme-toggle");

export function initUI(data, idx) {
    updateUI();

    rejectBtn.addEventListener('click', () => { nextHouse(); updateUI(); });
    saveBtn.addEventListener('click', () => { saveFavorite(); updateUI(); });
}

function updateUI() {
    if (currentIndex >= houseData.length) {
        houseCard.style.display = "none";
        noHousesMsg.style.display = "block";
    } else {
        const h = houseData[currentIndex];
        houseCard.style.display = "block";
        noHousesMsg.style.display = "none";
        houseImg.src = h.img;
        houseTitle.textContent = h.title;
        houseAddress.textContent = h.address;
        housePrice.textContent = h.price;
        window.dispatchEvent(new CustomEvent('houseChanged', { detail: h }));
    }
}

export function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.style.display = "block";
    setTimeout(() => { toastEl.style.opacity = "1"; }, 50);
    setTimeout(() => {
        toastEl.style.opacity = "0";
        setTimeout(()=>toastEl.style.display="none",500);
    }, 2000);
}

export function toggleTheme() {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle("dark");
    });
}
