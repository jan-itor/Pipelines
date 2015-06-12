$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup1")
            .show()            
    ;
}
function PopUpHide(){
    $("#popup1").hide();
}
var map;
 
 ymaps.ready(init);
        function init() {
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
	balloonContent:'Акустические портреты:'+'<br>'+balloonText+'<br>'+'<a href="javascript:PopUpShow()">Посмотреть подробнее о метке</a>'							
});
myMap.balloon.close();
                }));


    }
);
$('#putin').click((function(){
    $.getJSON("index.php?r=point/json",
    function(json){
        for(i=0;i<json.markers.length;i++){
          var myPlacemark = new ymaps.Placemark([json.markers[i].lat,json.markers[i].lon], {
                    // Свойства
                    iconContent: json.markers[i].icontext, 
					hintContent: json.markers[i].hinttext,
                    balloonContentBody: json.markers[i].balloontext                   
					});

				// Добавляем метку на карту
				myMap.geoObjects.add(myPlacemark);  
        }
    }
    );
    alert('JSON окончена');
}));

$('#redit').click((function()
{
   location.href = $(this).attr('data-href');
}));

$('#closerko').click((function()
{
   PopUpHide();
}));
        }
