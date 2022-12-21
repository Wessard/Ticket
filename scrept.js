const ticket = document.querySelector('.ticket__body-ticket-span');
const btn = document.querySelector('.ticket__btn')
const qr = document.getElementById('qr').append(QRCreator('Бэтмен 228').result);
ticket.innerHTML = sessionStorage.getItem('testName')