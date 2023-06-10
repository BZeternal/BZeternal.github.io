(function () {
  initActive()


  function initActive() {
    let root = document.querySelector(':root')

    $('#myRadio').addClass('active')
    $('.navigation').addClass('active')

    root.style.setProperty('--backColor', '#fff')
    root.style.setProperty('--borderline', '#00283A')
    root.style.setProperty('--mainColor', '#ff8181')
    root.style.setProperty('--bagColor', '#02162b')
  }

  // loadding
  document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
      let opacity = $('.lodding-wrap').css('opacity');
      let timer = null;
      timer = opacity && setInterval(() => {
        opacity -= 0.1
        $('.lodding-wrap').css('opacity', opacity);
        console.log(opacity)
        if (opacity <= 0) {
          $('.lodding-wrap').css('display', 'none');
          clearInterval(timer)
        }
      }, 100);

    }
  }
})()


