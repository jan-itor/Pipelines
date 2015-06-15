<?php
/* @var $this PointController */

$this->breadcrumbs=array(
	'Point',
);
?>
<html>
    <head>
        <style>
           * {
    font-family: Areal;
}
#popup2{
    position: fixed;
    background: #bce8f1;
    display: none;
    top: 20px;
    left:500px;
    width: 300px;
    height: 200px;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 5px;
    color: #fff;
} 
.b-container{
    width:200px;
    height:150px;
    background-color: #ccc;
    margin:0px auto;
    padding:10px;
    font-size:30px;
    color: #fff;
}
.b-popup{
    width:100%;
    min-height:100%;
    background-color: rgba(0,0,0,0.5);
    overflow:hidden;
    position:fixed;
    top:0px;
}

.b-popup .b-popup-content{
    margin:220px;
    padding: 700px;
    position:absolute;
    left:150px;
    width:200px;
    height: 80px;
    padding:10px;
    background-color: #80CFFF;
    border-radius:5px;
    box-shadow: 0px 0px 10px #000;
}
        </style>
    </head>
    <body>
<h1><?php echo TbHtml::alert(TbHtml::ALERT_COLOR_INFO, 'Интерактивная карта Севастополя'); 
echo TbHtml::button('Вывести существующие точки измерения  ', array('color' => TbHtml::BUTTON_COLOR_INFO,'id'=>'putin'));?></h1><br>
<script src="/pipelines/protected/mainMap.js"></script>
<div id="map" style="width:1120px; height:550px"></div>
<div class="b-popup" id="popup1">
    <div class="b-popup-content">
        Акустический потрет: <br>
        <table>
            <tr> <td> <?php echo TbHtml::button('Редактировать', array('color' => TbHtml::BUTTON_COLOR_WARNING,'id'=>'redit','data-href'=>'index.php?r=point/view'))?></td>  
                <td> <?php echo TbHtml::button('Закрыть', array('color' => TbHtml::BUTTON_COLOR_DANGER,'id'=>'closerko')); ?></td></tr>
            <tr> <td>   <?php echo TbHtml::button('Построить график',
                    array( 'disabled' => FALSE,'size'=>TbHtml::BUTTON_SIZE_SMALL, 'color' => TbHtml::BUTTON_COLOR_INFO,'id'=>'chart')); ?></td></tr>
    
        </table>
    </div>
</div>
<div id="popup2">
        <?php
$this->widget(
    'yiiwheels.widgets.highcharts.WhHighCharts',
    array(
        'pluginOptions' => array(
            'title'  => array('text' => 'Акустический портрет'),
            'xAxis'  => array(
                'categories' => array('1й квартал', '2й квартал', '3й квартал','4й квартал')
            ),
            'yAxis'  => array(
                'title' => array('text' => 'Значения, Па')
            ),
            'series' => array(
                array('name' => 'Уровень давления', 'data' => array(123, 254, 700, 300)),
                //array('name' => 'John', 'data' => array(5, 7, 3))
            )
        )
    )
);
?>
    <button id="close_chart"  class="btn btn-danger" onclick="ChartHide()">Закрыть окно</button><br />\
</div>
    </body>
</html>