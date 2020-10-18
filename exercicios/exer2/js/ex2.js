$(function() {
    altera_Campos(true)
    $('#firstName').change(function() {
        if($(this).val().length > 0){
            altera_Campos(false)
        }
        else{
            altera_Campos(true)
        }
    });
})

function altera_Campos(param) {
    $('.form-control[id!=firstName], .custom-select, .custom-control-input').attr('disabled', param)
}