/* Watch */
window.onload = function() {
    setInterval(()=> {
        var seconds = new Date().getSeconds();
        document.querySelector('.sec').innerHTML = (seconds < 10 ? '0' : '') + seconds;
        var minutes = new Date().getMinutes();
        document.querySelector('.min').innerHTML = (minutes < 10 ? '0' : '') + minutes
        var hours = new Date().getHours();
        document.querySelector('.hou').innerHTML = (hours < 10 ? '0' : '') + hours
    }, 1000)
}
/* Seats objects price */

const rows = {
    firstRowPrice: {
        name: 'Minimal',
        amount: 0,
        price: 12500,
        get Sum() {
            return this.price * this.amount
        }
    },
    secRowPrice: {
        name: 'Medium',
        amount: 0,
        price: 25500,
        get Sum() {
            return sum = this.price * this.amount
        }
    },
    thirdRowPrice: {
        name: 'High',
        amount: 0,
        price: 43500,
        get Sum() {
            return this.price * this.amount
        }
    },
    
}
/* Seats hover eff */

const priceInfo = document.querySelector('.cinema__footer-price-desc');
const minSeats = document.querySelectorAll('.minimal-rows');
const medSeats = document.querySelectorAll('.medium-rows');
const highSeats = document.querySelectorAll('.high-rows');
const btn = document.querySelectorAll('.btn')
// for(let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener('click', function() {
//         addOrDelete(this);
//     })
// }
// function addOrDelete (seat) {
//     const parent = document.querySelector('.main__seat');
//     // const parentId = parent.getAttribute('id');
//     const priceInfo = document.querySelector('.cinema__footer-price-desc');
//     parent.addEventListener('click', function() {
//         if(seat.classList.contains('active')) {
//             seat.classList.remove('active')
//             rows[this].amount--;
//             priceInfo.innerHTML = rows[this].Sum;
//         }
//         else {
//             seat.classList.add('active')
            
//             priceInfo.innerHTML = rows[this].Sum;
//         }
//     })
// }

function highSeatsCol () {
    for(let i = 0; i < highSeats.length; i++) {
        highSeats[i].addEventListener('click', function() {
            if(this.classList.contains('active')) {
                this.classList.remove('active')
                rows.thirdRowPrice.amount--
                priceInfo.innerHTML = rows.thirdRowPrice.Sum
            }
            else {
                this.classList.add('active')
                rows.thirdRowPrice.amount++
                priceInfo.innerHTML = rows.thirdRowPrice.Sum
                let amo = rows.thirdRowPrice.Sum
                let data = amo;
                sessionStorage.setItem('testName', data)
            }
        })
    }
}
highSeatsCol()
function medSeatsCol () {
    for(let i = 0; i < medSeats.length; i++) {
        medSeats[i].addEventListener('click', function() {
            if(this.classList.contains('active')) {
                this.classList.remove('active')
                rows.secRowPrice.amount--
                priceInfo.innerHTML = rows.secRowPrice.Sum
            }
            else {
                this.classList.add('active')
                rows.secRowPrice.amount++
                priceInfo.innerHTML = rows.secRowPrice.Sum
                let amo = rows.secRowPrice.Sum
                let data = amo;
                sessionStorage.setItem('testName', data)
            }
            }     
        )}
}
medSeatsCol()
function minSeatsCol () {
    for(let i = 0; i < minSeats.length; i++) {
        minSeats[i].addEventListener('click', function() {
            if(this.classList.contains('active')) {
                this.classList.remove('active')
                rows.firstRowPrice.amount--
                priceInfo.innerHTML = rows.firstRowPrice.Sum
            }
            else {
                this.classList.add('active')
                rows.firstRowPrice.amount++
                priceInfo.innerHTML = rows.firstRowPrice.Sum
                let amo = rows.firstRowPrice.Sum
                let data = amo;
                sessionStorage.setItem('testName', data)
            }
            }     
        )}
}
minSeatsCol()

