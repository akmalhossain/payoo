//
//step 3 event handler 
document.getElementById('button-login')
    .addEventListener('click', function(event){
        // step 2 prevent the reload page 
        event.preventDefault();
        // step 3 get the phone number
        const phoneNumber = document.getElementById('phone-no').value;
        console.log(phoneNumber);
    })