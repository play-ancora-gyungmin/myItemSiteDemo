//item.js
var itemTitle = {
    11: "아이폰 6 플러스",
    12: "아이패드",
    13: "맥북에어",
    24: "가방",
    25: "시계",
    26: "구두",
}

var itemImg = {
    11: "iphone6",
    12: "ipad2",
    13: "macbook",
    24: "bag",
    25: "watch",
    26: "shoes",
}

var itemText = {
    11: "iPhone 6s 및 iPhone 6s Plus는 32GB 또는 128GB 저장 용량으로 구입할 수 있습니다. \"GB\"는 기가바이트를 의미하며, 기가바이트가 클수록 앱, 게임, 사진, HD 동영상, 음악, 영화 등을 비롯한 다양한 콘텐츠를 더 많이 저장할 수 있습니다. 저장해야 할 사진이나 음악이 많거나 앱을 많이 다운로드하는 경우에는 용량이 큰 iPhone을 구입하는 것이 좋습니다. 반대로 앱을 많이 다운로드하지 않거나 사진 또는 동영상을 촬영하지 않는다면 용량이 작은 iPhone이 적당할 수 있습니다.",
    12: "아이패드 1세대에 비해 두께가 13.4 mm에서 8.8 mm로 더 얇아지고, 중량도 Wi-Fi 모델 기준으로 680 g에서 600 g으로 많이 가벼워졌으며, 3G 모델의 경우 중량 차이가 훨씬 더 크다. 기본 연산 속도 및 배터리 성능도 강화되었고 디스플레이 해상도는 그대로지만 더 밝아졌다. 특히 카메라의 부재가 아쉬움을 샀던 1세대에 비해 HD급 캠코더 기능을 지원하는 후면 카메라도 탑재되었다.",
    13: "스티브 잡스가 2008년 1월 열린 애플 키노트에서 서류봉투에서 꺼내면서 처음으로 공개되었다. 자칭 '세계에서 가장 얇은 노트북' 맥북에어보다 얇고 가벼운 노트북들이 널린 2016년도에도 얇은 노트북하면 맥북에어를 떠올릴 정도로 얇은 노트북의 대명사라고 할 수 있다.1~3세대까지는 비싸고 확장성이 떨어진다는 것이 가장 큰 단점으로 지적되었다. 맥북 에어 발표 당시 키노트에 뜬 $1799를 아직도 기억하는 사람들이 많을 것이다.",
    24: "여성과 남성 의류, 핸드백, 지갑, 생횔용품, 신발, 보석, 시계, 선글라스, 향수와 화장품, 아동 의류를 만드는 이탈리아의 명품 브랜드이다. 루이비통에 밀린 콩라인. 남성 가방도 구찌가 짱이다!!!!!",
    25: "시계 매니아들 사이에서의 평가는 롤렉스미만잡으로 치는 상위의 매니아 사이에서는 낮은 등급의 시계 취급을 받지만 보통의 매니아들은 한번씩은 다들 거쳐가거나 주력으로 사용하는 사람도 많다. 사면 다들 이쁘다고 하지 왜샀느냐고 하지는 않는다. 사면 호구라고 호구호이어라는 말도 있지만 사실 온라인에서 호구소리 안듣는 브랜드도 없고 막상 200~300만원대 시계 추천을 구할경우 결국 추천받는건 태그호이어 몰표이다. 하지만 파텍필립, 파셰론 콘스탄틴 미만 잡.",
    26: "기원은 유럽 쪽이나, 현대적 구두의 등장 기원은 불분명하다. 다만 가죽을 주 재료로 만드는 신발이기 때문에 역사가 오래 되었을 가능성이 높다. 한반도에 구두가 처음 전파된 계기는 1880년대 경으로, 외국에 다녀온 사람들이 구두를 신고 들어온 것이 그 시초로 여겨진다. '구두'라는 말의 어원은 분명치 않으며(아래서술 참고), 1900년도에 한반도에도 구두 생산 공장이 들어서면서 본격적으로 구두 공급이 시작되었다.",
}

var parameter = location.href
console.log('parameter:', parameter)
// GET Check
/*if (parameter.indexOf("?") === -1 || parameter.indexOf("=") === -1) {
    alert("메인페이지로 이동합니다.")
    location.href = "./index.htm"
}*/
parameter = Number(parameter.split("?")[1].split("=")[1])
console.log(parameter)

/*-----load-----*/
window.addEventListener("load", function () {
    //console.log("loaded")
    //title modifying .main-tilte
    var mainTitle = document.querySelector('.main-title')
    mainTitle.innerText = itemTitle[parameter]
    mainTitle.classList.add("icon-" + parameter)

    //img modifying .main-img img
    var mainImg = document.querySelector('.main-img')
    var mainImgIn = mainImg.querySelector('img')
    var imgURL = "./images/" + itemImg[parameter] + ".png"
    if (parameter === 12) { //선택적 이미지 조절
        mainImgIn.style.width = "auto"
        mainImgIn.style.height = "90%"
    }
    mainImgIn.setAttribute("src", imgURL)

    //text modifying .main-text
    var mainText = document.querySelector('.main-text')
    mainText.innerText = itemText[parameter]


    //img and text appearance effect

    if (parameter%2===1) {
        //%2==1
        mainImg.style.left = "0"
        mainText.style.left = "50%"
    } else if (parameter%2===0) {
        //%2==0
        mainImg.style.left = "50%"
        mainText.style.left = "0"
    }

    mainImg.style.opacity = "1"
    mainText.style.opacity = "1"
}) /*-----load-----*/
