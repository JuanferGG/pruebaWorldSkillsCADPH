const btn_left = document.getElementById('btn-l')
const btn_right = document.getElementById('btn-r')

const imgs = ["../imgs/img02.jpg","../imgs/img03.jpg","../imgs/img04.jpg"]

const contImgs = document.getElementById('imgs')
let cout = 1

btn_right.addEventListener('click', () => {
    if(cout >= imgs.length){
        cout = 0
        contImgs.style.backgroundImage = `url(${imgs[cout]})`
    } else {
        contImgs.style.backgroundImage = `url(${imgs[cout]})`
        cout++
    }
})
btn_left.addEventListener('click', () => {
    if(cout < 0){
        cout = imgs.length - 1
        contImgs.style.backgroundImage = `url(${imgs[cout]})`
    } else {
        contImgs.style.backgroundImage = `url(${imgs[cout]})`
        cout--
    }
})