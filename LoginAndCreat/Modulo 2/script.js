function carregar() {
    const msgD = window.document.getElementById('diatardenoite')
    const data = new Date()
    const horas = data.getHours()
    if (horas >= 0 && horas <= 12){
        //Bom dia
        msgD.innerHTML = `Bom dia`
    } else if (horas >= 12 && horas <= 18){
        // Boa tarde
        msgD.innerHTML = `Boa tarde`
    } else{
        //Boa noite
        msgD.innerHTML = `Boa noite`
    }
}

function criar() {
    const senhaD = document.getElementById('senhaparausuario').value;
    const senhaE = document.getElementById('confirmarsenha').value;
    const idadeInformada = document.getElementById('idade').value; // Pega o número digitado
    const aviso = document.getElementById('aviso');
    const aviso1 = document.getElementById('aviso1');

    // 1. Verifica se a idade é menor que 18
    if (idadeInformada < 10) {
        aviso.style.color = 'red';
        aviso.innerHTML = "Acesso negado: A idade não é reconhecida";
        return;
    }

    // 2. Verifica se as senhas coincidem
    if (senhaD !== senhaE) {
        aviso.style.color = 'red';
        aviso.innerHTML = "As senhas não coincidem!";
    } else {
        aviso.style.color = 'green';
        aviso.innerHTML = "Tudo certo, criando conta...";

        setTimeout(() => {
            window.location.href = "/Estudando Html/Skulls/roleta.html";
        }, 1000);
    }
}