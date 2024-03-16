let inputs = document.querySelectorAll('input');

let name = document.querySelector('#name')
let cardName = document.querySelector('.card-name');

let number = document.querySelector('section h5');
let cardNumber = document.querySelector('.card-number');

let main = document.querySelector('main');
let footer = document.querySelector('footer')

let cardDate = document.querySelector('#date');
let cvcCode = document.querySelector('#cvccode')

let mm = document.getElementById('mm');
let yy = document.getElementById('yy');
let cvc = document.getElementById('cvc');

let p1 = document.querySelector('#p1')
let p2 = document.querySelector('#p2')
let p3 = document.querySelector('#p3')

let btn = document.getElementById('btn');
let button = document.querySelector('#button');

let count = 0;
let regEx = /[0-9]/ 
btn.addEventListener('click', () => {
    if( cardName.value.split(' ').length !== 2 ){
        p1.innerHTML = 'Wrong name!';
        p1.style.color = 'red';
        cardName.style.border = '1px solid red'
    } 
    // else if( cardName.value.match(regEx).length != 0 ){
    //     p1.innerHTML = 'Only Alphabet letters'
    //     p1.style.color = 'red';
    //     cardName.style.border = '1px solid red'
    // }
    else{
        cardName.style.border = '1px solid #6348FE';
        name.innerHTML = cardName.value;
        p1.style.display = 'none';
        count++;

    }
    if( isNaN(cardNumber.value)){
        cardNumber.style.border = '1px solid red';
        p2.innerHTML = 'Numbers only'
        p2.style.color = 'red'
    }
    else if( cardNumber.value.length !== 16){
        p2.innerHTML = 'Only 16 numbers!';
        cardNumber.style.border = '1px solid red';
        p2.style.color = 'red'
    }
    else{
        p2.style.display = 'none'
        cardNumber.style.border = '1px solid #6348FE';
        number.innerHTML = cardNumber.value.slice(0, 4) + ' ' + cardNumber.value.slice(4, 8) + ' ' + cardNumber.value.slice(8, 12) + ' ' + cardNumber.value.slice(12);
        count++;
    }
    if( mm.value > 12 || mm.value <= 0 ) {
     p3.innerHTML = 'Wrong month!';
     mm.style.border = '1px solid red'
     p3.style.color = 'red';
    } 
    else{
        cardDate.innerHTML = mm.value;
        mm.style.border = '1px solid #6348FE';
        count++; 
    }
    if( yy.value < 2024 ) {
        p3.innerHTML = 'Wrong year!';
     yy.style.border = '1px solid red'
     p3.style.color = 'red';
    }
    else{
        cardDate.innerHTML += `/${yy.value.slice(2)}`;
        yy.style.border = '1px solid #6348FE';
        count++;
    }
    if( cvc.value < 100 || cvc.value > 999){
        p3.innerHTML = 'Wrong CVC code!';
        p3.style.color = 'red';
        cvc.style.border = '1px solid red';
    }
    else{
        cvcCode.innerHTML = cvc.value;
        cvc.style.border = '1px solid #6348FE';
        count++; 
    }
    
    function myFunc(){
      if( count === 5) {
        main.style.display = 'none';
        footer.style.display = 'flex';
        button.addEventListener('click', (e) => {
            location.reload()
            footer.style.display = 'none';
          main.style.display = 'flex';

        })
      }
    }
    myFunc()
    
})



