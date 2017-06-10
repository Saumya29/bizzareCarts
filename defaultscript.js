//function to identify the selected item and add it to the cart
$(function(){
retrieveItems(); //retrieving items from localStorage
console.log(cart);
	for(var i = 0; i<6; i++){  //number of items is 6

		$('[data-id='+i+']').click(function(){ //each item has a unique data-id
            
            var quan = $(this).siblings()[2].value; 
            var name = $(this).siblings()[0].innerHTML;
            var oneprice = $(this).siblings()[1].innerText;
            var finalprice = oneprice*quan;
            console.log(quan);
            console.log(name);
            console.log(oneprice);
            console.log(finalprice);
            
            
           //Check if the object exists in the array
            var flag = 0;
            for(var j=0; j<cart.length; j++){
                
                
                console.log('product is: ', cart[j]);
                console.log(cart[j].name);
                if(cart[j].name == name){
                    
                    alert('Item found at position: ' +j + '\nInitially quantity is: '+ cart[j].quantity);
                    cart[j].quantity = (parseInt(cart[j].quantity) + parseInt(quan)).toString();
                    console.log('Final quantity is: ', cart[j].quantity);
                    flag = 1;
                }
                    
            }
            
            //Executes only when the array doesn't contain the object

               if(!flag){
                var newItem = {name: name,quantity: quan,single: oneprice, total: finalprice};
                console.log("This is new item: " , newItem);
                cart.push(newItem);
            }

            alert(quan +" products  were added to the cart");
            saveItems();

		});
	}


});