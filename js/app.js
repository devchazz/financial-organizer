/*
*    -> Language: Portuguese - BR
*/
//Checar se o saldo final é positivo ou negativo e mudar a cor:
const checarCorSaldo = () => {
    //Pegando resultado final:
    const caixaResultadoFinal = document.querySelector('#boxResultado')
    let valorResultado = parseInt(document.querySelector('#resultado').innerHTML)
    
    //Mudando cor da borda do resultado final:
    if(valorResultado>0){
        caixaResultadoFinal.style.border="#58d67c 3px solid"
    }else if(valorResultado<0){
        caixaResultadoFinal.style.border="#e5383b 3px solid"
    }else{
        caixaResultadoFinal.style.border="3px solid rgb(255, 219, 166)"
    }
}

//Apagando item indesejado:
function deletarCaixa(e,s) {
    //Seleção do elemento
    let pai = e.parentNode
    let filhos = pai.children
    console.log(filhos[1].innerHTML)

    //Deletando elemento
    pai.style.display = 'none'

    //Atualizar o saldo
    let resultadoFinal = document.querySelector('#resultado')
    let valorResultado = parseInt(document.querySelector('#resultado').innerHTML)
    if(s == 'ganho'){
        resultadoFinal.innerHTML = valorResultado - filhos[1].innerHTML
    }else{
        resultadoFinal.innerHTML = parseInt(valorResultado) + parseInt(filhos[1].innerHTML)
    }
    checarCorSaldo()
}

//Ao clicar em adicionar ganhos:
function adicionar() {
    //Pegando valores digitados:
    const boxGanhos = document.querySelector('#ganhos')
    let nomeGanho = document.querySelector('[credito]').value
    let valorGanho = parseInt(document.querySelector('[valorCredito]').value)

    //Pegando resultado final:
    const resultadoFinal = document.querySelector('#resultado')
    let valorResultado = parseInt(document.querySelector('#resultado').innerHTML)

    if (nomeGanho && valorGanho) {
        //Adicionar bloco com novas informações
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

        //Atualizar o saldo
        resultadoFinal.innerHTML = valorResultado + valorGanho
        checarCorSaldo()

        //Limpar campos
        document.querySelector('[credito]').value = ''
        document.querySelector('[valorCredito]').value = ''

        //Criar botao apagar:
        let botaoFechar = document.createElement('button')
        botaoFechar.innerHTML = 'X'
        botaoFechar.classList.add('botaoApagar')
        botaoFechar.classList.add('verdeHoverPequeno')
        botaoFechar.setAttribute('onClick', 'deletarCaixa(this,"ganho")')
        novoGanho.appendChild(botaoFechar)
    }
}

//Ao clicar em adicionar perdas:
function reduzir() {
    //Pegando valores digitados:
    const boxPerdas = document.querySelector('#perdas')
    let nomePerda = document.querySelector('[despesa]').value
    let valorPerda = parseInt(document.querySelector('[valorDespesa]').value)

    //Pegando resultado final:
    let resultadoFinal = document.querySelector('#resultado')
    let valorResultado = parseInt(document.querySelector('#resultado').innerHTML)

    if (nomePerda && valorPerda) {
        //Adicionar bloco com novas informações
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

        //Atualizar o saldo
        resultadoFinal.innerHTML = valorResultado - valorPerda
        checarCorSaldo()

        //Limpar campos
        document.querySelector('[despesa]').value = ''
        document.querySelector('[valorDespesa]').value = ''

        //Criar botao apagar:
        let botaoFechar = document.createElement('button')
        botaoFechar.innerHTML = 'X'
        botaoFechar.classList.add('botaoApagar')
        botaoFechar.classList.add('vermelhoHoverPequeno')
        botaoFechar.setAttribute('onClick', 'deletarCaixa(this,"perda")')
        novaPerda.appendChild(botaoFechar)
    }
}
