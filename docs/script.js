// ===========================
// EFEITO DE DIGITAÇÃO
// ===========================

function escrevendoLetra() {

    function ativaLetra(elemento) {

        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';

        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');

    if (titulo) {
        ativaLetra(titulo);
    }
}

escrevendoLetra();


// ===========================
// MENU RESPONSIVO
// ===========================

const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('.navegacao-primaria');

if (ativaMenu && navMenu) {

    ativaMenu.addEventListener('click', () => {

        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');

    });

}


// ===========================
// EXPERIÊNCIA / EDUCAÇÃO
// ===========================

function sobreMim() {

    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li');

    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul li');



    function slideShow(index) {

        divExperiencia.forEach((div) => {
            div.classList.remove('ativo');
        });

        liExperiencia.forEach((li) => {
            li.classList.remove('ativo');
        });

        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');

    }



    function slideShow2(index) {

        divEducation.forEach((div) => {
            div.classList.remove('ativo');
        });

        liEducation.forEach((li) => {
            li.classList.remove('ativo');
        });

        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');

    }


    // Exibe o primeiro item ao carregar a página

    if (divExperiencia.length > 0) {
        slideShow(0);
    }

    if (divEducation.length > 0) {
        slideShow2(0);
    }


    liExperiencia.forEach((item, index) => {

        item.addEventListener('click', () => {

            slideShow(index);

        });

    });


    liEducation.forEach((item, index) => {

        item.addEventListener('click', () => {

            slideShow2(index);

        });

    });

}

sobreMim();