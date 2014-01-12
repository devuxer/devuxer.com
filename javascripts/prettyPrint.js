$(function () {
    $("pre code").parent().each(function () {
        if (!$(this).hasClass("prettyprint")) {
            $(this).addClass("prettyprint");
            a = true;
        }
    });

    prettyPrint();
});