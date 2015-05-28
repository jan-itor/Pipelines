<?php

class PointController extends Controller
{
	public function actionIndex()
	{
            $models= Points::model()->findAll();
            $newPoint=new Points();
            if(isset($_POST['Points']))
        {
            $newPoint->attributes=$_POST['Points'];
               if($newPoint->save()){                
         $this->refresh(); 
               }      
        }
		 $models= Points::model()->findAll();
                 if(Yii::app()->request->isAjaxRequest) {
              while($point=$newPoint->attributes){
                  $json=array(icontext=>$point->iconText, hinttext=>$point->hintText, balloontext=>$point->balloonText, styleplacemark=>$point->stylePlacemark, lat=>$point->lat, lon=>$point->lon);
              $markers[] = $json;  
              }
              $points = array(markers=>$markers);
              echo json_encode($points);
        }
		$this->render('index',array('models'=>$models));
	}
        
	/*public function actionView($id)
	{
            
            $this->render('view',array('models'=>$models,'newPoint'=>$newPoint));
	}*/
}