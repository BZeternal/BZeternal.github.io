const container = document.querySelector('.container');
const btn_login = document.querySelector('.btn-login');
const h1 = document.querySelector('.container h1');
const pass = document.querySelectorAll('.form input');
const flag = document.querySelector('.container .tip2');

btn_login.addEventListener('click', function () {
    if (pass[0].value === 'gundam' && pass[1].value === '123456') {
        h1.innerText = 'Welcome!';
        flag.style.opacity = 0;
        container.classList.add('success');
        setTimeout(function () {
            window.location.href = '../home.html';
            sessionStorage.setItem('current', 1);
        }, 1500);

    }
    else {
        flag.style.opacity = '1';
        pass[1].value = '';
    }

});