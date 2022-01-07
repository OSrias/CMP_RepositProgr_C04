function ValidateAge() {

    // 1. Declarar variáveis: valor da textbox, e para mensagem
    let age, message;
    

    // 2. Ler da textbox e atribuir a respetiva variável
    age = document.getElementById("textAge").value;


    // 3. Avaliar o valor da variável da idade e dar a respeitiva mensagem correta
    if (isNaN(age) || age <= 18) {
        message = "Idade Errada!";
    }
    else {
        message = "Entrada correta da Idade";
    }

    // 4. Escrever no ecrã a mensagem
    document.getElementById("pMessage").innerHTML = message;

}