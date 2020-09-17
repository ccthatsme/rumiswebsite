const homeButton = document.getElementById('listItem');
const cartTotalButton = document.getElementById('cartTitle');
cartTotalButton.addEventListener('load', getCartContents());

let cartArray = [];
function getCartContents(){
    fetch('http://localhost:3000/cartcontents'
    ).then(response => response.json()).then((jsonResponse) => {
        cartArray.push(jsonResponse);
        cartArray.forEach(element => {
            cartArray.push(element);
        });
      cartArray = jsonResponse;
        let array2 = [];
        array2.push(jsonResponse);
        // SuperCart.getCartEntry(jsonResponse);
        console.log(jsonResponse);
        console.log(array2);
    });
          
}



class SuperCart extends HTMLElement {

    constructor(){
        super();
        // this.shadow =  this.attachShadow({ mode: 'open' });
       
        
       };

      static getCartEntry = (cartArray) => {
            // console.log(cartArray);
            // const list = document.createElement('ul');
            // this.shadow.appendChild(list);
            //trying to append an element to the shadow dom for every entry in the cartArray

       };

       get count() {
            return this.getAttribute("count");
       }

       set count(val){
            this.setAttribute("count", val);
       }

       static get observedAttributes(){
           return ["count"];
       }

       attributeChangedCallback(prop, oldVal, newValue){
            // if(prop === 'count'){
            //     this.render();
            // }
       }

     connectedCallback(){
        this.setAttribute('class', 'hello');
        this.setAttribute('id', 'cart');
        this.shadow =  this.attachShadow({ mode: 'open' });
          this.render();
     }

     render(){
        const wrapper = document.createElement('ul');
       let array =  fetch('http://localhost:3000/cartcontents'
       ).then(response => response.json().then((jsonResponse) => {
         cartArray = jsonResponse;
         wrapper.innerHTML = JSON.stringify(cartArray);
         console.log(cartArray);
         console.log(wrapper);
               return jsonResponse;
       }))
        
         
         this.shadow.appendChild(wrapper);
         
     }
      

    };

 customElements.define('my-cart', SuperCart);


 

