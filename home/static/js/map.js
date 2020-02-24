const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let mymap = L.map('myMap').setView([-12.000218, -77.083402], 13)
L.tileLayer(tilesProvider, {
    maxZoom: 18,
}).addTo(mymap);

// let iconMarker = L.icon({
//     iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
//     iconSize: [45, 45],
//     iconAnchor: [30, 60]
// });
// let marker = L.marker([-12.000218, -77.08340] ).addTo(mymap)
//  .bindPopup('<b>Edificio Cielo</b>')
//     .openPopup();



//     let markerl = L.marker([-11.9914768, -77.0818035]).addTo(mymap)
//     .bindPopup('<b>Lucia</b><br>Los Olivos');

//     let markers = L.marker([-12.0040111, -77.0606133]).addTo(mymap)
//     .bindPopup('<b>Sandra</b><br>Independencia');

//     let markerJ = L.marker([-11.9988643, -77.0848270]).addTo(mymap)
//     .bindPopup('<b>Juan</b><br>San Martín de Porres');

//     let markera = L.marker([-12.0059171, -77.0833524]).addTo(mymap)
//     .bindPopup('<b>Antony</b><br>San Martín de Porres');

let users = [
    {
        name: "lucia",
        id: 1,
        coordenadas: [-11.9914768, -77.0818035],
        distrito: "los olivos"
    },
    {
        name: "sandra",
        lastname: "yabiku",
        id: 2,
        coordenadas: [-12.0040111, -77.0606133],
        distrito: "los olivos"
    },
    {
        name: "juan",
        lastname: "yabiku",
        id: 3,
        coordenadas: [-11.9988643, -77.0848270],
        distrito: "los olivos"
    },
    {
        name: "Antony",
        lastname: "yabiku",
        id: 4,
        coordenadas: [-12.0059171, -77.0833524],
        distrito: "los olivos"
    }
]

users.forEach(function (user) {
    L.marker(user.coordenadas, { id: user.id, name: user.name }).addTo(mymap)
        .bindPopup(`<b>${user.name}</b><br/> ${user.distrito}`).on("click", function () {
            let { options: { id, name } } = this;
            let colUser = document.getElementById("js_col-user");
            let currentUser = document.getElementById(`${name.toLowerCase()}_${id}`);

            colUser.scrollTo(0, currentUser.offsetTop)
            document.querySelectorAll('.js_user').forEach(function (element) {
                element.classList.remove('is-active');
            })
            currentUser.classList.add("is-active")
        })
})