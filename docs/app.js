const input = document.querySelector('.value-input');
const button = document.querySelector('.btn-calculate');
const tax = document.querySelector('.tax-value');
const total = document.querySelector('.total-value');
const selectOp = document.querySelector('.select-input');

var value = 0;
var taxValue;
var totalValue;
let select;

button.addEventListener('click', () => {
    value = input.value;
    if(value === '' || value === '0') {
        Swal.fire('Please enter a value');
    }
    else {
       select = selectOp.value;
         if(select === '0') {
            Swal.fire('Please select a currency');
         }
         else {
            calculate();
            input.value = '';
         }
    }

});

function calculate() {
    if(select === '1') {
        taxValue = Math.floor(((value - 300)*36)/100);
        
        if(isNegative(taxValue)) {
            taxValue = '0';
            
        }
        totalValue = +value + +taxValue;
        tax.innerHTML = taxValue + ' $';
        total.innerHTML = totalValue + ' $';
    }
    else {
        if(select === '2') {
            taxValue = Math.floor(((value - 510)*36)/100);
            if(isNegative(taxValue)) {
                taxValue = '0';
            }
            totalValue = +value + +taxValue;
            tax.innerHTML = taxValue + ' ₼';
            total.innerHTML = totalValue + ' ₼';
        }
        else{
            taxValue = Math.floor(((value - 5000)*36)/100);
            if(isNegative(taxValue)) {
                taxValue = '0';
            }
            totalValue = +value + +taxValue;
            tax.innerHTML = taxValue + ' ₺';
            total.innerHTML = totalValue + ' ₺';
        }
    }
}

function isNegative(num) {
    if (Math.sign(num) === -1) {
      return true;
    }
  
    return false;
  }