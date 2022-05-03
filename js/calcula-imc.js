var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("pacienteInvalido");
    }

    if (altura <= 0 || altura >= 3.0) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("pacienteInvalido");
    }

    if (pesoEhValido && alturaEhValida) {
        calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    return tdImc.textContent = imc.toFixed(2);
}