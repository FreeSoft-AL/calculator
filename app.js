
$(document).ready(function () {

    // Nese ekrani eshte shume i gjere, hape faqen brenda nje kornize te vogel.
    if ($('body').width() > 450) {
        var href = window.location.href;
        $('body').html('<div id="frame"><iframe src="' + href + '" width="100%" height="450px" seamless="seamless" frameborder="0"></iframe></div>');
        return;
    }

    var memory = '';
    
    $('.calc .ui-btn').on('click', function () {
        var btn = $(this).html();
        console.log(memory);
        var display = $('#display').attr('value');
        if (!isNaN(display + btn)) {
            display = display + btn;
        }
        else if (btn == 'ON/C') {
            display = '';
        }
        else if (btn == '+' || btn == '-' || btn == 'X' || btn == ':') {
            memory += display;
            display = '';
            if (btn == 'X') {
                memory += '*';
            }
            else if (btn == ':') {
                memory += '/';
            }
            else {
                memory += btn;
            }
        }
        else if (btn == '=') {
            var result = eval(memory + display);
            display = result;
            //memory = result;
            memory = '';
        }
        else if (btn == 'SQRT') {
            display = Math.sqrt(display); 
        };
        
        $('#display').attr('value', display);
    });

});
