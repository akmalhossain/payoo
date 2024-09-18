//add money to the account
// step 1 add an event handler to the add money button
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault(); //prevent reload

        //step 2 get money to be added to the acount balance
        const addMoneyInput = document.getElementById('input-add-money').value;
        const pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(addMoneyInput, pinNumberInput);
    })