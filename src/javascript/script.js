document.addEventListener('DOMContentLoaded', function () {
    var habilitarLogin = document.getElementById('habilitarLogin');
    var caixaLogin = document.getElementById('caixaLogin');
    var habilitarLogin2 = document.getElementById('habilitarLogin2');
    var caixaLogin2 = document.getElementById('caixaLogin2');
    var retirarLogin = document.getElementById('body');



    retirarLogin.addEventListener('click', function () {
            // Verifica o ID do elemento clicado
            var elementoID = this.id;
            print(elementoID)
            if (elementoID === 'habilitarLogin') {
                caixaLogin.classList.add('hidden');
                caixaLogin2.classList.add('hidden');
            } else {
                // Faça alguma coisa se o ID for diferente de 'seuElementoId'
            }
        });

    habilitarLogin.addEventListener('click', function () {
        caixaLogin.classList.toggle('hidden');
    });

    habilitarLogin2.addEventListener('click', function () {
        caixaLogin2.classList.toggle('hidden');
    });
});