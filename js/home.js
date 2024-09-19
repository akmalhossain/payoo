//add money to the account
// step 1 add an event handler to the add money button
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault(); //prevent reload

        //step 2 get money to be added to the acount balance
        const addMoneyInput = document.getElementById('input-add-money').value;
        const pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(addMoneyInput, pinNumberInput);
        //step 3 validation caheck varify the pin number
        if(pinNumberInput==='1'){
            console.log('mony added');
            // step 4 get the current balance 
            const balance = document.getElementById('balance').innerText;
            console.log(typeof balance);
            // step 5 add money with previous balance
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance);
            // steps 6 update the balance in 
            document.getElementById('balance').innerText = newBalance;
            document.getElementById('input-add-money').value='';
            document.getElementById('input-pin-number').value='';
        }
        else{
            alert('Failed add money! please try again');
        }
    })