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
