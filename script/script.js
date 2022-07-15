var resultado = document.querySelector('div#resultado')

function clicou() {
    var nome = document.querySelector('input#ibusca').value
    var img = document.createElement('img')

    img.setAttribute('id', 'foto')

    switch (nome) {
        case 'Mario':
            img.setAttribute('src', 'personagem/mario.png')
            break
        case 'Luigi':
            img.setAttribute('src', 'personagem/luigi.png')
            break
        case 'Yoshi':
            img.setAttribute('src', 'personagem/yoshi.png')
            break
        case 'Sonic':
            img.setAttribute('src', 'personagem/sonic.png')
    }

    resultado.style.textAlign = 'center'
    resultado.innerHTML = `<p>Aqui está ${nome}!!!</p>`
    resultado.appendChild(img)
}