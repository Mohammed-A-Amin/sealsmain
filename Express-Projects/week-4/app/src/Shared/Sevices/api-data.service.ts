import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  // Create a reference to all movies
  private listOfMovies = new BehaviorSubject([]);
  public listOfMoviesObs = this.listOfMovies.asObservable();

  constructor(
    public http: HttpClient
  ) { }

  pullMovies() {
    return this.http.get(`${baseUrl}/get-movies`);
  }

  pullOneMovie(incomingData) {
    return this.http.post(`${baseUrl}/get-one-movie`, incomingData);
  }

  // Populate the observable to have a reference of all movies
  getAllMovies() {
    this.pullMovies().subscribe((data: any) => {
      console.log(data);
      // Observable
      this.listOfMovies.next(data);
    }, (err) => {
      console.log(err);
    })
  }
}
