const cartNumber1 = document.getElementById('cartNumber');
cartNumber1.onload = loadCartTotal();


function loadCartTotal(){
    fetch('http://localhost:3000/cartitemtotal'
    ).then(function (response) {
        if(response.ok){
            return response.text();
        }
        return Promise.reject(response);
    }).then(function (data) {
       cartNumber1.innerHTML = data;
    }).catch(function (error) {
       console.warn('Something went wrong.', error);
    });
};

