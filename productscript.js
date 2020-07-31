// const json = fetch("./productlist.json").then(response => response.json()).then(json => console.log(json));
const tr = document.getElementById('data');



const json = [];

fetch("./productlist.json").then(response => response.json().then((jsonResponse) => {
    jsonResponse.forEach(element => {
        json.push(element);
    });
    
}));

const productNavbar = document.getElementById('productContainer');

const navbar = document.getElementById('container');

displayProduct = (e) => {
    let product = e.target.innerHTML;

    switch (product) {
        case "Cakes":
       tr.innerHTML = "";
        json.filter(function filterCategory(item){
            if(item.category === product){
                for(const property in item){
                    if(property !== 'id' && property !== 'category'){
                        let td = document.createElement('td');
                        td.innerHTML = item[property];
                        tr.appendChild(td);
                    }
                   
                }
       
            }
        });
            break;
        case "Bread":
            tr.innerHTML = "";
            json.filter(function filterCategory(item){
                if(item.category === product){
                    for(const property in item){
                        if(property !== 'id' && property !== 'category'){
                            let td = document.createElement('td');
                            td.innerHTML = item[property];
                            tr.appendChild(td);
                        }
                       
                    }
                }
            });
            break;
        case "Cookies":
            tr.innerHTML = "";
            json.filter(function filterCategory(item){
                if(item.category === product){
                    for(const property in item){
                        if(property !== 'id' && property !== 'category'){
                            let td = document.createElement('td');
                            td.innerHTML = item[property];
                            tr.appendChild(td);
                        }
                       
                    }
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