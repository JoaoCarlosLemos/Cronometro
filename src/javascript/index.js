
// ---------- REGOLIO ----------//

let horaRelogio = document.querySelector('#hora')
let minutoRelogio = document.querySelector('#minuto')

function atualizaRelogio() { 

    let momentoAtual = new Date()
    let hora    = momentoAtual.getHours() 
    let minuto  = momentoAtual.getMinutes() 
    let strHora    = new String(hora)
    let strMinuto  = new String(minuto)

    if (strMinuto.length == 1) minuto = "0" + minuto 
    if (strHora.length == 1) hora = "0" + hora 

    horaRelogio.textContent = hora
    minutoRelogio.textContent = minuto

    setTimeout("atualizaRelogio()",1000) 
}

// ---------- DATA / DIA DA SEMANA ----------//

let data = document.querySelector('#data')
let semana = document.querySelector('#semana')
let dataHora = new Date()

function pegarData() {

    let diaDaSemana = dataHora.getDay()
    let dia = dataHora.getDate()
    let mes = dataHora.getMonth()+1
    let ano = dataHora.getFullYear()
    let strDia = new String(dia)
    let strMes = new String(mes)

    if(strDia.length == 1) mes = '0' + dia
    if(strMes.length == 1) mes = '0' + mes

    
    switch(diaDaSemana) {
        case 0:
            diaDaSemana = 'DOMINGO'
            break;
        case 1:
            diaDaSemana = 'SEGUNDA-FEIRA'
            break;
        case 2:
            diaDaSemana = 'TERCA-FEIRA'
            break;
        case 3:
            diaDaSemana = 'QUARTA-FEIRA'
            break;
        case 4:
            diaDaSemana = 'QUINTA-FEIRA'
            break;
        case 5:
            diaDaSemana = 'SEXTA-FEIRA'
            break;
        case 6:
            diaDaSemana = 'SABADO'
            break;
    } 


    let dataAtual ='DATA - ' + dia + '-' + mes + '-' + ano

    semana.textContent = diaDaSemana
    data.textContent = dataAtual

}

pegarData();

// ---------- CRONÔMETRO ----------//

let segundos=0
var minutos=0
let horas=0
let intervalo=0

function iniciar(){
    contador()
    intervalo=setInterval(contador,1000)
    document.getElementById("btn-iniciar").disabled = true;
}

function pausar(){
    clearInterval(intervalo)
    document.getElementById("btn-iniciar").disabled = false;
}

function parar(){
    clearInterval(intervalo)
    segundos=0
    minutos=0
    horas=0
    document.getElementById('ss').innerText='00'
    document.getElementById('mm').innerText='00'
    document.getElementById('hh').innerText='00'
    document.getElementById("btn-iniciar").disabled = false;
}

function doisDigitos(digito){
    if(digito<10){
        return('0'+digito)
    }else{
        return(digito)
    }
}

function contador(){
    segundos++

    if(segundos==60){
        minutos++
        segundos=0
        if(minutos==60){
            horas++
            minutos=0
        }
    }

    document.getElementById('ss').innerText=doisDigitos(segundos)
    document.getElementById('mm').innerText=doisDigitos(minutos)
    document.getElementById('hh').innerText=doisDigitos(horas)
}


