<?php

class PointController extends Controller {

    public function actionIndex() {
        $models = Points::model()->findAll();

        $this->render('index', array('models' => $models));
    }

    public function actionAjax() {
        $iconText = Yii::app()->request->getPost('icontext');
        $hintText = Yii::app()->request->getPost('hinttext');
        $balloonText = Yii::app()->request->getPost('balloontext');
        $lat = Yii::app()->request->getPost('lat');
        $lon = Yii::app()->request->getPost('lon');
        $point = new Points;
        $point->iconText = $iconText;
        $point->hintText = $hintText;
        $point->balloonText = $balloonText;
        $point->lat = $lat;
        $point->lon = $lon;
        $point->save(FALSE);
    }

    public function actionJson() {
        if (Yii::app()->request->isAjaxRequest) {
            $points = Points::model()->findAll();
            for ($i = 0; $i < count($points); $i++) {
                $res = $points[$i]->getAttributes();
                
                $markers[] = $res;
            }
            // $results = array(markers=>$markers);
            echo CJSON::encode($markers);
            //echo json_encode($markers);
            Yii::app()->end();
            //exit();
        }
    }

    public function actionView() {

        $this->render('view');
    }

}
