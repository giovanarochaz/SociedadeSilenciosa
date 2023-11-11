$(document).ready(function() {
    posicionarElemento("#bola1", 80, 100); // Posição fixa para bola1 (exemplo: 100px, 100px)
    posicionarElemento("#bola2", 300, 380); // Posição fixa para bola2 (exemplo: 200px, 200px)
    posicionarElemento("#bola3", 467, 289); // Posição fixa para bola3 (exemplo: 300px, 300px)
    posicionarElemento("#bola4", 690, 97); // Posição fixa para bola4 (exemplo: 400px, 400px)
    posicionarElemento("#bola5", 969, 27); // Posição fixa para bola5 (exemplo: 500px, 500px)
    posicionarElemento("#bola6", 900, 500); // Posição fixa para bola6 (exemplo: 600px, 600px)

    $(".bola").click(function() {
        var id = $(this).attr("id");
        mostrarModal("#modal" + id.charAt(id.length-1));
    });
    
});

function posicionarElemento(elemento, left, top) {
    $(elemento).css({
        left: left,
        top: top
    });
}


function verificarSobreposicao(elemento, left, top) {
    var sobreposto = false;

    $(".bola").not(elemento).each(function() {
        var outraPosicao = $(this).position();
        var outraLargura = $(this).width();
        var outraAltura = $(this).height();

        if (
            left < outraPosicao.left + outraLargura &&
            left + $(elemento).width() > outraPosicao.left &&
            top < outraPosicao.top + outraAltura &&
            top + $(elemento).height() > outraPosicao.top
        ) {
            sobreposto = true;
            return false; // Interrompe o loop each se houver sobreposição
        }
    });

    return sobreposto;
}


function mostrarModal(idModal) {
    if (!$(idModal).hasClass("respondida")) {
        $(idModal).css('z-index', 9999); // Define um valor alto para z-index
        $(idModal).show();
    }
}

function verificarResposta(numero, correta) {
    $("#modal" + numero).hide();
    $(".bola" + numero + ", #modal" + numero).addClass("respondida");

    if (correta) {
        $("#bola" + numero).addClass("verde");
    } else {
        $("#bola" + numero).addClass("vermelha");
    }
}