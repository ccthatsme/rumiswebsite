class Cart extends HTMLElement{
    connectedCallback(){
        this.attachShadow({mode:'open'})
        this.textContent = this.getAttribute('text');
        this.render();
    }

    
}