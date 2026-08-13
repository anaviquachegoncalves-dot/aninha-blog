const botoes = decument.queryselectorAll('button');

botoes.forEach(botao => { 
     botao.addEventlistener('click', curtir)

function curtir() {
     let curtidas = document.queryselector('span')
     curtidas.textcontent++
    }
});