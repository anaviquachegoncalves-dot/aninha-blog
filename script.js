const botoes = decument.queryselectorAll('button');

botoes.forEach(botao => { 
     botao.addEventlistener('click', curtir)
      let curtiu = false
function curtir() {
     let curtidas = document.queryselector('span')
    if(curtiu == false){
        curtiu = true
        curtidas.textcontent++
        botao.style.beckgroundColor = 'blue'
    }
    }
});