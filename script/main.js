//main.js

/*---------load---------*/
window.addEventListener("load",function(){
    console.log("종로로 갈가요, 명동으로 갈까, 차리리 청량리로 가")
    var mainImgView = document.querySelector('.main-imageview img')
    var mainThumbnail = document.querySelectorAll('.main-thumbnail img')
    
    var setMainLink = function () {
        //console.log("setMainLink")
        return function () {
            var tnAlt = this.getAttribute("alt")
            var linkSeq;
            console.log(tnAlt)
            switch(tnAlt){
                case "iPhone6":
                    linkSeq = 11
                    break
                case "MacBook":
                    linkSeq = 13
                    break
                case "Shoes":
                    linkSeq = 26
                    break
                case "Watch":
                    linkSeq = 25
                    break
                case "Bag":
                    linkSeq = 24
                    break
            }
            location.href = "item.htm?inum="+linkSeq
        }
    }
    
    console.log('mainThumbnail:', mainThumbnail.length)
    for(var i=0;i<mainThumbnail.length;i++){
        mainThumbnail[i].onclick = setMainLink()
    }
})/*---------load---------*/