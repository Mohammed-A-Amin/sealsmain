import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lectureapp';
  firstName = 'Mohammed';
  lastName = 'Amin';
  // What do we need from the user?
  age = '';
  // One way data bind
  todos = ['Eat Breakfast', 'Take a Shower', 'Code challenge']
  imageShows = false;

  displayImage() {
    this.imageShows = true;     
 }

}

