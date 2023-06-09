//caracteriza a forma de ler os dados
function le_Usuarios() {
    let strUsuarios = localStorage.getItem('db');
    let objUsuarios = {};

    if (strUsuarios) {
        objUsuarios = JSON.parse(strUsuarios);
    } else {
        objUsuarios = {
            usuarios: [
                {id: 0, Login: "Teste", Nome: "Tester", Email: "tester@gmail.com", Data: "02/06/2023", Cidade: "Belo Horizonte", Telefone: "31 15341720" }
            ]
        };
    }
    return objUsuarios;
}

//imprime os dados
function imprime_Informacao() {
    let tela = document.getElementById('tela');
    let strHtml = '<p>ID | Login | Nome | Email | Data de Nascimento | Cidade | Telefone</p>';
    let objUsuarios = le_Usuarios();

    for (let i = 0; i < objUsuarios.usuarios.length; i++) {
        strHtml += `<p>${objUsuarios.usuarios[i].id} |
        ${objUsuarios.usuarios[i].Login} |
        ${objUsuarios.usuarios[i].Nome} |
        ${objUsuarios.usuarios[i].Email} |
        ${objUsuarios.usuarios[i].Data} |
        ${objUsuarios.usuarios[i].Cidade} |
        ${objUsuarios.usuarios[i].Telefone}</p>`
    }

    tela.innerHTML = strHtml;
}

//exclui os dados
function exclui_Informacao(){
    localStorage.clear();
}
document.getElementById('btn-imprimir').addEventListener('click', imprime_Informacao);
document.getElementById('btn-excluir').addEventListener('click', exclui_Informacao);
document.getElementById('btn-imprimir').addEventListener('click', exclui_Informacao);
