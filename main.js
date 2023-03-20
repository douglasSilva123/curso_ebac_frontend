const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto){
   const nomeComoArray = nomeCompleto.split(' ');
   return nomeComoArray.length >= 2;
}

form.addEventListener('submit',function(e){
    let formEvalido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = 'Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario} - conta:${numeroContaBeneficiario}';


    formEvalido = validaNome(nomeBeneficiario.value)
    if (formEvalido){
        alert("mensagemSucesso");
    }else{
        alert("O nome não esta completo");
    }
})

console.log(form);