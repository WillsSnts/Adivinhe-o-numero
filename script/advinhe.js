// Random numero de 1 a 100
let numeroCorreto = Math.floor(Math.random() * 100) + 1;

// Número de tentativas e as tentativas  e punição;
let tentativas = 10;
let tentativasRestantes = 10;
let punicao = 0;

//Componentes html
const msgTela = document.getElementById("mensagem");//mensagem
const inputs = document.getElementById("resposta");//campo de resposta
const btnConf = document.getElementById("confirma");//confirma
const btnRein = document.getElementById("reinicia");//reiniciar
const tent = document.getElementById("numTent");//numero de tentativas
const msgTent = document.getElementById("tentativas");
const msgTot = document.getElementById("text");
const msgCab = document.getElementById("textcab");

//desabilita o reiniciar
btnRein.disabled = true;


btnRein.style.borderColor = "#D3D3D3";

btnRein.style.color = "#D3D3D3";

// Verificar o resposta do jogador
function vResposta() 
{
    // Obtenha o resposta do jogador
    let resposta = document.getElementById("resposta").value;

    // A resposta é válida
    //isNaN = is Not-A-Number (não é um numero)
    if (isNaN(resposta) || resposta < 1 || resposta > 100)
    {

        if(punicao < 3)
        {
            msgTela.innerHTML = "Não me engane! Digite um número entre 1 e 100.";
            punicao++;
            mensagem.style.color = "#00FF00";
        }
        else
        {
            msgTela.innerHTML = "Voce não me ouviu! A cada vez que brincar comigo perderá uma chance!";
            tentativasRestantes--;
            inputs.style.color = "#FF0000";
            inputs.style.borderColor = "#FF0000";
            mensagem.style.color = "#FF0000";
            msgTent.style.color = "#FF0000";
            msgTot.style.color = "#FF0000";
            msgCab.style.color = "#FF0000";
            msgCab.style.borderColor = "#FF0000";
            btnConf.style.borderColor = "#FF0000";
            btnConf.style.color = "#FF0000";
            msgTent.innerHTML = "Você tem " +  (tent.innerHTML = tentativasRestantes) + " Tentativas...";
        }
        if(tentativasRestantes == 0) 
        {
            msgTela.innerHTML = "Fim de jogo! Eu venci! O numero correto era " + numeroCorreto + ".";
            inputs.disabled = true;
            btnConf.disabled = true;
            btnRein.disabled = false;
            tent.innerHTML = tentativasRestantes;
            btnRein.style.borderColor = "#00FF00";
            btnRein.style.color = "#00FF00";
            return;
        }
        return;
    }

    // Diminui número de tentativas restantes
    tentativasRestantes--;    

    // Acertou?
    if (resposta == numeroCorreto) 
    {
        msgTela.innerHTML = "Parabéns! Você acertou em " + (10 - tentativasRestantes) + " tentativas.";
        inputs.disabled = true;
        btnConf.disabled = true;
        btnRein.disabled = false;
        btnRein.style.borderColor = "#00FF00";
        btnRein.style.color = "#00FF00";
        mensagem.style.color = "#00FF00";
        btnConf.style.borderColor = "#D3D3D3";
        btnConf.style.color = "#D3D3D3";
        return;
    }
    
    //Ficou sem tentativas
    if(tentativasRestantes == 0) 
    {
        btnRein.style.borderColor = "#00FF00";
        btnRein.style.color = "#00FF00";
        msgTela.innerHTML = "Fim de jogo! Eu venci! O numero correto era " + numeroCorreto + ".";
        inputs.disabled = true;
        btnConf.disabled = true;
        btnRein.disabled = false;
        tent.innerHTML = tentativasRestantes;
        mensagem.style.color = "#FF0000";
        msgTent.style.color = "#FF0000";
        msgTot.style.color = "#FF0000";
        msgCab.style.color = "#FF0000";
        msgCab.style.borderColor = "#FF0000";
        btnConf.style.borderColor = "#FF0000";
        btnConf.style.color = "#FF0000";
        msgTent.innerHTML = "Você tem " +  (tent.innerHTML = tentativasRestantes) + " Tentativas...";
        return;
    }

    //Dicas se o número correto é maior ou menor
    if (resposta < numeroCorreto) 
    {
        msgTela.innerHTML = "O número correto é maior.";
        tent.innerHTML = tentativasRestantes;
        msgTela.style.color = "#FA8072";
    }
    else 
    {
        msgTela.innerHTML = "O número correto é menor.";
        tent.innerHTML = tentativasRestantes;
        msgTela.style.color = "#87CEFA";
    }

    msgTent.innerHTML = "Você tem " +  (tent.innerHTML = tentativasRestantes) + " Tentativas...";
}

// Reiniciar o jogo
function reiniciar() 
{
    // Novo numero 
    numeroCorreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = 10;

    // limpar as menssagebs
    msgTela.innerHTML = "";
    msgTent.innerHTML = "Você tem " +  (tent.innerHTML = tentativasRestantes) + " Tentativas...";

    //botoes
    inputs.disabled = false;
    btnConf.disabled = false;
    btnRein.disabled = true;

    // cores
    inputs.style.color = "#00FF00";
    inputs.style.borderColor = "#00FF00";
    mensagem.style.color = "#00FF00";
    msgTent.style.color = "#00FF00";
    msgTot.style.color = "#00FF00";
    msgCab.style.color = "#00FF00";
    msgCab.style.borderColor = "#00FF00";
    btnConf.style.borderColor = "#00FF00";
    btnConf.style.color = "#00FF00";
    btnRein.style.borderColor = "#D3D3D3";
    btnRein.style.color = "#D3D3D3";
}

