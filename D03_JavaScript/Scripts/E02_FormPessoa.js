function ValidarFormulario() {

    let pessoa = {
        nome: ' ',
        email: ' ',
        telefone: ' ',
        NIF: ' '
    }

    pessoa.nome = document.getElementById("textNome").value;
    pessoa.email = document.getElementById("textEmail").value;
    pessoa.telefone = document.getElementById("textTelefone").value;
    pessoa.NIF = document.getElementById("textNIF").value;
    if (pessoa.nome == " " || pessoa.email == " " || pessoa.telefone == " " || pessoa.NIF == " ") {
        alert('TEM DE PRENCHER O FORMULÁRIO COMPLETO!');
    }
    else
    {
        message = "Formulario Completo!";
    }
    document.getElementById("pMessage").innerHTML = message;
}

function ReiniciarFormulario() {
    document.getElementById("myForm").reset();
    document.getElementById("pMessage").innerHTML = " ";
}
