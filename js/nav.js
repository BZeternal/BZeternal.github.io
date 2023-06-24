nav_refresh()

function nav_refresh() {
    let webId = sessionStorage.getItem("current");
    const navWeb = document.querySelector('.nav-divide li:nth-child(' + webId + ')');
    console.log(webId);
    navWeb.style = "border-bottom: 2px solid orange;";
}

const ul = document.querySelector('.nav-divide');

ul.addEventListener('click', function (e) {
    sessionStorage.setItem("current", e.path[0].id);
})