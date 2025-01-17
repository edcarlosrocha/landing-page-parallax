$(function () {
    console.log("funcionando..");
});

var topo = $("#topo");

var handleScroll = function () {
    if ($(this).scrollTop() > 0) {
        topo.css("background-color", "rgba(0, 0, 0, 0.5)");
    } else {
        topo.css("background-color", "rgba(0, 0, 0, 1)");
    }
};

// Execute a função handleScroll toda vez que o usuário rola a página
$(window).scroll(handleScroll);

$(".link").click(function (event) {
    var target = $(this.hash);

    if (target.length) {
        // Impede o comportamento padrão do link
        event.preventDefault();

        // Anima o scroll até a seção alvo
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 3000);
    }
});