function validarFormulario() {
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);
    var mensagem = document.getElementById("mensagem");
    if(campoB > campoA){
        mensagem.textContent = "Formulário válido!B é maior que A.";
        mensagem.classList.add("positiva");
        mensagem.classList.remove("negativa");
    }else{
        mensagem.textContent = "Formulário inválido!B deve ser maior que A.";
        mensagem.classList.add("negativa");
        menseger.classList.remove("positiva");
    }

    return false;
}
