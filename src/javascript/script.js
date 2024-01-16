document.addEventListener('DOMContentLoaded', function () {
    var habilitarLogin = document.getElementById('habilitarLogin');
    var caixaLogin = document.getElementById('caixaLogin');
    var habilitarLogin2 = document.getElementById('habilitarLogin2');
    var caixaLogin2 = document.getElementById('caixaLogin2');
    var body = document.body;

    body.addEventListener('click', function () {

            caixaLogin.classList.add('hidden');
            caixaLogin2.classList.add('hidden');

    });

    // Impedir a propagação do clique para o body quando o botão é clicado
    habilitarLogin.addEventListener('click', function (event) {
        event.stopPropagation();
        caixaLogin.classList.toggle('hidden');
    });

    caixaLogin.addEventListener('click', function (event) {
        event.stopPropagation();
        caixaLogin.classList.toggle('hidden');
    });

    caixaLogin2.addEventListener('click', function (event) {
        event.stopPropagation();
        caixaLogin2.classList.toggle('hidden');
    });

    // Impedir a propagação do clique para o body quando o botão é clicado
    habilitarLogin2.addEventListener('click', function (event) {
        event.stopPropagation();
        caixaLogin2.classList.toggle('hidden');
    });
});