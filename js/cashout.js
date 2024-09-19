document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        const cashOut = parseFloat(document.getElementById('input-cash-out').value);
        const InputCashOutPin = document.getElementById('input-cash-out-pin-number').value;
        const currentBalance = parseFloat(document.getElementById('current-balance').innerText);
        if(InputCashOutPin === '1'){
            console.log('pin mached');
            const newBalance = currentBalance - cashOut;
            document.getElementById('current-balance').innerText = newBalance;
            console.log(newBalance);
        }
        else{
            alert('Faild to cash out. please try again later')
        }
    })