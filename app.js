
$(document).ready(function () {

    $('.calc .ui-btn').on('click', function () {
        var nr = $(this).html();
        console.log(nr);
        $('#display').attr('value', nr);
    });

});
