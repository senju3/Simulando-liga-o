const meuTel = document.querySelector('.tel_eu')
const meuMenu = document.querySelector('.eu')
const menuRemovi = document.querySelector ('.minu')
const atalhoRemovi = document.querySelector('.atilho')
const teclado = document.querySelector('.tecladun')
const botoes = document.querySelector('.botoes')
const results = document.querySelector('.resulta')
const ligar = document.querySelector('.atendimento')
const teclado_clone = `<div class="tecladun">
<div class="resul">
    <button class="apagar" onclick="backSpace ('')">x</button>
    <p class="resulta" id="resultadoSupremo"></p>
</div>

<table>
    <thead></thead>
    
    <tbody>
        <tr>
            <td><button onclick="insert ('7')">7</button></td>
            <td><button onclick="insert ('8')">8</button></td>
            <td><button onclick="insert ('9')">9</button></td>
        </tr>
        <tr>
            <td><button onclick="insert ('4')">4</button></td>
            <td><button onclick="insert ('5')">5</button></td>
            <td><button onclick="insert ('6')">6</button></td>
        </tr>
        <tr>
            <td><button onclick="insert ('1')">1</button></td>
            <td><button onclick="insert ('2')">2</button></td>
            <td><button onclick="insert ('3')">3</button></td>
        </tr>
    </tbody>                           
</table>
<div class="botoes">
    <button class="atendimento">A</button>
</div>
</div>`

const teuMenu = document.querySelector('.tu')
const tuaTela = document.querySelector('.menutu')
const teuAtalho = document.querySelector('.atulho')

let hh = 00;
let mm = 00;
let ss = 00;
let tempo = 1000;
let crono;

function createTeclado () {
    const divTeclado = document.createElement('div')
    divTeclado.classList.add('tecladun')
    divTeclado.innerHTML = `
    <div class="resul">
    <button class="apagar" onclick="backSpace ('')">x</button>
    <p class="resulta" id="resultadoSupremo"></p>
</div>

<table>
    <thead></thead>
    
    <tbody>
        <tr>
            <td><button onclick="insert ('7')">7</button></td>
            <td><button onclick="insert ('8')">8</button></td>
            <td><button onclick="insert ('9')">9</button></td>
        </tr>
        <tr>
            <td><button onclick="insert ('4')">4</button></td>
            <td><button onclick="insert ('5')">5</button></td>
            <td><button onclick="insert ('6')">6</button></td>
        </tr>
        <tr>
            <td><button onclick="insert ('1')">1</button></td>
            <td><button onclick="insert ('2')">2</button></td>
            <td><button onclick="insert ('3')">3</button></td>
        </tr>
    </tbody>                           
</table>
<div class="botoes">
    <button class="atendimento">A</button>
</div>`


    return divTeclado;
}

function start() {
    crono = setInterval(() => { timer(); }, tempo);
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



    const formato = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    let contadores = document.querySelectorAll('.cron')
    contadores[0].innerText = formato
    contadores[1].innerText = formato
    
}


                                               /*fun????o tela inicial de liga????o */
const telaDeLigacao = () => {
    /*Removi as divs da tela inicial do celular */
    meuMenu.removeChild(menuRemovi)
    meuMenu.removeChild(atalhoRemovi)

    /*e tornei vis??vel div que recebea tela inicial de liga????o, a qual tava com display none. com a remo????o das antigas div, e a mudan??a no display, a nova assume o lugar das antigas divs */
    teclado.style.display = "block"
    console.log("tudo certo")
}
    meuTel.addEventListener('click', telaDeLigacao)



                                        /*Fun????o de inserir o n??mero de acordo com a tecla para o usu??rio */
function insert (valor) {
    results.innerHTML += valor
}
/*fun????o de apagar o n??mero*/
function backSpace () {
    let deletOneForOne = results.innerHTML
    results.innerHTML = deletOneForOne.substring(0, deletOneForOne.length -1)
}



                                                  /*Fun????o tela de chamando*/
