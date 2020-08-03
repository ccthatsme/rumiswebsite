// const json = fetch("./productlist.json").then(response => response.json()).then(json => console.log(json));
const tbody = document.getElementById('data');
// const tr = document.createElement('tr');

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

console.log(cakeArray);
console.log(breadArray);
console.log(cookieArray);



const productNavbar = document.getElementById('productContainer');

const navbar = document.getElementById('container');

displayProduct = (e) => {
    let product = e.target.innerHTML;

    switch (product) {
        case "Cakes":
       //tr.innerHTML = "";
        json.filter(function filterCategory(item){
            if(item.category === product){
                for(const property in item){
                    if(property !== 'id' && property !== 'category'){
                        
                        let td = document.createElement('td');
                        td.innerHTML = item[property];
                        
                        tr.appendChild(td);
                        tbody.appendChild(tr);
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