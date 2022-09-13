const meuTel = document.querySelector('.tel_eu')
const meuMenu = document.querySelector('.eu')
const menuRemovi = document.querySelector ('.minu')
const atalhoRemovi = document.querySelector('.atilho')
const teclado = document.querySelector('.tecladun')
const results = document.querySelector('.resulta')



const telaDeLigacao = () => {
    meuMenu.removeChild(menuRemovi)
    meuMenu.removeChild(atalhoRemovi)

    teclado.style.display = "block"
    console.log("tudo certo")
}
const mudancaDeTela = meuTel.addEventListener('click', telaDeLigacao)

function insert (valor) {
    results.innerHTML += valor
}

function backSpace () {
    let deletOneForOne = results.innerHTML
    results.innerHTML = deletOneForOne.substring(0, deletOneForOne.length -1)
}
