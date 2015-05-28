/*var myMap;

// Дождёмся загрузки API и готовности DOM.


function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [44.58056285, 33.54051384], // Москва
        zoom: 12
    });
}
ymaps.ready(init);*/
 /*ymaps.ready(init);
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
                myMap.balloon.open(coords, "Чтобы выбрать координаты объекта - кликните по нему на карте!", {
                        // Опция: не показываем кнопку закрытия.
                        closeButton: true,
                        maxWidth: 200
                });
                pushValue(coords, 'coords'); // Изначально забиваем место положения человека
                myMap.events.add('click', function (e) {
                        var coords = e.get('coordPosition'); //Тут мы получили координаты
                        clearValue(); // Отчищаем все инпуты от значений
                        // Отправим запрос на геокодирование.
                        ymaps.geocode(coords, {json: true}).then(function (res) { // Получаем json данные
                                var names = [];
                                a = res.GeoObjectCollection.featureMember; // a = все вернувшиеся объекты - область, город, улица, дом и т.д.
                                // Переберём все найденные результаты и
                                // запишем имена найденный объектов в массив names.
                                for (var i = 0; i < a.length; i++) {
                                        kind = a[i].GeoObject.metaDataProperty.GeocoderMetaData.kind;
                                        name = a[i].GeoObject.name;
                                        point = a[i].GeoObject.Point.pos;
                                        //Если тип объекта house то
                                        switch (kind) {
                                                case "house": //Дом
                                                        // Работаем с номером дома
                                                        nameArray = name.split(', ');
                                                        name = nameArray[1];
                                                        names.push(name);
                                                        // Переписываем координаты объекта, т.к. получилось, что кликнули на дом
                                                        coords = point.split(' ').reverse();
                                                        pushValue(name, 'dom')
                                                        break
                                                case "street": //Улица
                                                        names.push(name);
                                                        pushValue(name, 'street')
                                                        break
                                                case "district": //Район
                                                        names.push(name);
                                                        pushValue(name, 'area')
                                                        break
                                                case "locality": //Город
                                                        names.push(name);
                                                        pushValue(name, 'city')
                                                        break
                                                case "province": //Область
                                                        names.push(name);
                                                        pushValue(name, 'region')
                                                        break
                                                default:
                                                        break
                                        }
                                }
                                pushValue(coords, 'coords');
                                names.reverse();
                                // Добавим на карту метку в точку, по координатам
                                // которой запрашивали обратное геокодирование.
                                // Открываем балун на карте (без привязки к геообъекту).
                                myMap.balloon.open(coords, names.join(', '), {
                                        // Опция: не показываем кнопку закрытия.
                                        closeButton: true,
                                        maxWidth: 200
                                });
                        });
                });
        }

        function clearValue() {
                $('#array_data input').each(function () {
                        $(this).val('');
                });
        }

        function pushValue(val, name) {
                $('#MapData_' + name).val(val);
        }*/
var map;
 
/*window.onload = function () {
            map = new YMaps.Map(document.getElementById("YMapsID"));
            map.setCenter(new YMaps.GeoPoint(43.99150,56.31534), 12);
 
            map.addControl(new YMaps.TypeControl());
            map.addControl(new YMaps.ToolBar());
            map.addControl(new YMaps.Zoom());
            map.addControl(new YMaps.ScaleLine());
            map.enableScrollZoom();*/
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