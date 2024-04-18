$(function() {
    console.log("funcionando..");
});

var topo = $("#topo");

$(window).scroll(function () {
    if($(this).scrollTop() > 0) {
        topo.css("background-color", "rgba(0, 0, 0, 0.5)");
    } else {
        topo.css("background-color", "rgba(0, 0, 0, 1)");
    }
});

$(".link").click(function (event) {
    // Teste;
    var target = $(this.hash);
    console.log(target);

    if (target.length) {
        // Evitar que o link funcione!
        event.preventDefault();

        $("html, body").animate({
            scrollTop: target.offset().top
        }, 3000);
    }
});