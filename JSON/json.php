<?php
setcookie('test',1);
$jsonString  = json_decode($_GET['json']);
echo json_encode($jsonString);
die;
$res =[
    'name'=>$name,
    'age' => $age,
    'address'=>['street'=>'Marco polo', 'city'=>'TURIN'],
    'languages'=>['spanish','english','italian','german']
];
echo json_encode($res);