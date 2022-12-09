function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')

    var data = new Date()
    //var hora = data.getHours()
    var hora = 2
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora > 0 && hora <= 12){
        //bom dia
        imagem.src = 'manhã-pequena.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora > 12 && hora < 18){
        //boa tarde
        imagem.src = 'tarde-pequena.jpg'
        document.body.style.backgroundColor = '#b9846f'
    }else{
        //boa noite
        imagem.src = 'noite-pequena.jpg'
        document.body.style.backgroundColor = '#515154'
    }
}

