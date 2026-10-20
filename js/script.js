var clientes = [];
var alunos = [];
var botoes = document.querySelectorAll(".tab");
for (var i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        var abas = document.querySelectorAll(".aba");

        for (var j = 0; j < abas.length; j++) {
            abas[j].hidden = true;
        }

        for (var j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("active");
        }

        var abaAlvo = document.getElementById("aba-" + this.dataset.aba);
        if (abaAlvo) {
            abaAlvo.hidden = false;
        }
        this.classList.add("active");
    };
}

var formCliente = document.getElementById("form-cliente");
if (formCliente) {
    formCliente.onsubmit = function (e) {
        e.preventDefault();

        var nome = document.getElementById("nome-cliente").value;
        var carroEl = document.getElementById("carro-cliente");
        var carro = carroEl ? carroEl.value : "";

        clientes.push({ nome: nome, carro: carro });

        var listaTurmas = document.getElementById("lista-turmas");
        if (listaTurmas) {
            listaTurmas.innerHTML +=
                "<div class='item'>" +
                "<h3>" + nome + "</h3>" +
                "<p><strong>Carro Desejado:</strong> " + (carro || "Não informado") + "</p>" +
                "</div>";
        }

        var contadorClientes = document.getElementById("q-clientes");
        if (contadorClientes) {
            contadorClientes.innerText = clientes.length;
        }

        this.reset();
    };
}

var formEstudante = document.getElementById("form-estudante");
if (formEstudante) {
    formEstudante.onsubmit = function (e) {
        e.preventDefault();

        var nome = document.getElementById("nome-estudante").value;
        var matricula = document.getElementById("matricula").value;

        alunos.push({ nome: nome, matricula: matricula });

        var listaEstudantes = document.getElementById("lista-estudantes");
        if (listaEstudantes) {
            listaEstudantes.innerHTML +=
                "<div class='item'>" +
                "<h3>" + nome + "</h3>" +
                "<p><strong>Cadastro Registrado:</strong> " + matricula + "</p>" +
                "</div>";
        }

        this.reset();
    };
}

var btnExportar = document.getElementById("exportar");
if (btnExportar) {
    btnExportar.onclick = function () {
        alert("Relatório de Clientes BMW HAUS MOTORS gerado com sucesso!");
    };
}
