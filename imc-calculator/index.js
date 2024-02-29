const calcular = window.document.querySelector('#botaocalcular')

function Calcular(event){
    event.preventDefault();
    const nomebruto = window.document.querySelector('#nome')
    const alturabruta = window.document.querySelector('#altura')
    const pesobruto = window.document.querySelector('#peso')
    const resultado = window.document.querySelector('#respostaarea')

    if (nomebruto, alturabruta, pesobruto !== ''){
        let nome = nomebruto.value
        let altura = Number(alturabruta.value)
        altura = altura / 100;
        let peso = Number(pesobruto.value)
        let divisao1 = peso / altura
        let divisao2 = divisao1 / altura
        let valorfinal = Number(divisao2.toFixed(2))
        resultado.innerHTML = `Olá ${nome}, o seu peso atual é ${peso}kg e o seu imc é ${valorfinal}`
    }else{
    
    }
}
