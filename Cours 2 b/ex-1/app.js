const table = document.querySelectorAll('tr')
const title = document.querySelector('#test')
const inputs = [...table].map(input => {
    return input.children[1]
})

for(let input of inputs) {
    input.addEventListener('input', (e) => {

        const inputName = e.target.name
        if(inputName) {
            title.style[inputName] = e.target.value + 'px'
        }

        if(e.target.id === "bg-color" ){
            title.style.backgroundColor = `rgb(0,0,${e.target.value})`
        }
        if(e.target.id === "rotate" ){
            title.style.transform = `rotate(${e.target.value}deg)`
        }
    })
}

console.log(title.style.padding = 2);