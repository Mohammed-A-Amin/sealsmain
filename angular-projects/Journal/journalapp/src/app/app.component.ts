import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiDataService } from '../Shared/Services/api-data.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'journalapp';

  constructor(public _apiService: ApiDataService, public fb: FormBuilder) { }


    // this.deleteForm = this.fb.group({
    //   title: [null, Validators.required]
    // })
  
  }
