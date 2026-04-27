const datasand = localStorage.getItem('data');

if (datasand) {
    const user = JSON.parse(datasand);
    console.log('nome de usuario :' + user.nomeuser);
    console.log('idade do usuario :' + user.idadeuser);
}