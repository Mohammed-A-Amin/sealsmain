function myRespond(){
    
    let firstName = document.getElementById('firstName').value;
    document.getElementById('displayfirst').innerHTML= "First Name:" + firstName;

    let lastName = document.getElementById('lastName').value;
    document.getElementById('displaylast').innerHTML= "Last Name:" + lastName;
   

    let password = document.getElementById('password1').value;
    document.getElementById('displaypass').innerHTML= "Password:" + password;
    
    alert ('First Name:' + firstName +'\n' + 'Last Name:' + lastName + '\n' + 'Password:' + password );

}

var figlet = require('figlet');
 
figlet('swag', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});