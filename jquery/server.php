<?php 

<<<<<<< HEAD
<<<<<<< HEAD
	$data = '{"name":"Sameull","id":12,"dept":"CS"}';
	//header("Content-type: application/json");
	echo $data;
=======
 $data = json_decode($_POST['jsonData']);
=======
 $data = json_decode($_POST['jsonData']);


	echo $data->name.'<hr>';
	echo $data->ID.'<hr>';
	echo $data->dept.'<hr>';
>>>>>>> a25949f68e0439b9815c84a826df5c57528678ef


	echo $data->name.'<hr>';
	echo $data->ID.'<hr>';
	echo $data->dept.'<hr>';

>>>>>>> a25949f68e0439b9815c84a826df5c57528678ef
 ?>