function popup(id, form, h1, h2, btn, icon) { //onClick="popup('callback', '', '', '', '');"
    $('.popup_overlay').show();
    $('#'+id).addClass('activePopup');
    var Mtop = -($('.activePopup').outerHeight() / 2) + 'px';
    var Mleft = -($('.activePopup').outerWidth() / 2) + 'px';
    $('.activePopup').css({
        'margin-top' : Mtop,
        'margin-left' : Mleft,
        'left' : '50%',
        'top' : '50%'
    });
    var mobile = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/);

    if(mobile != null) {
        $('.with_text.activePopup').css({
            'margin-top' : Mtop,
            'margin-left' : '0px',
            'left' : '0%',
            'top' : '50%'
        });
    }
    if(id == 'callback') {
        var def_h1 = 'Заказать звонок';
        var def_h2 = 'Оставьте заявку, и&nbsp;наш менеджер<br>свяжется с&nbsp;вами в&nbsp;ближайшее время';
        var def_btn = 'Заказать звонок';
    }
    if(id == 'request') {
        var def_h1 = 'Оставить заявку';
        var def_h2 = 'Заполните форму,<br>и&nbsp;мы&nbsp;обязательно свяжемся с&nbsp;вами!';
        var def_btn = 'Оставить заявку';
    }
    if(id == 'question') {
        var def_h1 = 'Задать вопрос';
        var def_h2 = 'Заполните форму,<br>и&nbsp;мы&nbsp;обязательно свяжемся с&nbsp;вами!';
        var def_btn = 'Задать вопрос';
    }
    if(h1 != '') {$('#'+id).find('.popup_h1').html(h1);} else {$('#'+id).find('.popup_h1').html(def_h1);}
    if(h2 != '') {$('#'+id).find('.popup_h2').html(h2);} else {$('#'+id).find('.popup_h2').html(def_h2);}
    if(btn != '') {$('#'+id).find('.btn').html(btn);} else {$('#'+id).find('.btn').html(def_btn);}
    $('.activePopup').show();
    $('.formname').attr("value", form);
    $('#'+id).find('.icon').css({
        'background' : 'url(\'img/c23_'+icon+'.png\') center center no-repeat'
    });
}

function popup_out() {
    $('.popup_overlay').hide();
    $('.popup').hide();
    $('.work_popup').hide();
    $('.work_popup').removeClass('activePopup');
    $('.popup').removeClass('activePopup');
    $('body').find('label').removeClass('red');
    send = false;
}