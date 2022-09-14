const meuTel = document.querySelector('.tel_eu')
const meuMenu = document.querySelector('.eu')
const menuRemovi = document.querySelector ('.minu')
const atalhoRemovi = document.querySelector('.atilho')
const teclado = document.querySelector('.tecladun')
const botoes = document.querySelector('.botoes')
const results = document.querySelector('.resulta')
const ligar = document.querySelector('.atendimento')

const teuMenu = document.querySelector('.tu')
const tuaTela = document.querySelector('.menutu')
const teuAtalho = document.querySelector('.atulho')

/*função tela inicial de ligação */
const telaDeLigacao = () => {
    /*Removi as divs da tela inicial do celular */
    meuMenu.removeChild(menuRemovi)
    meuMenu.removeChild(atalhoRemovi)

    /*e tornei visível div que recebea tela inicial de ligação, a qual tava com display none. com a remoção das antigas div, e a mudança no display, a nova assume o lugar das antigas divs */
    teclado.style.display = "block"
    console.log("tudo certo")
}
    meuTel.addEventListener('click', telaDeLigacao)

/*Função de inserir o número de acordo com a tecla para o usuário */
function insert (valor) {
    results.innerHTML += valor
}
/*função de apagar o número*/
function backSpace () {
    let deletOneForOne = results.innerHTML
    results.innerHTML = deletOneForOne.substring(0, deletOneForOne.length -1)
}

/*Função tela de chamando*/
const chamando = () => {
    meuMenu.removeChild(teclado)

    const div = document.createElement('div')
    div.classList.add('ligando')
    meuMenu.appendChild(div)

    let chamando = document.createElement('p')
    chamando.innerText = 'Chamando...';
    chamando.classList.add('mensagem')
    div.appendChild(chamando)
    
    let contato = document.createElement('p')
    contato.innerText = results.innerText
    contato.classList.add('contati')
    div.appendChild(contato)

    let desligar = document.createElement('button')
    desligar.innerText = 'X'
    desligar.classList.add('desligar')
    div.appendChild(desligar)

    teuMenu.removeChild(tuaTela)
    teuMenu.removeChild(teuAtalho)

    const solicitacao = document.createElement('div')
    solicitacao.classList.add('solicitacao')
    teuMenu.appendChild(solicitacao)

    let ligacao = document.createElement('p')
    ligacao.innerText = 'Ligação de...';
    ligacao.classList.add('ligacao')
    solicitacao.appendChild(ligacao)
    
    let contatu = document.createElement('p')
    contatu.innerText = results.innerText
    contatu.classList.add('contatu')
    solicitacao.appendChild(contatu)

    const simNao = document.createElement('div')
    simNao.classList.add('simNao')
    solicitacao.appendChild(simNao)

    const atender = document.createElement("button")
    atender.innerText = 'A'
    atender.classList.add('atender')
    simNao.appendChild(atender)

    
    const recusar = document.querySelector('button')
    recusar.innerText = 'X'
    recusar.classList.add('recusar')
    simNao.appendChild(recusar)

    console.log('tudo certo meu chapa')
}
ligar.addEventListener('click', chamando)
