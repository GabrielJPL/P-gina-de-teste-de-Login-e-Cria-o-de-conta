function carregar() {
    let msg = window.document.getElementById('msg');
    let data = new Date();
    let horas =  data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    const msgD = window.document.getElementById('msgD');
    if (horas >= 0 && horas <= 12 && minutos){
        //Bom dia
        msg.innerHTML = `Agora são ${horas} horas: ${minutos} minutos e ${segundos} segundos`;
        msgD.innerHTML = `Bom dia`;
    } else if (horas >= 12 && horas <= 17){
        // Boa tarde
        msg.innerHTML = `Agora são ${horas} horas:  ${minutos} minutos e ${segundos} segundos`;
        msgD.innerHTML = `Boa tarde`;
    } else{
        //Boa noite
        msg.innerHTML = `Agora são ${horas} horas:  ${minutos} minutos e ${segundos} segundos`;
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
        note.innerHTML = "Senha fraca (mínimo 8 caracteres, letra e número";
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
            window.location.href = "/Projetos/Sistemas/LoginAndCreat/Modulo 0/pagina inicial beta5.html";
        }, 1000);
    };
};

const botoes = document.querySelectorAll('.infos');
const painel = document.getElementById('painel-conteudo');
const displayTexto = document.getElementById('texto-dinamico');

botoes.forEach(botao => {
    botao.addEventListener('mouseenter', () => {
        const secao = botao.getAttribute('data-secao');
        
        // Verifica se o painel já está aberto com o MESMO conteúdo
        if (painel.classList.contains('aberto') && painel.dataset.ativa === secao) {
            fecharPainel();
            return;
        }

        // Define o conteúdo
        let html = "";
        if (secao === 'home') html = "<h2>Home</h2><p>Este projeto se conciste apenas e unicamente para fins de estudo próprio. Próvavel cancelamento de continuidade deste projeto caso outro projeto seja desenvolvido.</p>";
        if (secao === 'menu') html = "<h2>Menu</h2><p>Caso não tenha uma conta, por favor crie uma! Logo abaixo da seção. </p> <p> Não tem outras opções no momento</p>";
        if (secao === 'especialista') html = "<h2>Especialista</h2><p>Equipe com apenas um dev</p>";
        if (secao === 'contatos') html = "<h2>Contatos</h2><p>WhatsApp: (00) 0000-0000</p>";
        if (secao === 'sobre') html = "<h2>Sobre</h2><p>Este projeto é apenas para estudos e exibição, não irá ao ar tão cedo.</p>";
        if (secao === 'projetos') html = "<h2>Projetos</h2><div><a id='aa' href='/Sistemas/Alfas e betas/Roleta.html' target='_blank'>Roleta</a></div> <div><a id='aa' href='/Sistemas/Alfas e betas/calculadora alfa 1.1.html' target='_blank'>Calculadora</a></div> <div><a id='aa' href='/Sistemas/Alfas e betas/LoginUser beta 1.html' target='_blank'>Login beta 1</a></div> <div><a id='aa' href='/Sistemas/Alfas e betas/LoginUser beta 2.html' target='_blank'>Login beta 2</a></div>";

        displayTexto.innerHTML = html;
        
        // Abre o painel e marca qual seção está ativa
        painel.classList.add('aberto');
        painel.dataset.ativa = secao; 

    });
});

botoes.forEach(botao => {
    botao.addEventListener('click',
        function fecharPainel() {
        painel.classList.remove('aberto');
        painel.style.transform = "";
        painel.dataset.ativa = ""; // Limpa a seção ativada
    });
}
);

let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');
});