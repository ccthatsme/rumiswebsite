class Cart extends HTMLElement{

    constructor(){
        super();
        this.setAttribute('class', 'hello');
        this.setAttribute('id', 'cart');
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>
        #cart{
            color: blue;
            background-color: red;
        }
        </style>

        <h4>
        <slot name="this"></slot>
        <h3 slot="this"></h3>
       
        </h4>
        `
    }
    

    

    // set id(val){
    //     if(val){
            
    //     }
    //     else{
    //         this.removeAttribute('id');
    //     }
    // };
    

    // connectedCallback(){
    //     this.attachShadow({mode:'open'})
    //     this.textContent = this.getAttribute('text');
    //     this.render();
    // }

    
};

this.addEventListener('click', (e) => {
    console.log('in');
});

document.createElement('my-cart');

window.customElements.define('my-cart', Cart);

customElements.whenDefined('my-cart').then(() => {

});

const here = document.querySelector('h3');

if(here.getAttribute('slot') !== null){
    console.log(here.slot);
}

here.innerHTML = 'rampts';




