
$(document).ready(function () {

    var memory = '';
    var operator = '';
    
    $('.calc .ui-btn').on('click', function () {
        var btn = $(this).html();
        console.log(btn);
        var display = $('#display').attr('value');
        if (!isNaN(display + btn)) {
            display = display + btn;
        }
        else if (btn == 'ON/C') {
            display = '';
        }
        else if (btn == '+' || btn == '-' || btn == 'X' || btn == ':') {
            if (btn == 'X') {
                operator = '*';
            }
            else if (btn == ':') {
                operator = '/';
            }
            else {
                operator = btn;
            }
            memory = display;
            display = '';
        }
        else if (btn == '=') {
            var result = eval(memory + operator + display);
            display = result;
            memory = result;
        }
        $('#display').attr('value', display);
    });

});
