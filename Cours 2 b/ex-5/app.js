const form = document.querySelector('form')
const draw = document.querySelector('#draw-lots')
const inputName = document.querySelector('#input-name')
const namesList = document.querySelector('#names-list')
const names = []

inputName.focus()
form.addEventListener('submit', (e) => {
    e.preventDefault()
    names.push(inputName.value)
    inputName.value = ''
    inputName.focus()
    renderName()

    draw.disabled = false
})

const renderName = () => {
    namesList.innerHTML = ''
    names.forEach(name => {
        const li = document.createElement('li')
        li.textContent = name
        namesList.appendChild(li)
    })
}

draw.addEventListener('click', () => {
    const winner = names[Math.floor(Math.random() * names.length)]
    alert('Le gagnant est ' + winner)
})
