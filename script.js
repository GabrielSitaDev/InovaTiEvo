
// Exibe mensagem de boas-vindas
// window.alert("Welcome to Inova TI Evolution");

// Aguarda o DOM estar totalmente carregados
$(document).ready(function () {
    // Função genérica para alternar dropdowns
    function toggleDropdown(buttonSelector, dropdownSelector) {
        $(buttonSelector).on('click', function (event) {
            const arrow = $(this).find('.dropdown-arrow');
            $(dropdownSelector).stop(true, true).slideToggle();

            // Alterna a classe da seta
            arrow.toggleClass('open');

            event.stopPropagation(); // Evita a propagação para outros elementos
        });

        // Fecha o dropdown ao clicar fora
        $(document).on('click', function () {
            $(dropdownSelector).slideUp();

            // Garante que a seta volte à posição original
            $(buttonSelector).find('.dropdown-arrow').removeClass('open');
        });
    }

    // Inicializa os dropdowns
    toggleDropdown('.bt1', '.ul-cursos'); // Dropdown de Cursos
    toggleDropdown('.bt2', '.ul-info');  // Dropdown de Informações

    
});

function verificarTamanho() {
    const ulPrincipal = document.getElementById("ul-principal");
    const infos = document.getElementById("infos")
    
    // Verifica a largura da janela
    if (window.innerWidth <= 991) {
        // Remove as classes quando a largura for 991px ou menor
        ulPrincipal.classList.remove("ps-5", "pe-0");
        infos.firstChild.nodeValue = "INFOS ";
    } else {
        // Adiciona as classes quando a largura for maior que 991px
        infos.firstChild.nodeValue = "INFORMAÇÕES ";
        ulPrincipal.classList.add("ps-5", "pe-0");
    }
}

// Chama a função quando a página carrega
window.onload = verificarTamanho;

// Adiciona um ouvinte de evento para a mudança no tamanho da janela
window.addEventListener("resize", verificarTamanho);
