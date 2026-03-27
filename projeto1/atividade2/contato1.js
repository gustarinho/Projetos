const form = document.querySelector("#contactForm");
const nomeInput = document.querySelector("#nome");
const telefoneInput = document.querySelector("#telefone");
const emailInput = document.querySelector("#email");
const assuntoInput = document.querySelector("#assunto");
const msgInput = document.querySelector("#msg");

function somenteNumeros(text){
    return text.replace(/\D/g, '');
    //replace procura algo no texto 
    // para substituir, nesse caso vazio ''
}
function formatoTelefone(value){
    const numeros = somenteNumeros(value).slice(0,11);
    if(numeros.length <=2) return `(${numeros}`;
    if(numeros.length <=7) return `(${numeros.slice(0,2)}) ${numeros.slice(2)}`;
    return `(${numeros.slice(0,2)})${numeros.slice(2,7)}-${numeros.slice(7)}`;
}
telefoneInput.addEventListener("input",(event)=>{
    event.target.value = formatoTelefone(event.target.value);
});

function validarEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();//não envia o formulário se tiver erros
    if(!validarEmail(emailInput.value)){
        alert("Por favor, insira um email válido.");
        emailInput.focus();
        event.preventDefault();
        return;
    }
    if(nomeInput.value.trim() === "" || nomeInput.value.trim().lenght < 3){
        alert("Por favor, insira um nome válido com pelo menos 3 caracteres.");
        nomeInput.focus();
        event.preventDefault();
        return;
    }
    if(msgInput.value.trim() === ""){
        alert("Por favor, insira uma mensagem.");
        msgInput.focus();
        event.preventDefault();
        return;
    }
    //lógica do mailto:
    /* const destinatario="luciana.seguin@docente.senai.br";
    const assunto = encodeURIComponent(assuntoInput.value);
    const mensagem = encodeURIComponent(
        `Nome: ${nomeInput.value}\n` +
        `Telefone: ${telefoneInput.value}\n`+ 
        `Email: ${emailInput.value}\n\n`+
        `Mensagem: \n ${msgInput.value}`);
    
        const enviarEmail = `mailto:${destinatario}?subject=${assunto}&body=${mensagem}`;
    window.location.href = enviarEmail;*/


    
    //
alert("Formulário enviado com sucesso!");
form.submit();

});
