import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../../Shared/Services/api-data.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-remove-journal',
  templateUrl: './remove-journal.component.html',
  styleUrls: ['./remove-journal.component.css']
})
export class RemoveJournalComponent implements OnInit {
  public deleteForm!: FormGroup;

  constructor( public _apiService: ApiDataService, public fb: FormBuilder){
  }
  ngOnInit(): void{
    this.initForm();
  }

  initForm(): void{
    this.deleteForm= this.fb.group({
      title: [null, Validators.required]
    });
  }
  removeSpecifiedJournal(){
    let specifiedJournal = this.deleteForm.value.title;
    console.log(specifiedJournal);
    let postData = {
          "title": specifiedJournal
    }
    this._apiService.deleteAJournal(postData)
    .subscribe((data: any) => {
      console.log(data)
      alert(specifiedJournal + " deleted!" )
    });
    this.deleteForm.reset();  
  }
}
