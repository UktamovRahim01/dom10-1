let open_btn = document.querySelector(`.add-product`)
let menu = document.querySelector(`.menu`)
let back_btn = document.querySelector(`.back`)

let show_btn = document.querySelector(`.show`)


let price_from = 0
let price_to = Infinity

show_btn.onclick = () => {
    let pr_from = document.querySelector(`#from`)
    let pr_to = document.querySelector(`#to`)
    if (pr_from.value !== ``) {
        price_from = +pr_from.value
        reload(todos)
    }
    if (pr_to.value !== ``) {
        price_to = +pr_to.value
        reload(todos)
    }
    else {
        price_to = Infinity
        reload(todos)
    }

}

open_btn.onclick = () => {
    menu.style.animation = ` open .5s ease`
    menu.style.width = `400px`
}
back_btn.onclick = () => {
    menu.style.animation = ` close .5s ease`
    menu.style.width = `0`
}

let form = document.querySelector('.menu')
let spm = document.querySelector('.spm')
let spn = document.querySelector('.spn')
let todos = []


form.onsubmit = (event) => {
    event.preventDefault()

    let todo = {}

    let fm = new FormData(event.target)

    fm.forEach((value, key) => {
        todo[key] = value
    })
    if (spm.value == "" || spn.value == "") {
        return
    }
    todos.push(todo)
    reload(todos)
}

let boxs = document.querySelector('.boxs')

function reload(arr) {
    todos = todos.filter(obj => obj.hasOwnProperty('price')).sort((a, b) => a.price - b.price);
    boxs.innerHTML = ""

    for (let item of arr) {
        if (item.price >= price_from && item.price <= price_to) {

            let box = document.createElement('div')
            let h1 = document.createElement('h1')
            let span = document.createElement('span')

            box.classList.add(`box`)
            span.classList.add(`price_sp`)
            h1.classList.add(`name_h1`)

            span.innerHTML = `$` + item.price
            h1.innerHTML = item.name

            box.append(h1, span)
            boxs.append(box)
        }
    }



}















