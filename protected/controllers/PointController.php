<?php

class PointController extends Controller
{
	public function actionIndex()
	{
           $models= Points::model()->findAll();
           
		$this->render('index',array('models'=>$models));
       }
        
	
         
        public function actionAjax()
                {
            $iconText  = Yii::app()->request->getPost('icontext');
            $hintText  = Yii::app()->request->getPost('hinttext');
            $balloonText  = Yii::app()->request->getPost('balloontext');
            $lat= Yii::app()->request->getPost('lat');
            $lon= Yii::app()->request->getPost('lon');
		$point=new Points;
                $point->iconText=$iconText;
                $point->hintText=$hintText;
                $point->balloonText=$balloonText;
                $point->lat=$lat;
                $point->lon=$lon;
                $point->save(FALSE);         
        }
        public function actionJson()
                {
            //if(Yii::app()->request->isAjaxRequest)
               // {
               $points=  Points::model()->findAll();
               if($points>0){
               foreach ($points as $point) {
                   $json =  array(icontext=>$point->iconText, hinttext=>$point->hintText, balloontext=>$point->balloonText, 
              lat=>$point->lat, lon=>$point->lon);
         $markers[] = $json;
               }    
               } 
               $results = array(markers=>$markers);
             echo CHtml::encode($results);
               //}
                }

                public function actionView()
	{
            
            $this->render('view');
	}
}
