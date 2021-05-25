const paragraphe = document.getElementById('paragraphe')
const bouton = document.querySelector('button')

const changer_style = () => {
    paragraphe.classList.toggle('active')
}
bouton.addEventListener('click',changer_style)