<!DOCTYPE html>
<html lang="pt-BT">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modúlo</title>

    <link rel="stylesheet" href="style.css">

</head>

<body onload="carregar()">

    <header id="topo-pagina">
        <div id="blocomenu">
        <div class="menu">
        <div class="linha"></div>
        <div class="linha"></div>
        <div class="linha"></div>
        </div>
        </div>
    </header>

    <header id="titulo1">

        <h1 id="msgD"></h1>

    </header>

    <section id="sec1">

        <div id="msg"></div>

    </section>

    <section id="sec2">

        <p>Digite seu nome de usuário logo abaixo:</p>

        <input type="text" id="nome" placeholder="Digite seu nome aqui" autocomplete="off">

        <p> Digite sua idade logo abaixo:</p>

        <input type="number" id="idade" placeholder="Digite sua idade aqui">

        <p>Digite sua senha logo abaixo:</p>

        <input type="password" id="password1" placeholder="Digite sua senha aqui" autocomplete="off">

        <p id="ready">Tudo pronto?</p>

        <input type="button" value="Sim" onclick="enviardados()" id="confirmar">

        <div>

            <p id="note"></p> 

            <p id="note1"></p>

            <p>Não tem uma conta? Crie uma aqui:<a href="/Estudando Html/LoginAndCreat/Modulo 2/createcont.html" target="_blank">Criar Conta</a> </p>

            <p>Veja támbem este projeto: <a href="/Estudando Html/Skulls/roleta.html" target="_blank">Veja mais</a> </p>

        </div>

    </section>

    <footer>

        <p id="copyright">&copy; Propriedade do Lobão AAAAAAAAAAAAAAAAAAAAUUUUUUU</p>

    </footer>

    <script src="script.js"></script>

</body>
</html>
