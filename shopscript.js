//function to add elements in cart
function addItemInTable(){
	retrieveItems(); //retrieving elements from local storage

	var table = document.getElementById("tables");
	var d = cart.length; 
	var p =0;

 while(d) {
// Creating an empty <tr> element and adding it to the 1st position of the table:
var row = table.insertRow(0);
row.setAttribute('class',p); 
 

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
console.log("cart " ,cart);
// Add content to the new cells:
cell1.innerHTML = cart[p].name;
cell2.innerHTML = cart[p].single;
cell3.innerHTML = cart[p].quantity;
cell4.innerHTML = cart[p].single * cart[p].quantity;

//creating add and remove buttons
cell5.innerHTML = '<button class="unique tn btn-secondary btn-xs my-xs-btn" type="button" onClick="increase('+p+')" >'+
 '<span class="glyphicon glyphicon-pencil"></span> Add </button>';
cell6.innerHTML = '<button class="unique btn-primary btn-xs my-xs-btn" type="button" onClick="del('+p+')" >'
    + '<span class="glyphicon glyphicon-pencil"></span> Remove </button>';
p++;
d--;


}
}

//Making add button functional
function increase(p){
    cart[p].quantity++;
	console.log(cart);
	saveItems(); //saving items to local storage
	refreshView(); //Dynamically refresh the view with localStorage
}
//Making remove button functional
function del(p){
	var parentElement = document.getElementsByClassName(p);
	cart[p].quantity = 0;
	parentElement[0].remove();
	cart.splice(p,1);
	saveItems();  //saving items to local storage
	refreshView(); //Dynamically refresh the view with localStorage
}