const cartNumber = document.getElementById('cartNumber');

cartNumber.innerHTML =  fetch('http://localhost:3000/cartitemtotal'
).then(function (response) {
    if(response.ok){
        return response.text();
    }
    return Promise.reject(response);
}).then(function (data) {
    console.log(data);
   cartNumber.innerHTML = data;
}).catch(function (error) {
   console.warn('Something went wrong.', error);
});
