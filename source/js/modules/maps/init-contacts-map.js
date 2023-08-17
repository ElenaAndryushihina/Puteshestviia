import exports from '../../vendor/leaflet';

const initContactsMap = () => {
  // указание координат
  const geoLat = 55.774906445034176; /* Широта, Latitude, lat */
  const geoLon = 37.632641498705205; /* Долгота, Longitude, lng */

  // Где вывести карту.
  const element = document.getElementById('os-map');

  // Создание карты Leaflet.
  const map = L.map(element, {scrollWheelZoom: false}).setView([geoLat, geoLon], 14);
  L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution: '&copy; <a href="copyright">Openstreetmap</a>',
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }).addTo(map);

  const myIcon = L.icon({
    iconUrl: 'img/svg/map-pin.svg',
    iconSize: [34, 44],
    iconAnchor: [19, 50],
  });

  // Координаты GPS для метки.
  const target = L.latLng([geoLat, geoLon]);

  // Установка центра карты с масштабом 19.
  map.setView(target, 19);

  // Установка маркера в том же месте.
  L.marker(target, {icon: myIcon}).addTo(map);

};

export {initContactsMap};

