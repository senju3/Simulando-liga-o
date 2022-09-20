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

let hh = 00;
let mm = 00;
let ss = 00;
let tempo = 1000;
let crono;
const formato = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)


function start() {
    crono = setInterval(timer(), tempo)
}

function timer () {
    ss++;

    if (ss == 60) {
        ss = 0;
        mm++;
        if (mm == 60) {
            mm = 0;
            hh++;
        }

        
    }
}
function stopi() {

}

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
    
    desligar.addEventListener('click', () => naoQueroMais(desligar, div, solicitacao))
    


    /************  2° CELULAR **************/
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

    const atender = document.createElement('button')
    atender.innerText = 'A'
    atender.setAttribute('onclick', 'start()')
    atender.classList.add('atender')
    simNao.appendChild(atender)
    atender.addEventListener('click', () => aceito(atender, div, solicitacao))
    
    const recusar = document.createElement('button')
    recusar.innerText = 'X' 
    recusar.classList.add('recusar')
    simNao.appendChild(recusar)

    console.log('tudo certo meu chapa')
}
ligar.addEventListener('click', chamando);




                                              /*Função de encerrar o chamado*/
const naoQueroMais = (desligar, a, b) => {
    meuMenu.removeChild(a)
    teuMenu.removeChild(b)
    meuMenu.appendChild(menuRemovi)
    meuMenu.appendChild(atalhoRemovi)

    teuMenu.appendChild(tuaTela)
    teuMenu.appendChild(teuAtalho)
}

/*Função de aceitar a ligção*/
const aceito = (atender, a, b) => {
    meuMenu.removeChild(a)
    teuMenu.removeChild(b)
    

    /***********No meu celular*********/
    const divLigacao = document.createElement('div')
    divLigacao.classList.add('divLigacao')
    meuMenu.appendChild(divLigacao)

    const cron = document.createElement('h1')
    cron.classList.add('cron')
    cron.setAttribute('id', 'counter')
    cron.innerText = "00:00:00"
    divLigacao.appendChild(cron)
    document.getElementById('counter').innerText = formato;

    const contato = document.createElement('p')
    contato.classList.add('contatoLigacao')
    contato.innerText = results.innerText
    divLigacao.appendChild(contato)

    const desligar = document.createElement('button')
    desligar.classList.add('desligar')
    desligar.innerText = 'X'
    divLigacao.appendChild(desligar)


    /******No teu celular*****/
    const divLigacaoR = document.createElement('div')
    divLigacaoR.classList.add('divLigacaoR')
    teuMenu.appendChild(divLigacaoR)

    const cronR = document.createElement('h1')
    cronR.classList.add('cronR')
    cronR.innerText = "00:00:00"
    divLigacaoR.appendChild(cronR)

    const contatoR = document.createElement('p')
    contatoR.classList.add('contatoLigacaoR')
    contatoR.innerText = results.innerText
    divLigacaoR.appendChild(contatoR)

    const desligarR = document.createElement('button')
    desligarR.classList.add('desligarR')
    desligarR.innerText = 'X'
    divLigacaoR.appendChild(desligarR)
}

