<?php

/**
 * This is the model class for table "Points".
 *
 * The followings are the available columns in table 'Points':
 * @property integer $id
 * @property string $iconText
 * @property string $hintText
 * @property string $balloonText
 * @property string $stylePlacemark
 * @property string $lat
 * @property string $lon
 */
class Points extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'Points';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('iconText, hintText, balloonText, stylePlacemark, lat, lon', 'required'),
			array('iconText, hintText, balloonText, stylePlacemark, lat, lon', 'length', 'max'=>255),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, iconText, hintText, balloonText, stylePlacemark, lat, lon', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'iconText' => 'Icon Text',
			'hintText' => 'Hint Text',
			'balloonText' => 'Balloon Text',
			'stylePlacemark' => 'Style Placemark',
			'lat' => 'Lat',
			'lon' => 'Lon',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 *
	 * Typical usecase:
	 * - Initialize the model fields with values from filter form.
	 * - Execute this method to get CActiveDataProvider instance which will filter
	 * models according to data in model fields.
	 * - Pass data provider to CGridView, CListView or any similar widget.
	 *
	 * @return CActiveDataProvider the data provider that can return the models
	 * based on the search/filter conditions.
	 */
	public function search()
	{
		// @todo Please modify the following code to remove attributes that should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('iconText',$this->iconText,true);
		$criteria->compare('hintText',$this->hintText,true);
		$criteria->compare('balloonText',$this->balloonText,true);
		$criteria->compare('stylePlacemark',$this->stylePlacemark,true);
		$criteria->compare('lat',$this->lat,true);
		$criteria->compare('lon',$this->lon,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Points the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
