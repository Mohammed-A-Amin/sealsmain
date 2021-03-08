import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../../Shared/Services/api-data.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-journal',
  templateUrl: './add-journal.component.html',
  styleUrls: ['./add-journal.component.css']
})
export class AddJournalComponent implements OnInit {
  public updateForm!: FormGroup;
  public createForm!: FormGroup;


  constructor( public _apiService: ApiDataService, public fb: FormBuilder){
  }
  ngOnInit(): void{
    this.initForm();
  }

  initForm(): void{
    this.createForm = this.fb.group({
      title: [null, Validators.required],
      author: [null, Validators.required],
      content: [null, Validators.required]
    });
    this.updateForm = this.fb.group({
      selectedTitle: [null, Validators.required],
      updatedTitle: [null, Validators.required],
      updatedAuthor: [null, Validators.required],
      updatedContent: [null, Validators.required]
    });
  }

  journalSubmit(){
    let journalTitle = this.createForm.value.title;
    let journalAuthor = this.createForm.value.author;
    let journalContent = this.createForm.value.content;
    let postData = {
      "title": journalTitle,
      "author": journalAuthor,
      "content": journalContent
    } 
    this._apiService.createNewJournal(postData)
    .subscribe((data: any) => {
      console.log(data);
      alert("Journal Created Succesfully!");
    });
    this.createForm.reset();  
  }
  
  journalUpdate(){
    let selectedTitle = this.updateForm.value.selectedTitle;
    let updatedTitle = this.updateForm.value.updatedTitle;
    let updatedAuthor = this.updateForm.value.updatedAuthor;
    let updatedContent = this.updateForm.value.updatedContent;

    let postData = {
      "title": selectedTitle,
      "updatedTitle": updatedTitle,
      "updatedAuthor": updatedAuthor,
      "updatedContent": updatedContent
    } 
    console.log(postData);
    this._apiService.updateAJournal(postData)
    .subscribe((data: any) => {
      console.log(data);
      alert("Journal Updated Succesfully!");
    });
    this.updateForm.reset();  
  }

}