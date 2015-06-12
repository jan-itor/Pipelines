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
<h1><?php echo TbHtml::alert(TbHtml::ALERT_COLOR_INFO, 'Интератктивная карта Севастополя'); 
echo TbHtml::button('Вывести существующие точки измерения  ', array('color' => TbHtml::BUTTON_COLOR_INFO,'id'=>'putin'));?></h1><br>
<script src="/pipelines/protected/mainMap.js"></script>
<div id="map" style="width:1120px; height:550px"></div>
<div id="scriptmes"></div>
<div id="res"></div>
<div class="b-popup" id="popup1">
    <div class="b-popup-content">
        "Информация о метке"<br>
      <?php echo TbHtml::button('Редактировать', array('color' => TbHtml::BUTTON_COLOR_WARNING,'id'=>'redit','data-href'=>'index.php?r=point/view')),  
       TbHtml::button('Закрыть', array('color' => TbHtml::BUTTON_COLOR_DANGER,'id'=>'closerko')); ?>
<!--    <a href="javascript:PopUpHide()">Закрыть</a>-->
    </div>
</div>
    </body>
</html>