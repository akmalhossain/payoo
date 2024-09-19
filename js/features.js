// console.log('features file added');
// show the cash out form
document.getElementById('btn-show-cash-out')
    .addEventListener('click', function(){
        // show cash out button clicked
        document.getElementById('cash-out-form').classList.remove('hidden');
          //hide add money 
        document.getElementById('add-money-form').classList.add('hidden');
        
      
    })

    document.getElementById('btn-show-add-money')
        .addEventListener('click', function(){
            document.getElementById('add-money-form').classList.remove('hidden');
            document.getElementById('cash-out-form').classList.add('hidden');
        })