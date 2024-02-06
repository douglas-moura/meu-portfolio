function abrirMenu() {
    let menu = document.querySelector("aside#menu-lateral")
    if(menu.style.marginLeft == '0px') {
        menu.style.marginLeft = '-30rem'
    } else {
        menu.style.marginLeft = '0px'
    }
    console.log(menu)
}