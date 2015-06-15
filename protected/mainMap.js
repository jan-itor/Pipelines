$(document).ready(function(){
    PopUpHide();
    ChartHide();
});
function PopUpShow(){
    $("#popup1").show()            
    ;
}
function ChartShow(){
    $("#popup1").hide();
    $("#popup2").show();
}
function ChartHide(){
    $("#popup2").hide();
}
function PopUpHide(){
    $("#popup1").hide();
}
var map;
 
 ymaps.ready(init);
        function init() {
            $('#putin').click((function(){
                   $.ajax({
            type: "POST",
            url: "index.php?r=point/json",
            //dataType: "json",
            error: function(df, fdf, er){
                alert(er);
            },
            success: function (markers) {
            var result=markers.replace(/(<([^>]+)>)/ig,"");
                var res=JSON.parse(result);
                console.log(res);
                for(i=0;i<res.length;i++){
          var myPlacemark = new ymaps.Placemark([res[i].lat,res[i].lon], {
                    // Свойства
                    iconContent: res[i].iconText, 
		    hintContent: res[i].hintText,
                    balloonContent: 'Название: '+res[i].iconText+'<br>'+'Подсказка: '+res[i].hintText+'<br>'+'Координаты: '+'<br>'+'Широта: '+res[i].lat+'; Долгота: '+res[i].lon+'<br>'+'<a href="javascript:PopUpShow()">Посмотреть подробнее о метке</a>'+res[i].balloonText                   
					});

				// Добавляем метку на карту
				myMap.geoObjects.add(myPlacemark);  
        }
            }
        });
    alert('vualya, ebat`');
}));
                // Данные о местоположении, определённом по IP
                var geolocation = ymaps.geolocation,
                // координаты
                    coords = [geolocation.latitude, geolocation.longitude],
                    myMap = new ymaps.Map('map', {
                            center: coords,
                            zoom: 12,
                            behaviors: ["drag", "scrollZoom"]
                    });
                    searchControl = new ymaps.control.SearchControl({noPlacemark: true, width: 450});
                myMap.controls
                        // Кнопка изменения масштаба.
                    .add('zoomControl', {left: 5, top: 5})
                        // Список типов карты
                    .add('typeSelector')
                        // Стандартный набор кнопок
                    .add('mapTools', {left: 35, top: 5})
                    .add(searchControl, {left: 140, top: 5});
                myMap.balloon.open(coords, "Чтобы поставить метку - просто кликните по карте", {
                        // Опция: не показываем кнопку закрытия.
                        closeButton: true,
                        maxWidth: 200
                })
                           
   myMap.events.add("click",function(e) {
        var coords=e.get("coordPosition");
        myMap.balloon.open(
            // Позиция балуна
            coords, {
                // Свойства балуна:
                // контент балуна
                contentBody: 
                        '<label>Название:</label> <input type="text" class="input-medium" name="icon_text" /><br />\
                        <label>Подсказка:</label> <input type="text" class="input-medium" name="hint_text" /><br />\
                        <label>Акустические портреты:</label> <input type="text" class="input-medium" name="balloon_text" /><br />\
                        <button id="menu_button" type="submit" class="btn btn-success">Сохранить</button><br />\
                         Координаты: ' + coords            
            }   
        )
var point=new ymaps.Placemark(coords);
$('#menu_button').click((function () {
        iconText = $('input[name="icon_text"]').val(),
	hintText = $('input[name="hint_text"]').val(),
	balloonText =$('input[name="balloon_text"]').val();
          alert(hintText); 
          $.ajax({
     url:"index.php?r=point/ajax",
    // dataType: 'json',
     type:"POST",
     data: {icontext:iconText,
    hinttext : hintText,
    balloontext : balloonText,
    lat : coords[0].toPrecision(6), 
    lon : coords[1].toPrecision(6)} 
 });
//Добавляем метку на карту	
   myMap.geoObjects.add(point);
 
//Изменяем свойства метки и балуна
point.properties.set({
	iconContent: iconText,
	hintContent: hintText,
	balloonContent:'Название: '+iconText+'<br>'+'Подсказка: '+hintText+'<br>'+'Координаты: '+'<br>'+'Широта: '+coords[0]+'; Долгота: '+coords[1]+'<br>'+'<a href="javascript:PopUpShow()">Посмотреть подробнее о метке</a>'							
});
myMap.balloon.close();
                }));


    }
);
$('#redit').click((function()
{
   location.href = $(this).attr('data-href');
}));
$('#chart').click((function()
{
    alert("Entered");
    ChartShow();
}));
$('#closerko').click((function()
{
   PopUpHide();
}));
        }
