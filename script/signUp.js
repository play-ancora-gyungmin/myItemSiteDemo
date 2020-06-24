//signUp.js

$(function () {
    var $chk_all = $('#chk_all'),
        $chk = $('.chk'),
        $btnY = $('#btnY'),
        $btnN = $('#btnN')
    
    $chk_all.change(function () {
        var chk = $(this).prop('checked')
        $chk.prop('checked',chk)
    })
    
    $chk.change(function () {
        var chk = $(this).prop('checked')
        if (chk===false){
            $chk_all.prop('checked',false)
        } else {
            var num = 0;
            $chk.each(function (index,elements) {
                var chk_state = $(elements).prop('checked')
                if(chk_state){
                    num ++
                }
            })
            if (num === 3){
                $chk_all.prop('checked',true)
            } else {
                $chk_all.prop('checked',false)
            }
        }
    })
    
    $btnY.click(function () {
        if($chk.eq(0).prop('checked') && $chk.eq(1).prop('checked')){
            $('#conf').fadeOut(300)
            $('#main').animate({
                height: '700px'
            },500)
        }else {
            alert('필수 동의 사항에 체크라여 주시기 바랍니다.')
        }
    })
    
    $btnN.click(function () {
        location.href = 'index.htm'
    })
    
    var $inupt = $('input[type=text],input[type=password],input[type=email]'),
        pass
    $inupt.blur(function (arguments) {
        var current = $(this).attr('id'),
            currentValue,
            $msg = $(this).siblings('.msg')

        /*currentValue space trim*/
        if ($(this).attr('name') === 'userName') {
            currentValue = $(this).val().trim()
        } else {
            currentValue = groSpace($(this).val())
        }
        $(this).val(currentValue)
        /*currentValue space trim*/

        /*currentValue chk*/
        if (currentValue === "") {
            $msg.text('입력해주세요.')
            pass = false
        } else if (current === 'userId') {
            if (RegChk(currentValue, current)) {
                $msg.html('<b style="color:green">허용되는 아이디</b>')
            } else {
                $msg.text('아이디는 영문자로 시작하는 6~20자 영문 또는 숫자')
                pass = false
            }
        } else if (current === 'userPassword') {
            if (RegChk(currentValue, current)) {
                $msg.html('<b style="color:green">허용되는 암호</b>')
            } else {
                $msg.text('암호는 8~20자 영문, 숫자, 특수문자 포함')
                pass = false
            }
        } else if (current === 'userPasswordChk') {
            if (currentValue === $('#userPassword').val()) {
                $msg.html('<b style="color:green">일치하는 암호</b>')
            } else {
                $msg.text('암호가 일치하지 않음')
                pass = false
            }
        } else if (current === 'userEmail') {
            if (RegChk(currentValue, current)) {
                $msg.html('<b style="color:green">허용되는 이메일</b>')
            } else {
                $msg.text('이메일 형식에 맞게 입력')
                pass = false
            }
        } else {
            $msg.text('')
        } /*currentValue chk*/
    })

    $('input[type=email]').on('keyup', function () {
        var current = $(this).attr('id'),
            currentValue = $(this).val(),
            $msg = $(this).siblings('.msg')

        if (RegChk(currentValue, current)) {
            $msg.html('<b style="color:green">허용되는 이메일</b>')
        } else {
            $msg.text('이메일 형식에 맞게 입력')
        }
    })
    
    $('#userSignupBtn').click(function (e) {
        e.preventDefault()
        pass = true
        $inupt.trigger('blur')
        console.log(pass);
        
        if (pass) {
            alert('감사합니다.')
            location.replace('signIn.htm')
        } else {
            alert('다시 입력하세요.')
        }
    })
})


function groSpace(value) {
    var result = value.replace(/\s/g, '')
    return result
}

function RegChk(value, current) {
    var regExp
    switch (current) {
        case 'userId':
            regExp = /[a-zA-Z]+[a-zA-Z0-9]{5,19}$/g
            break
        case 'userPassword':
            regExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/g
            break
        case 'userEmail':
            regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/g
            break
    }
    return regExp.test(value)
}
