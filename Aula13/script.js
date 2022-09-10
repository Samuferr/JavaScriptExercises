function mudar(){
    const horario = document.querySelector('.horario');
    const mainImg = document.querySelector('.main-img');
    const data = new Date();
    horaAtual = data.getHours(); 
    horaAtual = 22
    horario.innerHTML = `Agora são ${horaAtual} horas`;

    if(horaAtual < 12) {
        mainImg.src = '/Aula13/images/dia.jpg';
        document.body.style.backgroundColor = 'lightgreen'; 
    } else if (horaAtual <18) {
        mainImg.src = '/Aula13/images/tarde.jpg';
        document.body.style.backgroundColor = 'lightblue';
    } else {
        mainImg.src = '/Aula13/images/noite.jpg';
        document.body.style.backgroundColor = 'rgb(133, 53, 0)';
    }
}