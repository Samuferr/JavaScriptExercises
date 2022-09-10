function mudar() {
    const horario = document.querySelector('.horario');
    const mainImg = document.querySelector('.main-img');
    const data = new Date();
    horaAtual = data.getHours();


    if (horaAtual < 12) {
        horario.innerHTML = `Bom dia, agora são ${horaAtual} horas`;
        mainImg.src = '/Aula13/images/dia.jpg';
        document.body.style.backgroundColor = 'lightgreen';
    } else if (horaAtual < 18) {
        horario.innerHTML = `Boa tarde, agora são ${horaAtual} horas`;
        mainImg.src = '/Aula13/images/tarde.jpg';
        document.body.style.backgroundColor = 'lightblue';
    } else {
        horario.innerHTML = `Boa noite, agora são ${horaAtual} horas`;
        mainImg.src = '/Aula13/images/noite.jpg';
        document.body.style.backgroundColor = 'rgb(133, 53, 0)';
    }
}