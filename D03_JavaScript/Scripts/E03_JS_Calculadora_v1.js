function valida() {
    if (document.getElementById("valor1").value == "" || document.getElementById("valor2").value == "") {
        alert("Valor não informador");
        return false;
    } else {
        if (validanumero()) {
            return true;
        } else {
            return false;
        }
    }

}
function validanumero() {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    if (isNaN(valor1)) {
        alert("Valor primeiro campo não numerico");
        return false;
    }
    if (isNaN(valor2)) {
        alert("Valor do segundo campo não numerico");
        return false;
    } else {
        return true;
    }
}

function resultado( valor1, valor2 = " ") {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    let resultadosoma = (valor1 + valor2);
    document.getElementById("resultado").value = resultado;

    let resultadosubstrair = (valor1 - valor2);
    document.getElementById("resultado").value = resultado;

    let resultadodividir = (valor1 / valor2);
    document.getElementById("resultado").value = resultado;

    let resultadomultiplicar = (valor1 * valor2);
    document.getElementById("resultado").value = resultado;

}
