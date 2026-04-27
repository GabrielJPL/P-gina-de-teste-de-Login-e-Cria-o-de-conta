function carregar() { // Função que carrega os horários, pegando a informação e mudando a mensagem de bom dia dependendo do horário.
    let msg = window.document.getElementById('msg'); //Variável que pegará a variavél do  html.
    let data = new Date(); // Variavél que Pega as informações do calendário.
    let horas =  data.getHours(); // Variavél que pega as horas da variavel data.   
    let minutos = data.getMinutes(); // Variavél que pega os minutos da variavel data.  
    let segundos = data.getSeconds(); // Variavél que pega os segundos da variavel data.  

    console.log('initialization : completed'); 

    const msgD = window.document.getElementById('msgD'); // Pega a variavél msgD (Mensagem do dia) da parte html.

    // Verifica as horas e com base nisso decide se a mensagem aparecerá com *bom dia*, *boa tarde* e ou *boa noite* e muda a variavel msg de acordo com o horário, dizendo que horas, minutos e segundos são exatamente.
    if (horas >= 0 && horas <= 12 && minutos){ // Condição que verifica se a mensagem deve aparecer como bom dia ou não. 
        //Bom dia
        msg.innerHTML = `Agora são ${horas} horas: ${minutos} minutos e ${segundos} segundos`;
        msgD.innerHTML = `Bom dia`;
        console.log(`Hours of initialization : ${horas}h and ${minutos}m and ${segundos}s`);
    } 
    
    else if (horas >= 12 && horas <= 17){ // Condição que verifica se a mensagem deve aparecer como boa tarde ou não. 
        // Boa tarde
        msg.innerHTML = `Agora são ${horas} horas:  ${minutos} minutos e ${segundos} segundos`;
        msgD.innerHTML = `Boa tarde`;
        console.log(`Hours of initialization : ${horas}h and ${minutos}m and ${segundos}s`);
    } 
    
    else { // Condição que assume que a mensagem aparecerá como boa noite caso as condições anteriores não sejam atendidas.
        //Boa noite
        msg.innerHTML = `Agora são ${horas} horas:  ${minutos} minutos e ${segundos} segundos`;
        msgD.innerHTML = `Boa noite`;
        console.log(`Hours of initialization : ${horas}h and ${minutos}m and ${segundos}s`);
    }
} // Fim da função que carrega os horários.

function enviardados(){ // Função de enviar os dados caso o usuário decida acionar está função.
    const nomeuser = window.document.getElementById('nome').value; // Variavel que recebe o input text direcionado para o receber nome do usuario.
    const idadeuser = window.document.getElementById('idade').value; // Variavel que recebe o input number direcionado para receber a idade do usuario.
    const password1Val = window.document.getElementById('password1').value; // Variavel que recebe o input password direcionado para receber a senha do usuario.
    let note = document.getElementById('note'); // Variavel que recebe a variavel do html, o note que serve para avisar o usuario caso algo dê errado ou dê certo.
    let note1 = document.getElementById('note1'); // Variavel que recebe a variavel do html, o note1 que serve para avisar o usuario caso algo dê errado ou dê certo.

    const datauser = {nomeuser , idadeuser, password1Val}; // Variavel que serve para transportar os dados do usuario para outra página html.

    localStorage.setItem('datauser');
    
    let verificacao = false; // Inicio da verificação, a verificação já começa com false para previnir erros e para que ela seja alterada depois que todas as etapas de verificação sejam concluidas.

    console.log( 'tetesting verificationst : ' + verificacao);
    
    if (contaexistente === true) {
        console.log('Conta já existente');
        return window.alert('Conta já existente.')
    }

    const temMinuscula = /[a-z]/.test(password1Val); // Variavel que testa se a senha do usuario possui letras minusculas, indo de A-Z.
    const temNumero = /[0-9]/.test(password1Val); // Variavel que testa se a senha do usuario possui numeros, indo de 0-9.
    const tamanhoMinimo = password1Val.length >= 8; // Variavel que testa se a senha do usuario possui tamanho minimo de 8 caracteres.

    // Verificação da Senha
    
    // Primeira etapa da verificação.
    if (temMinuscula && temNumero && tamanhoMinimo) { console.log('0 [zero] test initialization'); // Condição que libera a passagem da senha e notifica o usuario que a senha está adequada.
        note.style.color = "green";
        note.innerHTML = "Senha forte";
    } 
    else { // Condição que trava a passagem da senha e notifica o usuario que a senha não é adequada.
        note.style.color = "red";
        note.innerHTML = "Senha fraca (mínimo 8 caracteres, letra e número";
    }

    // Verificação de nome e idade

    // Segunda etapada da verificação.

    if (nomeuser === "" || idadeuser === "" || idadeuser >= 100 || idadeuser < 0) { console.log('1 [one] test initialization'); // Trava a passagem do nome e da idade caso não cumpram os requisitos minimos e notifica o usuario.
        note1.style.color = "red";
        note1.innerHTML = "Um campo está incorreto ou faltando";
        verificacao = false; // A verificação deixa esta variavel travada igual ao inicio para forçar o usuario a inserir os dados corretamente.
        console.log('testing verification : ' + verificacao )
    } 
    else if (temMinuscula && temNumero && tamanhoMinimo) { // Condição que libera a passagem caso a condição de cima não tenha sido usada.
        
        verificacao = true; // A verificação deixa esta variavel livre para a passagem dos dados pois a verificação foi um sucesso.
        console.log('testing verification : ' + verificacao)
    }

    // Finalizando a verificação

    // Ultima etapa, a verificação da verificação.
    if (verificacao === true) { console.log('2 [two] test initialization'); // Verifica se tudo foi de acordo com todos os requisitos, e da fim nas verificações liberando a passagem do usuario e dos dados para outra página além de o notificar.
        note1.style.color = "green"; 
        note1.innerHTML = "Tudo certo";

        setTimeout(() => { // O transporta para a outra página com atraso proposital para que o usuario leia tudo antes de prosseguir.
            
            localStorage.setItem('data', JSON.stringify(datauser)); // Envia os dados do usuario junto do usuario para o caminho logo abaixo (A outra página).
            //window.location.href = "/Projetos/Sistemas/LoginAndCreat/Modulo 0/pagina inicial beta5.html"; // O caminho/A outra página.

            localStorage.setItem('datanow', JSON.stringify(datauser));
            
            window.onload = function name(params) {
                
            }
            
        }, 3500); // Tempo que o usuario tem para ler antes de ser levado.
    };
}; // Fim da função de enviar dados.

