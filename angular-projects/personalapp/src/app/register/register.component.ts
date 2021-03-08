import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

email = ''
fname = ''
lname = ''
password = ''

myRespond(){
  alert('First Name:  ' + this.fname + '\n' + 'Last Name:  ' + this.lname + '\n' + 'Email:  ' + this.email + '\n' + 'Password:  ' + this.password + '\n' + 'Account created!')
}

  constructor() { }

  ngOnInit(): void {
  }

}

