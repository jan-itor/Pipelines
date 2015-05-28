
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
                });
                myMap.events.add("click",
    function(e) {
        myMap.balloon.open(
            // Позиция балуна
            e.get("coordPosition"), {
                // Свойства балуна:
                // контент балуна
                contentBody: "Значение: " +
                e.get("coordPosition")
            }   
        )
 var succ=myMap.geoObjects.add(new ymaps.Placemark(e.get("coordPosition")));
 if(succ) {
     alert('Метка успешно добавлена');
 };
 myMap.balloon.close();
    }
);
//Рассмотреть позже подобный вариант:
//Запрос данных и вывод маркеров на карту
/*jQuery.getJSON("index.php",
function(json){
for (i = 0; i < json.markers.length; i++) {
var placemark=new ymaps.Placemark(new YMaps.GeoPoint(json.markers[i].lat,json.markers[i].lng), {style: "default#redSmallPoint"});
placemark.description= '<div style="color:#ff0303;font-weight:bold">'+json.markers[i].name+'</div>';
placemark.description = placemark.description+'<strong>Описание:</strong> '+json.markers[i].descriptions;
map.addOverlay(placemark);
}
 
});
 
var myLayout = function (geoPoint) {
   var $element = YMaps.jQuery('<div>Название: <input type="text" id="name"/><br />Описание: <textarea id="descriptpoint" cols="20" rows="5"></textarea><br /><input type="button" value="Добавить" id="submit"/></div>');
   this.onAddToParent = function (parent) {
        $element.find('#submit').bind('click', function () {
              YMaps.jQuery.ajax({
                  url: 'PointController.php',
                  data: {
                       namepoint: $element.find('#name')[0].value,
					   descriptpoint: $element.find('#descriptpoint')[0].value,
                       pcoord: geoPoint.toString()
                  },
 
            dataType: 'json',
                  // Это функция обработки ответа сервера
                  success: function (res) {
                       if (res.success) {
                             // если точка сохранилась, закрываем балун
                             map.closeBalloon();
                             // и ставим точку на карту
                             map.addOverlay(new YMaps.Placemark(geoPoint));
 
                       } else {
                             // иначе выдаем сообщение об ошибке
                            // YMaps.jQuery('<p style="color:red">' + e.message + '</p>').appendTo("#scriptmes");
							 YMaps.jQuery("#scriptmes").html('<p style="color:red">' + e.message + '</p>');
                       }
                  }
              });
 
        });
        $element.appendTo(parent);
   };
   this.onRemoveFromParent = function () {
        $element.remove();
   };
 
   this.update = function () {};
}
 
YMaps.Events.observe(map, map.Events.Click, function (map, e) {
     map.openBalloon(e.getCoordPoint(), new myLayout(e.getCoordPoint()));
});
 
} */}