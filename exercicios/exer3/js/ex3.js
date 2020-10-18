$(function() {
    $('a[role="button"]').click(function () { 
        $(this).parent().parent().children('.aparecer').toggle(500)
    });
})