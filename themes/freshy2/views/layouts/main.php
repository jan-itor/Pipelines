<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="en" />
    <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/style.css" media="screen, projection" />
    <?php /* Put the custom style here - like 'custom_bloggy.css', 'custom_vitamin', etc - you can store it in the app params or in a database. */ ?>
    <?php //if((Yii::app()->config->get('style') !== 'freshy2') && (Yii::app()->config->get('style'))) : ?>
<!--        <link rel="stylesheet" type="text/css" href="<?php //echo Yii::app()->theme->baseUrl; ?>/css/<?php //echo Yii::app()->config->get('style')?>.css" media="screen, projection" />-->
    <?php //endif; ?>
    <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/yii_style.css" media="screen, projection" />
    <title><?php echo CHtml::encode($this->pageTitle); ?></title>
    <?php Yii::app()->bootstrap->register(); ?>
</head>
<body>
<div id="body">
    <div id="header">
        <div class="container">
            <div class="title_im">
                <h1>
                    <a href='index.php'><img src="images/logo.png"  alt="Водоканал" /></a>
                </h1>                
            </div>
            <div id="header_image">
                <div id="menu">
                    <div class="menu_container">
                        <?php $this->widget('Freshy2Menu',array(
                            'items'=>array(
                                    array('label'=>'Главная страница', 'url'=>array('/site/index')),
                                    array('label'=>'Карта Севастополя', 'url'=>array('/point/index')),
                                    array('label'=>'Справка', 'url'=>array('/site/page', 'view'=>'about')),
                                    array('label'=>'Контакты', 'url'=>array('/site/contact')),
                                    //array('label'=>'Регистрация?', 'url'=>array('/site/login'), 'visible'=>Yii::app()->user->isGuest),
                                    array('label'=>'Logout ('.Yii::app()->user->name.')', 'url'=>array('/site/logout'), 'visible'=>!Yii::app()->user->isGuest)
                            ),
                        )); ?>
                    </div><span class="menu_end"></span>
                </div><!-- menu -->
            </div><!-- header_image -->
        </div><!-- container -->
    </div><!-- header -->
    <?php echo $content; ?>
    <div id="footer">
        <div class="container">
            <div id="footer_content">
                Copyright &copy; <?php echo date('Y'); ?> by SGU.<br/>
		Все права защищены.<br/>
            </div><!-- footer_content -->
        </div><!-- container -->
    </div><!-- footer -->
</div><!-- body -->
</body>
</html>
