import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1IjoiamF2YXNjcmlwdGZ1biIsImEiOiJja2Rud255bmIweTJhMzFwZWJ1dTB4M29jIn0.jiMQf5jB-kuiuCdnbkEomw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-122.420679, 37.772537],
});

const element = document.getElementById('container');

function navigateTo(e){
    let element = e.target.innerHTML;

    switch (element) {
        case "Products":
        window.location.replace("products.html");
        break;
        case "FAQ":
        window.location.replace("faq.html");
        break;
        case "Location":
        window.location.replace("location.html");
        break;
        case "Home":
        window.location.replace("index.html")
        break;

    }

    //this can work as well, but back button issues?
    // window.location.href = 'products.html';

   
};

element.addEventListener("click", navigateTo, false);



