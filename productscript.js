const tbody = document.getElementById('data');

const cartArray = [];
const json = [];
const cookieArray = [];
const breadArray = [];
const cakeArray = [];

fetch("./productlist.json").then(response => response.json().then((jsonResponse) => {
    jsonResponse.forEach(element => {
        if(element.category === 'Cakes'){
            let newElement = {};
            for(const property in element){
                if(property !== 'id' && property !== 'category'){
                newElement[property] = element[property];
                
            }
            else{
                continue;
            }
                
        }
        cakeArray.push(newElement);  
    }
        else if(element.category === 'Bread'){
            let newElement2 = {};
            for(const property in element){
                if(property !== 'id' && property !== 'category'){
                newElement2[property] = element[property];
                
            }
            else{
                continue;
            }
            
                
        }  
        breadArray.push(newElement2); 
        }
        else if(element.category === 'Cookies'){
            let newElement3 = {};
            for(const property in element){
                if(property !== 'id' && property !== 'category'){
                newElement3[property] = element[property];
                
            }
            else{
                continue;
            }
                
        }   
        cookieArray.push(newElement3);
        }
    });
    
}));

const productNavbar = document.getElementById('productContainer');

const navbar = document.getElementById('container');

displayProduct = (e) => {
    let product = e.target.innerHTML;
    tbody.innerHTML = "";
    switch (product) {
        case "Cakes":
            cakeArray.filter(function populateTable(element){
                let tr = document.createElement('tr');
                let button = document.createElement('button');
                button.setAttribute('id','cartButton');
                button.innerHTML = 'Add to Cart';
                button.addEventListener('click', addToCart, false);
                for(const property in element){
                 let td = document.createElement('td');
                    td.innerHTML = element[property];
                    tr.appendChild(td);
                }
                tr.appendChild(button);
                tbody.appendChild(tr);
            });
            break;
        case "Bread":
            breadArray.filter(function populateTable(element){
                let tr = document.createElement('tr');
                let button = document.createElement('button');
                button.setAttribute('id','cartButton');
                button.innerHTML = 'Add to Cart';
                button.addEventListener('click', addToCart, false);
                for(const property in element){
                 let td = document.createElement('td');
                    td.innerHTML = element[property];
                    tr.appendChild(td);
                }
                tr.appendChild(button);
                tbody.appendChild(tr);
            });
            break;
        case "Cookies":
            cookieArray.filter(function populateTable(element){
                let tr = document.createElement('tr');
                let button = document.createElement('button');
                button.setAttribute('id','cartButton');
                button.innerHTML = 'Add to Cart';
                button.addEventListener('click', addToCart, false);
                for(const property in element){
                 let td = document.createElement('td');
                    td.innerHTML = element[property];
                    tr.appendChild(td);
                }
                tr.appendChild(button);
                tbody.appendChild(tr);
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
   
};

addToCart = (e) =>{
    e.preventDefault();
    let newElement = {};
    newElement['Item'] = e.path[1].cells[0].innerHTML;
    newElement['Size'] = e.path[1].cells[1].innerHTML;
    newElement['Price'] = e.path[1].cells[2].innerHTML;

    cartArray.push(newElement);

    fetch('http://localhost:3000/additem', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartArray),
    }).then((res) => res.json()).then((data) => console.log(data)).catch((err) => console.log(err));

    

}

navbar.addEventListener("click", navigateTo, false);

productNavbar.addEventListener("click", displayProduct, false);








