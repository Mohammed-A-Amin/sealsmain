import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Store data using this array
  public todos = ['Finish Math', 'Buy Groceries', 'Guitar Lessons'];
  // How will you take the input
   todo = ''
  // Add functions as you fit!
  displayText(){
     this.todos.push(this.todo);
  }
  // How do add data to an array in js? hint: search .push()
 
}