const chamando = () => {
    teclado.style.display = "none"


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
    


    /************  2?? CELULAR **************/
    teuMenu.removeChild(tuaTela)
    teuMenu.removeChild(teuAtalho)

    const solicitacao = document.createElement('div')
    solicitacao.classList.add('solicitacao')
    teuMenu.appendChild(solicitacao)

    let ligacao = document.createElement('p')
    ligacao.innerText = 'Liga????o de...';
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




                                              /*Fun????o de encerrar o chamado*/
const naoQueroMais = (desligar, a, b) => {
    meuMenu.removeChild(a)
    teuMenu.removeChild(b)
    meuMenu.appendChild(menuRemovi)
    meuMenu.appendChild(atalhoRemovi)

    teuMenu.appendChild(tuaTela)
    teuMenu.appendChild(teuAtalho)

    results.innerText = ''
}

                                                 /*Fun????o de aceitar a lig????o*/
const aceito = (atender, a, b) => {
    meuMenu.removeChild(a)
    teuMenu.removeChild(b)
    
    mudarTelaDoMeuCel()
    mudarTelaDoTeuCel() 
}

function mudarTelaDoMeuCel () {
    /***********No meu celular*********/
    const divLigacao = document.createElement('div')
    divLigacao.classList.add('divLigacao')
    meuMenu.appendChild(divLigacao)

    const cron = document.createElement('h1')
    cron.classList.add('cron')
    cron.innerText = "00:00:00"
    divLigacao.appendChild(cron)
    

    const contato = document.createElement('p')
    contato.classList.add('contatoLigacao')
    contato.innerText = results.innerText
    divLigacao.appendChild(contato)

    const desligar = document.createElement('button')
    desligar.classList.add('desligar')
    desligar.innerText = 'X'
    divLigacao.appendChild(desligar)
    desligar.addEventListener('click', () => encerrar(divLigacao))
}

function mudarTelaDoTeuCel () {
    /******No teu celular*****/
    const divLigacaoR = document.createElement('div')
    divLigacaoR.classList.add('divLigacao')
    teuMenu.appendChild(divLigacaoR)

    const cronR = document.createElement('h1')
    cronR.classList.add('cron')
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
    desligarR.addEventListener('click', () => encerrar(divLigacaoR))
}


function irParaHome () {
    limparTelaFim()

    meuMenu.appendChild(menuRemovi)
    meuMenu.appendChild(atalhoRemovi)

    teuMenu.appendChild(tuaTela)
    teuMenu.appendChild(teuAtalho)

    results.innerText = ''
}

function encerrar () {
    const tempo = document.querySelector('.cron').innerHTML
    const displayContato = document.querySelector('.contatoLigacaoR').innerHTML

    limparTelaDeLigacao()

    mostrarFimDaLigacaoMeuCelular(tempo, displayContato)
    mostrarFimDaLigacaoTeuCelular(tempo, displayContato)
    console.log(displayContato)
    
    clearInterval(crono)
    setTimeout(() => irParaHome(), 3000)
    
}

function mostrarFimDaLigacaoMeuCelular (tempo, displayContato) {
    const fim = document.createElement('div')
    fim.classList.add('fim')
    meuMenu.appendChild(fim)

    const nota = document.createElement('p')
    nota.innerText = 'Fim da liga????o'
    nota.classList.add('nota')
    fim.appendChild(nota)

    const displayTempo = document.createElement('h1')
    displayTempo.innerText = tempo
    fim.appendChild(displayTempo)

    const contatu = document.createElement('p')
    contatu.innerText = displayContato
    fim.appendChild(contatu)
}
function mostrarFimDaLigacaoTeuCelular (tempo, displayContato) {
    const fimT = document.createElement('div')
    fimT.classList.add('fim')
    teuMenu.appendChild(fimT)

    const notaT = document.createElement('p')
    notaT.innerText = 'Fim da liga????o'
    notaT.classList.add('nota')
    fimT.appendChild(notaT)

    const displayTempoT = document.createElement('h1')
    displayTempoT.innerText = tempo
    fimT.appendChild(displayTempoT)

    const contatuT = document.createElement('p')
    contatuT.innerText = displayContato
    fimT.appendChild(contatuT)
}

function limparTelaFim () {
    const fins = document.querySelectorAll('.fim')
    meuMenu.removeChild(fins[0])
    teuMenu.removeChild(fins[1])
}

function limparTelaDeLigacao () {
        const divs = document.querySelectorAll('.divLigacao')
        meuMenu.removeChild(divs[0])
        teuMenu.removeChild(divs[1])     
}