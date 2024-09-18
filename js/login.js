//
//step 3 event handler 
document.getElementById('button-login')
    .addEventListener('click', function(event){
        // step 2 prevent the reload page 
        event.preventDefault();
        // step 3 get the phone number
        const phoneNumber = document.getElementById('phone-no').value;
        const pinNumber =document.getElementById('pin-no').value;
        console.log(phoneNumber, pinNumber);
        // this is temporaty
        // step 4 validation of phone num and pin
        if(phoneNumber === '5' && pinNumber === '1234'){
            //redirect home page
            window.location.href = './home/home.html'
        }
        else{
            alert('wrong phone number or pin')
        }

    })