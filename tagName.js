customElements.define('my-cart', class SuperCart extends HTMLElement{
    connectedCallback(){
        this.addEventListener('click', this.beAwesome.bind(this))
        this.style.display = 'inline-block';
        this.setAttribute('aria-label', this.innerText);
    };
})