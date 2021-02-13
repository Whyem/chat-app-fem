$(document).ready(function(){
    $(".message__link").click(function(){
        $("i.fa-circle").each(function(){
            $(this).removeClass("fa-dot-circle");
        });
        $(this).children("i").addClass("fa-dot-circle");
    });
});
