document.addEventListener('DOMContentLoaded', function() {
    var slider = document.getElementById("mySlider");
    var quantityOutput = document.getElementById("sliderValue");
    var totalOutput = document.getElementById("totalValue");
    var comprarBtn = document.getElementById("comprarBtn");
    var mensagemCompra = document.getElementById("mensagemCompra");
    var formulario = document.getElementById("formulario");
    var enviarBtn = document.getElementById("enviarBtn");

    var limiteMaximo = 7;

    quantityOutput.textContent = slider.value;
    totalOutput.textContent = slider.value * 10;

    slider.oninput = function() {
        quantityOutput.textContent = this.value;
        totalOutput.textContent = this.value * 10;
    };

    comprarBtn.addEventListener("click", function() {
        var quantidadeJogos = parseInt(slider.value);
        var valorTotal = quantidadeJogos * 10;
        mensagemCompra.textContent = "Você comprou " + quantidadeJogos + " jogos por R$ " + valorTotal.toFixed(2);
    });

    enviarBtn.addEventListener("click", function(event) {
        event.preventDefault();

        var nome = document.getElementById("nome").value;
        var idade = document.getElementById("idade").value;
        var sexo = document.querySelector('input[name="sexo"]:checked').value;
        var receberEmails = document.getElementById("receberEmails").checked;

        console.log("Nome:", nome);
        console.log("Idade:", idade);
        console.log("Sexo:", sexo);
        console.log("Deseja receber e-mails promocionais:", receberEmails);
    });
});