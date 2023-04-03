const form = document.getElementById('form-html');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');
const areaA = numeroA;
const areaB = numeroB;
let formValido = false;

function validaArea(areaA, areaB){
    return areaB > areaA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroPA = parseFloat(numeroA.value);
    const numeroPB = parseFloat(numeroB.value);
    const mensagemSucesso = `O formulário é valido devido o número B:  (<b>${numeroB.value}</b>) ser maior que o número A:  (<b>${numeroA.value}</b>) .`;
    const mensagemErro =  `O formulário não é valido devido o número B:  (<b>${numeroB.value}</b>) ser menor ou igual do que o número A:  (<b>${numeroA.value}</b>) .`;
    
    formValido = validaArea(numeroPA, numeroPB);
    if (formValido == true) {
        const containerMensagemSucesso = document.querySelector('.mensagem-k');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
            
        numeroA.value = '';
        numeroB.value = '';
    } else {
        if(!formValido) {
            const containerMensagemErro = document.querySelector('.mensagem-nk');
            containerMensagemErro.innerHTML = mensagemErro;
            containerMensagemErro.style.display = 'block';
        };
        
    };
});

