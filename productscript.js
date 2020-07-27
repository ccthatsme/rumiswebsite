// const json = fetch("./productlist.json").then(response => response.json()).then(json => console.log(json));
const json = [];

fetch("./productlist.json").then(response => response.json().then((jsonResponse) => {
    jsonResponse.forEach(element => {
        json.push(element);
    });
    
}));

console.log(json);

const productNavbar = document.getElementById('productContainer');

const navbar = document.getElementById('container');

displayProduct = (e) => {
    let product = e.target.innerHTML;

    switch (product) {
        case "Cakes":
        // console.log(json[0]);
        json.filter(function filterCategory(item){
            if(item.category === product){
            console.log(item);
            }
        });
            break;
        case "Bread":
            json.filter(function filterCategory(item){
                if(item.category === product){
                console.log(item);
                }
            });
            break;
        case "Cookies":
            json.filter(function filterCategory(item){
                if(item.category === product){
                console.log(item);
                }
            });
            break;
        default:
            console.log('nothing to see');
            break;
    }
}

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

navbar.addEventListener("click", navigateTo, false);

productNavbar.addEventListener("click", displayProduct, false);



//this was used in the switch case to see the response from the json
   // fetch("./productlist.json").then(response => response.json().then( (jsonResponse) => {console.log(jsonResponse[0])}));