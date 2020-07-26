// const json = fetch("./productlist.json").then(response => response.json()).then(json => console.log(json));

const json = fetch("./productlist.json").then(response => response.json());

const productNavbar = document.getElementById('productContainer');

const navbar = document.getElementById('container');

displayProduct = (e) => {
    let product = e.target.innerHTML;

    switch (product) {
        case "Cakes":
            console.log(product);
            fetch("./productlist.json").then(response => response.json().then( (jsonResponse) => {console.log(jsonResponse.id)}));
            break;
        case "Bread":
            console.log('bread');
            break;
        case "Cookies":
            console.log('cookies');
            break;
        default:
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