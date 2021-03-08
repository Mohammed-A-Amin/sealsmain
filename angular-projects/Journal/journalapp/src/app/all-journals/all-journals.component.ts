import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/Shared/Services/api-data.service';

@Component({
  selector: 'app-all-journals',
  templateUrl: './all-journals.component.html',
  styleUrls: ['./all-journals.component.css']
})
export class AllJournalsComponent implements OnInit {

  journals:any = [];

  constructor(public _apiService: ApiDataService){

  }
  
  ngOnInit(): void {
    this.getAllJournals(); 
  }
  
  getAllJournals(){
    this._apiService.getAllJournals();
    this._apiService.listOfJournalsObs
    .subscribe(data => {
      this.journals = data;
      console.log(this.journals);
    });
  }
  
}