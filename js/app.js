/*
*    -> Language: Portuguese - BR
*/
const checarCorSaldo = () => {
    const caixaResultadoFinal = document.querySelector('#boxResultado')
    let valorResultado = parseInt(document.querySelector('#resultado').innerHTML)
    
    if(valorResultado>0){
        caixaResultadoFinal.style.border="#58d67c 3px solid"
    }else if(valorResultado<0){
        caixaResultadoFinal.style.border="#e5383b 3px solid"
    }else{
        caixaResultadoFinal.style.border="3px solid rgb(255, 219, 166)"
    }
}

function deletarCaixa(e,s) {
    let pai = e.parentNode
    let filhos = pai.children
    console.log(filhos[1].innerHTML)

    pai.style.display = 'none'

    let resultadoFinal = document.querySelector('#resultado')
    let valorResultado = parseInt(document.querySelector('#resultado').innerHTML)
    if(s == 'ganho'){
        resultadoFinal.innerHTML = valorResultado - filhos[1].innerHTML
    }else{
        resultadoFinal.innerHTML = parseInt(valorResultado) + parseInt(filhos[1].innerHTML)
    }
    checarCorSaldo()
}

function adicionar() {
    const boxGanhos = document.querySelector('#ganhos')
    let nomeGanho = document.querySelector('[credito]').value
    let valorGanho = parseInt(document.querySelector('[valorCredito]').value)

    const resultadoFinal = document.querySelector('#resultado')
    let valorResultado = parseInt(document.querySelector('#resultado').innerHTML)

    if (nomeGanho && valorGanho) {
        let novoGanho = document.createElement('div')
        boxGanhos.appendChild(novoGanho)
        novoGanho.classList.add('itemPequeno')
        novoGanho.classList.add('verde')

        let nomeNovoGanho = document.createElement('p')
        nomeNovoGanho.innerHTML = nomeGanho
        novoGanho.appendChild(nomeNovoGanho)

        let valorNovoGanho = document.createElement('p')
        valorNovoGanho.innerHTML = valorGanho
        novoGanho.appendChild(valorNovoGanho)

        resultadoFinal.innerHTML = valorResultado + valorGanho
        checarCorSaldo()

        document.querySelector('[credito]').value = ''
        document.querySelector('[valorCredito]').value = ''

        let botaoFechar = document.createElement('button')
        botaoFechar.innerHTML = 'X'
        botaoFechar.classList.add('botaoApagar')
        botaoFechar.classList.add('verdeHoverPequeno')
        botaoFechar.setAttribute('onClick', 'deletarCaixa(this,"ganho")')
        novoGanho.appendChild(botaoFechar)
    }
}

function reduzir() {
    let resultadoFinal = document.querySelector('#resultado')
    let valorResultado = parseInt(document.querySelector('#resultado').innerHTML)

    const boxPerdas = document.querySelector('#perdas')
    let nomePerda = document.querySelector('[despesa]').value
    let valorPerda = parseInt(document.querySelector('[valorDespesa]').value)

    if (nomePerda && valorPerda) {
        let novaPerda = document.createElement('div')
        boxPerdas.appendChild(novaPerda)
        novaPerda.classList.add('itemPequeno')
        novaPerda.classList.add('vermelho')

        let nomeNovaPerda = document.createElement('p')
        nomeNovaPerda.innerHTML = nomePerda
        novaPerda.appendChild(nomeNovaPerda)

        let valorNovaPerda = document.createElement('p')
        valorNovaPerda.innerHTML = valorPerda
        novaPerda.appendChild(valorNovaPerda)

        resultadoFinal.innerHTML = valorResultado - valorPerda
        checarCorSaldo()

        document.querySelector('[despesa]').value = ''
        document.querySelector('[valorDespesa]').value = ''

        let botaoFechar = document.createElement('button')
        botaoFechar.innerHTML = 'X'
        botaoFechar.classList.add('botaoApagar')
        botaoFechar.classList.add('vermelhoHoverPequeno')
        botaoFechar.setAttribute('onClick', 'deletarCaixa(this,"perda")')
        novaPerda.appendChild(botaoFechar)
    }
}
