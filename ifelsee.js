//FUNTION executa tarefas e calcula valores
function verificarLogin(){
    verificarLogin(){ txtlogin = document.getElementById("txtlogin");
    let txtSenha = document.getElementById("txtSenha");
// primeiro tenho q explicar oq e ESCOPO no JAVA ele ve se a variavel ou metodo e acessivel em um programa,entao o LET limita o escopo vazento ele so tem poucas ou uma expressao que e no caso do LET LOGIN ="TESTE"
    let login = "teste";
    let Senha = "teste";
// nesta linha esta: Ise  a extencao do valor tem o mesmo valor de login extencao 
    if(txtlogin.value == login && txtSenha.value == senha) {
        console.log("logado com sucesso!");
    } else{
        console.log("Login ou senha incorretos! Digite e tente novamente");
    }
}