var cart = []; //initialising cart with empty array

//saving items to localStorage from cart[]
function saveItems () {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
//retrieving back the items and parsing them to create an array of objects
function retrieveItems() {
            cart = JSON.parse(
                localStorage.getItem('cart') ? 
                localStorage.getItem('cart') : 
                '[]');
                        }
//refreshing the front-end with contents retrieved from localStorage
function refreshView(){
	cart = JSON.parse(
                localStorage.getItem('cart') ? 
                localStorage.getItem('cart') : 
                '[]');

//looping through the array to determine the values of quantity
for(var i=0; i<cart.length; i++){
	document.getElementsByClassName(i)[0].children[2].innerHTML = cart[i].quantity;
	document.getElementsByClassName(i)[0].children[3].innerHTML = cart[i].quantity * cart[i].single;

}
	
}