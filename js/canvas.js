const cvs = document.querySelector('#triangle-lost-in-space')
const ctx = cvs.getContext('2d')
const { clientWidth: width, clientHeight: height } = document.documentElement;
cvs.width = width;
cvs.height = height;
ctx.fillStyle = '#ffffff'
const bgColors = Array.from(new Array(400)).map(v => {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    step: Math.random() * 2.5 + 0.5
  }
})

const render = () => {
  ctx.clearRect(0, 0, width, height)
  ctx.beginPath()
  bgColors.forEach(v => {
    v.y = v.y < 0 ? height : (v.y - v.step)
    ctx.rect(v.x, v.y, 3, 3)
  })
  ctx.fill()
  requestAnimationFrame(render)
}
render()
