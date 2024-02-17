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
    let pageload = (document.getElementsByClassName(
        'loading',
    )[0].style.display = 'none');
}
