function LoadFormP2() {
    document.FormP2.inputNome.focus();
}

function ResetForm() {
    document.getElementById("FormP2").reset();
    LoadForm();
}

function ValidateForm() {
    let telefone = document.getElementById('inputTelefone');
    let NIF = document.getElementById('inputNIF');

    let regexTelefone = /^\d{9}$/;
    if (!regexTelefone.test(telefone.value)) {
        telefone.focus();
        telefone.style.color = 'red';
        return false;
    }
    else {
        telefone.style.color = 'black';
        document.getElementById('pStatus').innerHTML = ' ';
        return true
    }

    let regexNIF = /^\d{9}$/
    if (!regexNIF.test(NIF.value)) {
        NIF.focus();
        NIF.style.color = 'red';
        return false;
    }
    else {
        NIF.style.color = 'black';
        document.getElementById('pStatus').innerHTML = ' ';
        return true
    }

}

function validateNome() {
    let nome = document.getElementById('inputNome');
    if (nome.value == ' ') {
        nome.focus();
        nome.style.color = 'red';
        return false;
    }
    else {
        nome.style.color = 'black';
        return true;
    }
}

function validateEMail() {
    let email = document.getElementById('inputEmail');
    //let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(email.value)) {
        email.focus();
        email.style.color = 'red';
        return false;
    }
    else {
        email.style.color = 'black';
        return true
    }
}
