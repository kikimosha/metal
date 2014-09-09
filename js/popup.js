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

function thx() {
    $('.popup').hide();
    $('.work_popup').hide();
    $('.popup').removeClass('activePopup');
    $('.work_popup').removeClass('activePopup');
    $('.work_popup').html('');
    popup('thx', '');
    $('input[type="text"]:not(input[name="phone1"])').each(function(){
        $(this).val('');
    });
    $('textarea').val('');
}

function checkForm(form1) {

    var $form = $(form1),
        checker = true,
        name = $("input[name='name']", $form).val(),
        phone = $("input[name='phone']", $form).val(),
        email = $("input[name='email']", $form).val();

    if($form.find(".name").hasClass("required")) {
        if(!name) {
            $form.find(".name").addClass("red");
            checker = false;
        } else {
            $form.find(".name").removeClass('red');
        }
    }

    if($form.find(".phone").hasClass("required")) {
        if(!phone) {
            $form.find(".phone").addClass("red");
            checker = false;
        } else if(/[^0-9+]/.test(phone)) {
            $form.find(".phone").addClass("red");
            checker = false;
        } else {
            $form.find(".phone").removeClass("red");
        }
    }

    if($form.find(".email").hasClass("required")) {
        if(!email) {
            $form.find(".email").addClass("red");
            checker = false;
        } else if(!/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/.test(email)) {
            $form.find(".email").addClass("red");
            checker = false;
        } else {
            $form.find(".email").removeClass("red");
        }
    }

    if(checker != true) { return false; }
}

var send = false;

$( document ).ready(function() {

    $('.submit').click(function() {
        $('body').find('form:not(this)').children('label').removeClass('red');

        var request_url = '\n'+$('input[name="ref_url"]').val().toString().replace(/&/g, '\n');

        var $form = $(this).parents('form').get(0);
        var answer = checkForm($form);
        if(answer != false && send == false)
        {
            send = true;
            var name = $('input[name="name"]', $form).val(),
                phone = $('input[name="phone"]', $form).val(),
                email = $('input[name="email"]', $form).val(),
                ques = $('textarea[name="ques"]', $form).val(),
                sbt = $('.submit', $form).attr("data-name"),
                submit = $('.submit', $form).text();

            //submit = $('input[name='+sbt+']', $form).val();
            var	ref = $('input[name="referer"]').val();
            ref = ref+request_url;
            var formname = $('input[name="formname"]').val();
            var data = "name="+name+"&phone="+phone+"&"+sbt+"="+submit+"&email="+email+"&ques="+ques+"&formname="+formname+"&ref="+ref;

            $.ajax({
                type: "POST",
                url: 'send_mail.php',
//                dataType: "json",
                data: data
            }).error(function(err) {
                console.log(err);
            }).always(function() {
                thx();
            });
        }
    });
});