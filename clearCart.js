const clearButton = document.getElementById('clearCart');

clearButton.addEventListener('click',function(e){

    fetch('http://localhost:3000/clearAllCart', {
        method: 'delete',
        headers: {
            
            'Content-Type': 'application/json'
        },
    }).then((res) => res.status).then((data) => console.log(data)).catch((err) => console.log(err));
    
    window.location.replace("products.html");
    
});

//the cookies are still saved so even when i clear the cart, when i go to add another item its still there