const botoes = document.querySelectorAll('.infos'); // Variavel que pega as variaveis pelas classes que todas possuem em conjunto.
const painel = document.getElementById('painel-conteudo'); // Variavel que pega o painel que descerá revelando toda a parte escrita oculta.
const displayTexto = document.getElementById('texto-dinamico'); // Variavel que pega os textos que aparecerá no painel.

botoes.forEach(botao => { // Inicio da 1º função de seta que ao ser executada faz o painel descer e muda os textos dinamicos.
    botao.addEventListener('click', () => { // Quando o curosor do usuario passar em cima da variavel ela acionará tudo abaixo.
        const secao = botao.getAttribute('data-secao'); // Variavel que abaixo farará parte da verificação.

        // Verificação do painel.
        if (painel.classList.contains('aberto') && painel.dataset.ativa === secao) { // Verifica se o painel já está aberto com o MESMO conteúdo
            fecharPainel(); // Sem esta verificação os conteudos não serão deletados caso outro venha para o substituir.
            return;
        }

        // Define o conteúdo
        let html = ""; // Variavel que mantém o contéudo zerado.
        // Condição que verifica se o cursor passou em cima do HOME, e modifica o texto para cada um.
        if (secao === 'home') html = "<h2>Home</h2><p>Este projeto se conciste apenas e unicamente para fins de estudo próprio. Próvavel cancelamento de continuidade deste projeto caso outro projeto seja desenvolvido.</p>";
        // Condição que verifica se o cursor passou em cima do MENU, e modifica o texto para cada um.
        if (secao === 'menu') html = "<h2>Menu</h2><p>Caso não tenha uma conta, por favor crie uma! Logo abaixo da seção. </p> <p> Não tem outras opções no momento</p>";
        // Condição que verifica se o cursor passou em cima do ESPECIALISTA, e modifica o texto para cada um.
        if (secao === 'especialista') html = "<h2>Especialista</h2><p>Equipe com apenas um dev</p>";
        // Condição que verifica se o cursor passou em cima do CONTATOS, e modifica o texto para cada um.
        if (secao === 'contatos') html = "<h2>Contatos</h2><p>WhatsApp: (00) 0000-0000</p>";
        // Condição que verifica se o cursor passou em cima do SOBRE, e modifica o texto para cada um.
        if (secao === 'sobre') html = "<h2>Sobre</h2><p>Este projeto é apenas para estudos e exibição, não irá ao ar tão cedo.</p>";
        // Condição que verifica se o cursor passou em cima do PROJETOS, e modifica o texto para cada um.
        if (secao === 'projetos') html = "<h2>Projetos</h2><div><a id='aa' href='/Projetos/Sistemas/Alfas e betas/Roleta.html' target='_blank'>Roleta</a></div> <div><a id='aa' href='/Projetos/Sistemas/Alfas e betas/calculadora alfa 1.1.html' target='_blank'>Calculadora</a></div> <div><a id='aa' href='/Projetos/Sistemas/Alfas e betas/LoginUser beta 1.html' target='_blank'>Login beta 1</a></div> <div><a id='aa' href='/Projetos/Sistemas/Alfas e betas/LoginUser beta 2.html' target='_blank'>Login beta 2</a></div>";

        displayTexto.innerHTML = html; // Variavel que coloca os textos carregados pelas condições acima para a variavel html para o displaytext.
        
        // Abre o painel e marca qual seção está ativa
        painel.classList.add('aberto');
        painel.dataset.ativa = secao;

    });
}); // FIm da 1º função de seta.

botoes.forEach(botao => { // Inicio da 2º função de seta que fecha o painel caso o usuario a execute.
    botao.addEventListener('dblclick', // Evento que determinar como o usuario irá fechar.
        function fecharPainel() { // Comando que é executado quando o usuario faz o evento anterior.
        painel.classList.remove('aberto'); // Remove o "aberto" do painel.
        painel.style.transform = ""; // Limpa o estilo do painel.
        painel.dataset.ativa = ""; // Limpa a seção ativada.
    });
}
); // Fim da 2º função de seta.

let trilho = document.getElementById('trilho'); // Variavel que recebe a variacel trilho do html.
let body = document.querySelector('body'); // Variavel que recebe o corpo do html.
trilho.addEventListener('click', () => { // inicio da 3º função de seta que define como o usuario irá ativar o evento.
    trilho.classList.toggle('dark'); // Comando que classifica a variavel para dark
    body.classList.toggle('dark'); // Comando que classifica a variavel para dark.
}); // Fim da 3º funçao de seta.