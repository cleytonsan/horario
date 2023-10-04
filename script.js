function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background = '#fbad48'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#f9966c'
    } else {
        // BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#355ba2e3'
    }
}