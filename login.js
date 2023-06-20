//codigo de valiação de formulario de login
function verificar(){
    let email = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;

    if(!email || !senha){
        alert("Campos de preenchimento obrigatório. Favor preencher");
    }
}