function corrigir(){
    document.querySelector(".hide").style.display = "block";

    let acertos = 0;
    let percent = 0;
    let erros = 5;

    let name = document.getElementById("texto").value;
    document.getElementById("nome").innerHTML = ("Aluno: " + name);

    // primeira questão
    let Q1 = document.getElementById("Q01").value;
    if (Q1 == "informática") {
        acertos += 1;
        percent += 20;
        erros -= 1;
    }
    // segunda questão
    let Q2 = document.getElementById("Q02").value;
    let sla1 = Q2.includes("informática");
    let sla2 = Q2.includes("administração");
    let sla3 = Q2.includes("enfermagem");
    if (sla1 && sla2 && sla3){
        acertos += 1;
        percent += 20;
        erros -= 1;
    }
    // terceira questão
    if (document.getElementById('check2').checked && document.getElementById('check4').checked) {
        acertos += 1;
        percent += 20;
        erros -= 1;
    }
    // quarta questão
    if (document.getElementById("con").checked){
        acertos += 1;
        percent += 20;
        erros -= 1;
    }
    // quinta questão
    if (document.getElementById("ver").checked){
        acertos += 1;
        percent += 20;
        erros -= 1;
    }
    // resultado
    document.getElementById("corretas").innerHTML = ("Acertou: " + acertos + " de 5");
    document.getElementById("percentual").innerHTML = ("Percentual: " + percent + "%");
    document.getElementById("erros").innerHTML = ("Errou " + erros + " de 5");

}