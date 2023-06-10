const btns = document.querySelectorAll('.info-1 button');
const p = document.querySelector('.info-1 p');

let i = 0;
setInterval(() => {
    if (i % 2 == 0)
        p.style.color = 'black';
    else {
        p.style.color = 'white';
    }
    i++;
}, 1000);

let index = 1;
const img = document.querySelector('.info-img');
btns[0].addEventListener('click', function () {
    let j = index % 8 + 1;
    img.src = '../img/img' + j + '.jpg';
    index++;
})

btns[1].addEventListener('click', function () {
    if (confirm("确定要退出登录吗？")) {
        window.location.href = '../Login.html';
    }
})

