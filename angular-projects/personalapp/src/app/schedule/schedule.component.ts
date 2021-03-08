import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

public todosmon = ['']
todomon = ''
displayMon(){
  this.todosmon.push(this.todomon);
}
public todostue = ['']
todotue = ''
displayTues(){
  this.todostue.push(this.todotue);
}
public todoswed = ['']
todowed = ''
displayWed(){
  this.todoswed.push(this.todowed);
}
public todosthurs = ['']
todothurs = ''
displayThurs(){
  this.todosthurs.push(this.todothurs);
}
public todosfri = ['']
todofri = ''
displayFri(){
  this.todosfri.push(this.todofri);
}
public todossat = ['']
todosat = ''
displaySat(){
  this.todossat.push(this.todosat);
}
public todossun = ['']
todosun = ''
displaySun(){
  this.todossun.push(this.todosun);
}

public todosm = ['']




  constructor() { }

  ngOnInit(): void {
  }

}
