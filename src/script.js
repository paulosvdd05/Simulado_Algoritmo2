const obj = []


const cadastrar = async () => {
    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value
    const sexo = document.getElementById('sexo').value
    const div = document.getElementById('lista')
    const p = document.getElementById('totalRegistros')
    
    if (sexo == 'Selecione...') {
        alert('Selecione um secxo')
    }

    await obj.push({
        nome: nome,
        idade: idade,
        sexo: sexo
    })
    console.log(obj);
    div.innerHTML = ''
    for (let i = 0; i < obj.length; i++) {

        div.innerHTML += `
        <div class="d-flex justify-content-between text-start flex-row">
                <p class="fs-6">${obj[i].nome}</p><p class="fs-6">${obj[i].idade}</p><p class="fs-6">${obj[i].sexo}</p><p class="fs-6"></p>
            </div>
            <hr>
        `

    }
    const total = obj.length
    p.innerHTML = total 

}

const pesquisar = () => {
    const div = document.getElementById('lista')
    div.innerHTML = ''
    const filtro = document.getElementById('filtro').value
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].sexo == filtro) {

            div.innerHTML += `
        <div class="d-flex justify-content-between text-start flex-row">
                <p class="fs-6">${obj[i].nome}</p><p class="fs-6">${obj[i].idade}</p><p class="fs-6">${obj[i].sexo}</p><p class="fs-6"></p>
            </div>
            <hr>
        `
        }else if ( filtro == 'Todos' ) {

            div.innerHTML += `
        <div class="d-flex justify-content-between text-start flex-row">
                <p class="fs-6">${obj[i].nome}</p><p class="fs-6">${obj[i].idade}</p><p class="fs-6">${obj[i].sexo}</p><p class="fs-6"></p>
            </div>
            <hr>
        `
        }


    }
}
