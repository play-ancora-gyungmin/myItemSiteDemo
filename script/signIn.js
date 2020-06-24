//signIn.js

$(function (arguments) {
    var $signInBtn = $('#userSigninBtn')
    
    $signInBtn.click(function (e) {
        e.preventDefault()
        var $userId = $('#userId'),
            $userPassword = $('#userPassword')
        
        if($userId.val().trim() === "" || $userPassword.val().trim() === ""){
            alert("아이디와 비밀번호를 입력하세요.")
            $userPassword.val("")
        } else {
            alert("로그인중....")
            location.href = "index.htm"
        }
    })
})