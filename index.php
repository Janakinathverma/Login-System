<?php
$firstName=$_POST['firstName'];
$middleName=$_POST['middlename'];
$lastName=$_POST['lastName'];
$gender=$_POST['gender'];
$age=$_POST['age'];
$password=$_POST['password'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$address=$_POST['address'];
$zipcode=$_POST['zipcode'];

$conn=new mysqli('localhost','root','','test');
if($conn->connect_error){
    die('Connection Failed: '.$conn->connect_error);
}else{
    $stmt=$conn->prepare("Insert into registration(firstName,middleName,lastName,age,gender,password,email,phone,address,zipcode)value(?,?,?,?,?,?,?,?,?,?)");
    $stmt->bind_param("sssssi",$firstName,$middleName,$lastName,$age,$gender,$password,$email,$phone,$address,$zipcode);
    $stmt->execute();
    echo "registration Sucessfull...";
    $stmt->close();
    $conn->close();
}
?>