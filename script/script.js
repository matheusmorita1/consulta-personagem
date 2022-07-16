var resultado = document.querySelector('div#resultado')

function clicou() {
    var nome = document.querySelector('input#ibusca').value
    var img = document.createElement('img')

    img.setAttribute('id', 'foto')

    switch (nome.toLowerCase()) {
        case 'mario':
            img.setAttribute('src', 'personagem/mario.png')
            break
        case 'luigi':
            img.setAttribute('src', 'personagem/luigi.png')
            break
        case 'yoshi':
            img.setAttribute('src', 'personagem/yoshi.png')
            break
        case 'sonic':
            img.setAttribute('src', 'personagem/sonic.png')
    }

    resultado.style.textAlign = 'center'
    resultado.innerHTML = `<p>Aqui está ${nome}!!!</p>`
    resultado.appendChild(img)
}