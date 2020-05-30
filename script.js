let convidados = []

function adicionar() {
    // 1) pegar os valores
    let nome = document.getElementById("nome").value // adiciona um novo nome lista "convidados"
    let idade = document.getElementById("idade").value
    let email = document.getElementById("email").value
    // 2) adicionar o vetor
    convidados.push({ nome, idade, email })
    // 3) atualizar o HTML
    atualizarLista()
}

function atualizarLista() {
    //Pegar a section #Lista
    let lista = document.getElementById("lista")
    //limpar a lista
    lista.innerHTML = ""
    // adiciona os elementos
    for (i = 0; i < convidados.length; i++) {
        lista.innerHTML += `
        <tr>
            <td>${convidados[i].nome}</td>
            <td>${convidados[i].idade}</td>
            <td>${convidados[i].email}</td>
            
        </tr>`
    }
}
