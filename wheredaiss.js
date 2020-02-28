//https://api.wheretheiss.at/v1/satellites/25544

const issMap = L.map('issMap').setView([0,0], 5); /*Settings 
for lat, long and zoom default ex: ([lat, long], zoom)*/

//This is for OpenStreetMap tiles for the leaflet map. 
const attribution = 
'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl,{attribution});
tiles.addTo(issMap);

//Making ISS icon for marker. Options define sizes. 
const issIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [50,32],
    iconAnchor: [25,16],
})
const marker = L.marker([0, 0], {icon: issIcon} ).addTo(issMap);



const url = 'https://api.wheretheiss.at/v1/satellites/25544';
const lat = document.getElementById('lat');
const long = document.getElementById('long');

let initLoad = true;
findIss = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const {
        latitude,
        longitude
    } = data; // This is called
    //structuring. It creates seperate variables using only those
    //bits from the data being called.
    if (initLoad) {
        issMap.setView([latitude,longitude], 2);
        initLoad = false;
    }
    
    lat.textContent = ('Latitude: ' + latitude);
    long.textContent = ('Longitude: ' + longitude);    
    marker.setLatLng([latitude, longitude]);
}
// setInterval(2000, findIss());
findIss();

setInterval(findIss, 1000);
