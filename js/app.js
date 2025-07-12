export const houseData = [
    { id:1, img:"https://via.placeholder.com/400x200?text=Casa+1", title:"Appartamento in centro", address:"Via Roma 12, Padova", price:"€450/mese", coords:[45.4064,11.8768] },
    { id:2, img:"https://via.placeholder.com/400x200?text=Casa+2", title:"Monolocale Arcella", address:"Via Tiziano 8", price:"€380/mese", coords:[45.4181,11.8872] },
];

export let currentIndex = 0;
export const favorites = JSON.parse(localStorage.getItem("favorites"))||[];

export function nextHouse() {
    currentIndex++;
    window.dispatchEvent(new CustomEvent('houseChanged', { detail: houseData[currentIndex]||{} }));
}

export function saveFavorite() {
    const house = houseData[currentIndex];
    if (house && !favorites.find(h=>h.id===house.id)) {
        favorites.push(h);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        window.dispatchEvent(new Event('houseSaved'));
    }
    nextHouse();
}
