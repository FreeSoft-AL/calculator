
$(document).ready(function () {

    $('.calc .ui-btn').on('click', function () {
        var btn = $(this).html();
        console.log(btn);
        var display = $('#display').attr('value');
        if (!isNaN(display + btn)) {
            display = display + btn;
        }
        else if (btn == 'ON/C') {
			display = '';
		};
		$('#display').attr('value', display);
    });

});
