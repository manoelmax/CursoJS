function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img') //cria o elemento img
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'bebê-homem.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'jovem-homem.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'homem-adulto.jpg')
            }else{
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'bebê-mulher.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'jovem-mulher.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'mulher-adulta.jpg')
            }else{
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos.`
        res.appendChild(img) //adiciona o elemento
    }
}