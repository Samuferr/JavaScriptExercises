function checkAge() {
    const birth = document.querySelector('.birth');
    const date = new Date();
    const year = date.getFullYear();
    const age = year - Number(birth.value);

    if (birth.value.length == 0 || birth.value > year) {
        window.alert('Verifique os dados');
    } else {
        var fgenre = document.getElementsByName('genre'); //selecionando o valor do input genre
        var genre = ''; //criando uma variavel genre para 
        var img = document.createElement('img');
        img.setAttribute('id', 'mainImg');

        if (fgenre[0].checked) {
            genre = 'Man';
            if (age < 10) {
                img.setAttribute('src', '/Aula14/images/foto-bebe-m.png')
            } else if (age < 21) {
                img.setAttribute('src', '/Aula14/images/foto-jovem-m.png')
            } else if (age < 60) {
                img.setAttribute('src', '/Aula14/images/foto-adulto-m.png')
            } else {
                img.setAttribute('src', '/Aula14/images/foto-idoso-m.png')
            }
        } else {
            genre = 'Woman';
            if (age < 10) {
                img.setAttribute('src', '/Aula14/images/foto-bebe-f.png')
            } else if (age < 21) {
                img.setAttribute('src', '/Aula14/images/foto-jovem-f.png')
            } else if (age < 60) {
                img.setAttribute('src', '/Aula14/images/foto-adulto-f.png')
            } else {
                img.setAttribute('src', '/Aula14/images/foto-idoso-f.png')
            }
        }
    }


    const result = document.querySelector('.result');
    result.innerHTML = `${genre} you are ${age} years old`;
    result.appendChild(img);
}