/*jQuery Codes*/
$(function(){
    var $menu = $(".menu a")
    var $mapview = $(".mapview")
    $menu.click(function () {
        var menuIdx = $(this).index()
        $mapview.eq(menuIdx).show().siblings().hide()
        $(this).addClass("on").siblings().removeClass("on")
    })
    
    /*----네이버 지도 API 영역 접두사 N----*/
    var NmapOptions = {
        center: new naver.maps.LatLng(37.5320028, 126.9140722),
        zoom: 16
    };
    var Nmap = new naver.maps.Map('mapnaver', NmapOptions);
    var NmarkerOptions = {
        position: new naver.maps.LatLng(37.5320028, 126.9140722),
        title: '국회의사당',
        clickable: true,
        map: Nmap
    };
    var Nmarker = new naver.maps.Marker(NmarkerOptions);
    naver.maps.Event.addListener(Nmarker, 'click', function () {
        window.open('http://naver.me/FdF2RlGb')
    });
    /*----네이버 지도 API 영역----*/  
})/*-----load-----*/