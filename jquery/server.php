<?php 

 $data = json_decode($_POST['jsonData']);


	echo $data->name.'<hr>';
	echo $data->ID.'<hr>';
	echo $data->dept.'<hr>';

 ?>