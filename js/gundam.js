const myCarousel = document.getElementById('carouselExampleCaptions')
const img = document.querySelector('.image img')
const h1 = document.querySelector('.card-body h1')
const h4 = document.querySelector('.card-body h4')
const p = document.querySelectorAll('.card-body p')

let srcs = ["../img/自由高达.jpg", "../img/飞翼零式高达.jpg", "../img/00高达.jpg"]

let detail = [
    {
        name: "自由高达",
        no: "机体番号：ZGMF-X10A",
        d: ["机体高度：18.03m",
            "机体重量：71.5吨",
            "装备设计：相转移（Phase Shift）装甲，反中子干扰器，多重锁定系统，核能反应堆",
            "外挂装备：METEOR UNIT（流星系统）",
            "机师：基拉·大和",
            "登场：《机动战士高达SEED》", ""]
    },
    {
        name: "飞翼零式高达",
        no: "机体番号：XXXG-00W0",
        d: ["机体高度：16.7m", "机体重量：8吨", "固定武装：光束军刀×2、小型加特林机关炮×2",
            "选用手部武器：2连装光束步枪", "机师：希罗·尤尔", "登场：《机动战士高达W－无尽的华尔兹》", ""]
    },
    {
        name: "00高达",
        no: "机体番号：GN-0000",
        d: ["机体高度：18.3m", "机体重量：54.9吨",
            "固定武装：GN光束军刀×2；GN剑刃Ⅱ/GN光束步枪Ⅱ×2；GN盾牌×2；零式强化机；GN剑刃Ⅲ",
            "选用武装：GNR-010 0-RAISER（0升降翼）", "动力装置：(双GN太阳炉)", "机师：刹那·F·清英", "登场：《机动战士高达00》"]
    }
]

myCarousel.addEventListener('slide.bs.carousel', event => {
    img.src = srcs[event.to];
    h1.innerText = detail[event.to].name;
    h4.innerText = detail[event.to].no
    for (let i = 0; i < p.length; i++) {
        p[i].innerHTML = detail[event.to].d[i]
    }
})

