function abrirImagem(caminho, imgNome) {
    let popup = document.querySelector("section#img-popup")
    popup.style.display = 'flex'

    let titulo = document.createElement('h1')
    titulo.setAttribute('id', 'titulo-popup')
    titulo.innerText = imgNome

    let img = document.createElement('img')
    img.setAttribute('id', 'imagem-popup')
    img.setAttribute('src', '../src/img/' + caminho + '/' + imgNome + '.png')

    popup.appendChild(titulo)
    popup.appendChild(img)
    console.log(img)
}

function fecharImagem() {
    let popup = document.querySelector("section#img-popup")
    let titulo = document.querySelector("h1#titulo-popup")
    let imagem = document.querySelector("img#imagem-popup")

    titulo.remove()
    imagem.remove()
    popup.style.display = 'none'
}