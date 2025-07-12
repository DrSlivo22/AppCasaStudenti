let map, currentMarker;

export function initMap() {
    map = L.map("map").setView([45.4064, 11.8768], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19, attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

export function updateMapMarker(coords) {
    if (currentMarker) map.removeLayer(currentMarker);
    currentMarker = L.marker(coords).addTo(map);
    map.setView(coords, 14);
}
