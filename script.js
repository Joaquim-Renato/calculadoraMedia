var textoIntro = document.querySelector('h1')
textoIntro.innerHTML = 'Calculadora da escola ponei feliz';

var paragrafo = document.querySelector('p')
paragrafo.innerHTML = "Insira a nota dy Alune abaixo";


function calculoMedia () {
    var nome = document.getElementById('nomeAlune').value;
  
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var nota4 = parseFloat(document.getElementById('nota4').value);


    var media = (nota1 + nota2 + nota3 + nota4) / 4;

        // Exibir resultado
        var resultado = document.getElementById('resultado');
        if (isNaN(media)) {
            resultado.innerHTML = "Por favor, insira todas as notas corretamente.";
        } else if (media >= 5) {
            resultado.innerHTML = `Alune ${nome} está APROVADE com média ${media.toFixed(2)}!`;
        } else {
            resultado.innerHTML = `Alune ${nome} está REPROVADE com média ${media.toFixed(2)}.`;
        }
    }