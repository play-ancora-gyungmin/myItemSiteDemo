//setlink.js

/*-----load-----*/
window.addEventListener("DOMContentLoaded",function(){
    //console.log("loaded")
    /*
        link setting
        from: #top a 
        event: click
        how: for
    */
    var topLink = document.querySelectorAll("#top a")
    var topLinkValue;
    var topItemUrl = "item.htm"
    //console.log('topLink:', topLink.length)
    
    /*------setLink------*/
    var setLink = function () {
        //console.log("setLink")
        return function (){
            var topLinkName = this.innerText
            var isSNS = 0
            if(topLinkName===""){
                ////console.log("empty")
                topLinkName = this.querySelector('span').innerText;
                isSNS = 1
            }
            ////console.log(topLinkName)
            switch(topLinkName){
                case "Home":
                    topLinkValue = "index.htm"
                    break;
                case "Gear":
                    topLinkValue = topItemUrl + "?inum=11"
                    break;
                case "Phone":
                    topLinkValue = topItemUrl + "?inum=11"
                    break;
                case "Pad":
                    topLinkValue = topItemUrl + "?inum=12"
                    break;
                case "Notbook":
                    topLinkValue = topItemUrl + "?inum=13"
                    break;
                case "Fashion":
                    topLinkValue = topItemUrl + "?inum=24"
                    break;
                case "Bag":
                    topLinkValue = topItemUrl + "?inum=24"
                    break;
                case "Watch":
                    topLinkValue = topItemUrl + "?inum=25"
                    break;
                case "Shoe":
                    topLinkValue = topItemUrl + "?inum=26"
                    break;
                case "Profile":
                    topLinkValue = "profile.htm"
                    break;
                case "회원가입":
                    topLinkValue = "signUp.htm"
                    break;
                case "로그인":
                    topLinkValue = "signIn.htm"
                    break;
                case "게시판":
                    topLinkValue = "tableBord.htm"
                    break;
                case "오시는길":
                    topLinkValue = "locationMap.htm"
                    break;
                case "페이스북바로가기":
                    topLinkValue = "https://www.facebook.com/realbadgyungmin/"
                    break;
                case "인스타그램바로가기":
                    topLinkValue = "https://www.instagram.com/realbadgyungmin/"
                    break;
                case "트위터바로가기":
                    topLinkValue = "https://twitter.com/news_NA"
                    break;
            }
            //console.log(topLinkValue)
            if(isSNS){
                window.open().location.href = topLinkValue
            }else{
                location.href = topLinkValue
            }
        }
    }/*------setLink------*/
    
    for(var i=0; i<topLink.length; i++){
        topLink[i].onclick = setLink()
    }
    
    var topLogo = document.querySelector("#top-logo")
    topLogo.style.cursor = "pointer"
    topLogo.onclick = function(){
        location.href = "index.htm"
    }
    
})/*-----load-----*/