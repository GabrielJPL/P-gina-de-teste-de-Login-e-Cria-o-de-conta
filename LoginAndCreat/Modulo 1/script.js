function carregar() {
    let msg = window.document.getElementById('msg');
    let data = new Date();
    let horas =  data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    const msgD = window.document.getElementById('msgD');
    if (horas >= 0 && horas <= 12){
        //Bom dia
        msg.innerHTML = `Agora são ${horas} horas: ${minutos} minutos e ${segundos} segundos`;
        msgD.innerHTML = `Bom dia`;
    } else if (horas >= 12 && horas <= 18){
        // Boa tarde
        msg.innerHTML = `Agora são ${horas} horas:  ${minutos} minutos e ${segundos} segundos`;
        copyright.style.color = "black";
        msgD.innerHTML = `Boa tarde`;
    } else{
        //Boa noite
        msg.innerHTML = `Agora são ${horas} horas:  ${minutos} minutos e ${segundos} segundos`;
        copyright.style.color = "white";
        msgD.style.color = "white";
        msgD.innerHTML = `Boa noite`;
    }
}
function enviardados(){
    const nomeuser = window.document.getElementById('nome').value;
    const idadeuser = window.document.getElementById('idade').value;
    const datauser = {nomeuser , idadeuser};
    const password1Val = window.document.getElementById('password1').value;
    let note = document.getElementById('note');
    let note1 = document.getElementById('note1');

    let verificacao = false;

    const temMinuscula = /[a-z]/.test(password1Val);
    const temNumero = /[0-9]/.test(password1Val);
    const tamanhoMinimo = password1Val.length >= 8;

    // Verificação da Senha
    if (temMinuscula && temNumero && tamanhoMinimo) {
        note.style.color = "green";
        note.innerHTML = "Senha forte";
    } else {
        note.style.color = "red";
        note.innerHTML = "Senha fraca (mínimo 8 caracteres, letra e número)";
    }

    // Verificação de nome e idade
    if (nomeuser === "" || idadeuser === "" || idadeuser >= 100 || idadeuser < 0) {
        note1.style.color = "red";
        note1.innerHTML = "Um campo está incorreto ou faltando";
        verificacao = false;
    } else if (temMinuscula && temNumero && tamanhoMinimo) {
        
        verificacao = true;
    }
    // Finalizando a verificação
    if (verificacao === true){
        note1.style.color = "green"; 
        note1.innerHTML = "Tudo certo";

        setTimeout(() => {
            window.location.href = "/Estudando Html/Skulls/roleta.html";
        }, 1000);
    }
}

const animacenviardador = window.document.getElementById('confirmar');
animacenviardador.addEventListener('click', mouseclic);
animacenviardador.addEventListener('mouseout', mouseou);

function mouseclic(){
    animacenviardador.style.background = 'rgb(248, 161, 0)';
    animacenviardador.style.color = 'black'
    animacenviardador.style.borderColor = 'rgb(255, 255, 255)';
}
function mouseou() {
    animacenviardador.style.background = 'rgb(0, 0, 0)';
    animacenviardador.style.color = 'white'
    animacenviardador.style.borderColor = 'rgb(248,161,0)';
}


const botoes = document.querySelectorAll('.infos');
const painel = document.getElementById('painelinfos');
const displayTexto = document.getElementById('conteudo');

botoes.forEach(botao =>{
    botao.addEventListener('click', () => {
        const secao = botao.getAttribute('data-secao');
        
        if (secao === 'Home'){
            displayTexto.innerHTML = "<h2>Bem-vindo à Home</h2><p>Conteúdo da home aqui...</p>"
        }else if (secao === 'Projetos') {
            displayTexto.innerHTML = "<h2>Meus Projetos</h2><p>Lista de fotos ou links...</p>";
        }else if (secao === 'Contatos'){
            displayTexto.innerHTML = "<h2>Fale Comigo</h2><p>E-mail: teste@teste.com</p>";
        }
    })
})