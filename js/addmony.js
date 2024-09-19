
/**
 * 1. add vevent listener to the add money button (from submit)
 * make sure to preventDefault so that page doesn't reloads
 * 2.get money user wants to add
 * 3. varify the pin numner. for wrong pin numner ==> failed to 

 * 
 */
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        // console.log('connectd');
        // get money and pin number
        const inputAddMoney =parseFloat(document.getElementById('input-add-money').value);
        const inputPin= document.getElementById('input-pin-number').value;
      console.log(inputAddMoney, inputPin);
      if(inputPin ==='1'){
        const currentBalance = parseFloat( document.getElementById('current-balance').innerText);
        const newBalance = currentBalance + inputAddMoney;
        document.getElementById('current-balance').innerText = newBalance;
      }
      else{
         alert('Failed to add money');
      }
    })