<script src="http://code.highcharts.com/stock/highstock.js"></script>
    <script src="http://code.highcharts.com/stock/modules/exporting.js"></script>
<?php echo TbHtml::beginFormTb(); ?>
    <fieldset>
        <legend>Редактирование метки</legend>
        <?php echo TbHtml::label('Название метки', 'text'); ?>
        <?php echo TbHtml::textField('iconText', '$iconText', array('placeholder' => 'Type something...'));?>
        <?php echo TbHtml::label('Всплывающая посдказка', 'text'); ?>
        <?php echo TbHtml::textField('hintText', '$hintText', array('placeholder' => 'Type something...'));?>
        <?php echo TbHtml::label('Акустический портрет', 'text'); ?>
        <?php echo TbHtml::textField('baloonText', '$baloonText', array('placeholder' => 'Type something...')); ?>
        <br>
        <?php echo TbHtml::submitButton('Сохранить изменения',array('class'=>'btn btn-success')); ?>
    </fieldset>
<?php echo TbHtml::endForm(); ?>

<!--<script>
    $(function () {
    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {

        // Create the chart
        $('#container').highcharts('StockChart', {
            chart: {
                type: 'area'
            },

            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'Давление в трубах за отрезок времени'
            },

            yAxis: {
                reversed: true,
                showFirstLabel: true,
                showLastLabel: true
            },

            series: [{
                name: 'Давление в трубе',
                data:data,
                threshold: null,
                fillColor : {
                    linearGradient : {
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    },
                    stops : [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });
});
</script>
<div id="container" style="height: 400px; min-width: 310px"></div>-->