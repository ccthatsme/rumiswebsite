const cartNumber = document.getElementById('cartNumber');
const productButtons = document.getElementsByClassName('specificProductClass');
const cartTotal = null;
const p = Element.prototype;

const productTable = document.getElementById('productTable').addEventListener('click',function(e) {
    if(e.target.innerText === 'Add to Cart'){
        let cartButton = document.getElementsByClassName('cartClass');
   
       Array.prototype.forEach.call(cartButton, (button) => {
           button.addEventListener('click', postCartTotal, false);
       }); 
    }
});

//cartNumber.innerText = '2';



assignCartEvent = (e) => {
    e.preventDefault();
    let cartButton = document.getElementsByClassName('cartClass');

    Array.prototype.forEach.call(cartButton, (button) => {
        button.addEventListener('click', postCartTotal, false);
    });
}

postCartTotal = (e) => {
 e.preventDefault();
 fetch('http://localhost:3000/cartitemtotal'
 ).then(function (response) {
     if(response.ok){
         return response.text();
     }
     return Promise.reject(response);
 }).then(function (data) {
	cartNumber.innerHTML = data;
}).catch(function (error) {
	console.warn('Something went wrong.', error);
});



}



Array.prototype.forEach.call(productButtons, (button) => {
    button.addEventListener('click', assignCartEvent, false);
});

// productButtons.array.filter(element => {
//     element.addEventListener('click', postCartTotal, false);
// });
// Array.from.forEach(productButtons, (button) => {
//     button.addEventListener('click', postCartTotal, false);
// })

// cartButton.('click', postCartTotal ,false);

// console.log(postCartTotal());
// cartNumber.innerHTML = fetch('http://localhost:3000/cartitemtotal').then((res) => res.text()).then((data) => console.log(data)).catch((err) => console.log(err));;

// cartButton.addEventListener('click', postCartTotal() ,false);
//8/31/20
//trying to get this to work, 

//try writing the response to send json, utilize the parse or stringify method

//right now it is sending a string