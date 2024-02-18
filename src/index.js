function showMenu() {
    let menu = document.getElementById('menuzera');
    if (menu.classList.contains('abrir')) {
        menu.classList.remove('abrir');
    } else {
        menu.classList.add('abrir');
    }
}

function carregarpage() {
    let pagecontent = (document.getElementsByClassName(
        'site',
    )[0].style.display = 'block');

    let popupalert = (document.getElementsByClassName(
        'popupalert',
    )[0].style.display = 'grid');

    let pageload = (document.getElementsByClassName(
        'loading',
    )[0].style.display = 'none');
}

function closepopup() {
    let popup = (document.getElementsByClassName(
        'popupalert',
    )[0].style.display = 'none');
    document.body.style.overflow = 'auto';
}

function mouseentrou1() {
    let linguagens = (document.getElementsByClassName(
        'linguagens',
    )[0].style.display = 'grid');
}

function mousesaiu1() {
    let linguagens = (document.getElementsByClassName(
        'linguagens',
    )[0].style.display = 'none');
}

function mouseentrou2() {
    let quemsoueu = (document.getElementsByClassName(
        'quemsoueu',
    )[0].style.display = 'flex');
}

function mousesaiu2() {
    let quemsoueu = (document.getElementsByClassName(
        'quemsoueu',
    )[0].style.display = 'none');
}

function mouseentrou3() {
    let inspiracao = (document.getElementsByClassName(
        'inspiracao',
    )[0].style.display = 'grid');
}

function mousesaiu3() {
    let inspiracao = (document.getElementsByClassName(
        'inspiracao',
    )[0].style.display = 'none');
}

function click1() {
    let linguagens = document.getElementsByClassName('linguagensMoba')[0];

    linguagens.classList.toggle('open');
}

function click2() {
    let quemsoueu = document.getElementsByClassName('quemsoueuMoba')[0];

    quemsoueu.classList.toggle('open');
}

function click3() {
    let inspiracao = document.getElementsByClassName('inspiracaoMoba')[0];

    inspiracao.classList.toggle('open');
}

function contatar() {
    location.href = 'https://wa.me//+5515996607614';
}
