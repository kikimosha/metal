$( document ).ready(function() {
    $('#counter_1').countDown({
        targetDate: {
            'day': 		20,   // день
            'month': 	11,   // месяц
            'year': 	2014, // год
            'hour': 	21,   // час
            'min': 		59,   // минуты
            'sec': 		40    // секунды
        },
        // По завершении счета времени будет появляться сообщение #complete_info_message и исчезать таймер
        onComplete: function() { $('#info_message_1').slideDown(),$('.counter_1').hide()}
    });

    $('#counter_2').countDown({
        targetDate: {
            'day': 		20,   // день
            'month': 	11,   // месяц
            'year': 	2014, // год
            'hour': 	21,   // час
            'min': 		59,   // минуты
            'sec': 		40    // секунды
        },
        // По завершении счета времени будет появляться сообщение #complete_info_message и исчезать таймер
        onComplete: function() { $('#info_message_2').slideDown(),$('.counter_1').hide()}
    });
});
//function email_focus() {
//	if ($(this).val() == 'your@email.com') {
//		$(this).val('')
//		$(this).removeClass('faded');
//	}
//}
//
//function email_blur() {
//	if ($(this).val() == '') {
//		$(this).val('your@email.com')
//		$(this).addClass('faded');
//	}
//}
//
//function subscribe_submit() {
//	email = $('#email_field').val();
//
//	$.post('subscribe.php?json=1', $('#subscribe_form').serialize(), subscribe_result, 'json');
//	$('#subscribe_button').attr("disabled","disabled");
//	$('.form_message').fadeOut('fast');
//	$('#loading').fadeIn('fast');
//	return false;
//}
//
//function subscribe_result(data) {
//	$('#loading').hide();
//	if (data.error) {
//		display_message(data.error);
//	} else {
//		display_message(data.info, 'info')
//	}
//	$('#subscribe_button').removeAttr("disabled");
//}
//
//function display_message(msg, type) {
//
//	if (!type) type = 'error';
//
//	if (type == 'error') {
//		$('#error_message').html(msg).fadeIn('slow');
//		setTimeout('hide_error()', 4000);
//	} else {
//		$('#error_message').hide();
//		$('#info_message').html(msg).fadeIn('slow');
//	}
//}
//
//function hide_error() {
//	$('#error_message').fadeOut('slow');
//}
