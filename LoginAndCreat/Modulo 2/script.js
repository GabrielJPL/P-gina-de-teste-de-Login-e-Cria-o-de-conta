function carregar() {
    const msgD = window.document.getElementById('diatardenoite')
    const data = new Date()
    const horas = data.getHours()
    if (horas >= 0 && horas <= 12){
        //Bom dia
        document.body.style.background = `#F0E68C`
        msgD.innerHTML = `Bom dia`
    } else if (horas >= 12 && horas <= 18){
        // Boa tarde
        document.body.style.background = `#3CB371`
        msgD.style.color = "black"
        copyright.style.color = "black"
        msgD.innerHTML = `Boa tarde`
    } else{
        document.body.style.background = `#363636`
        //Boa noite
        copyright.style.color = "white"
        msgD.style.color = "white"
        msgD.innerHTML = `Boa noite`
    }
}

function criar() {
    const senhaD = document.getElementById('senhaparausuario').value;
    const senhaE = document.getElementById('confirmarsenha').value;
    const idadeInformada = document.getElementById('idade').value; // Pega o número digitado
    const aviso = document.getElementById('aviso');

    // 1. Verifica se a idade é menor que 18
    if (idadeInformada < 18) {
        aviso.style.color = 'red';
        aviso.innerHTML = "Acesso negado: você precisa ter 18 anos ou mais.";
        return; // Para a função aqui
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