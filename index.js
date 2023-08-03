function verify(){
    var email=document.getElementById('email');
    var password=document.getElementById('password');
    var firstname=document.getElementById('firstname');
    var lastname=document.getElementById('lastname');
    var middlename=document.getElementById('middlename');
    var city=document.getElementById('city');
    var phone=document.getElementById('phone');
    var address=document.getElementById('address');
    var zipcode=document.getElementById('zipcode');
    var confirm_password=document.getElementById('confirm_password');
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(confirm_password==""||password==""||password==null||confirm_password==null){
        alert("Password can't be empty");
    }
    else if(password.length<10){
        alert("Password length must exceed 10");
    }
    else if (password!=confirm_password){
        alert("Password doesn't match");
    } 
    if(firstname==""||lastname==""||firstname==null||lastname==null)   {
        alert("Name can't be empty");
    }
    if (!(email.match(validRegex))){
        alert("You have entered an invalid email address!");
    }
    if(zipcode.length!=6){
        alert("Zipcode entered is wrong");
    }
    if(phone.length!=10){
        alert("Phone number is invalid");
    }
    if(city==""||city==null){
        alert("Fill your current city");
    }
    if(address==""||address==null){
        alert("Fill your Address");
    }
}
function myFunction() {
    var x = document.getElementById("password");
    var y = document.getElementById("confirm_password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    if (y.type === "password") {
        y.type = "text";
      }
       else {
        y.type = "password";
      }
  }