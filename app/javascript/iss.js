const API_URL = "https://api.wheretheiss.at/v1/satellites/25544";

const mymap = L.map('mapid').setView([51.505, -0.09], 13);

const marker = L.marker([0,0].addTo(mymap));

const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';