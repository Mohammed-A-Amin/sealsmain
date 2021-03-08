import { Component, OnInit } from '@angular/core';
// forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Use a service
import { ApiDataService } from '../Shared/Sevices/api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  public movieList = [];
  public movie = '';
  public inputGroup: FormGroup;
  public selectedMovie: any =[];
  public selectedMovieID = ''

  constructor(public _apiService: ApiDataService, public fb: FormBuilder) { }

  ngOnInit() {
    this.listenForMovieData();
    // Subscribe
    this._apiService.listOfMoviesObs
      .subscribe((data) => {
        this.movieList = data;
      })
    this.initForm();
  }

  listenForMovieData() {
    this._apiService.getAllMovies();
  }

  initForm() {
    this.inputGroup = this.fb.group({
      title: [null, Validators.required]
    })
  }

  onFormSubmit(){
    let movieName = this.inputGroup.value.title;
    for (let i = 0; i < 20; i++){
      if (movieName === this.movieList[i].title){
        this.selectedMovieID = this.movieList[i].id;
      }
    }
    let postData = {
      id: this.selectedMovieID
    }
    
    this._apiService.pullOneMovie(postData)
    .subscribe((data: any) =>{
      this.selectedMovie = data;
      console.log(this.selectedMovie);
    });
}
}
