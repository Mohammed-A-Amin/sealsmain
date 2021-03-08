import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})

export class ApiDataService {
  private listOfJournals = new BehaviorSubject([]);
  public listOfJournalsObs = this.listOfJournals.asObservable();

  constructor(
    public http: HttpClient
  ) 
  {}

  createNewJournal(incomingData: any) {
    return this.http.post(`${baseUrl}/add-journal`, incomingData);
  }

  deleteAJournal(incomingData: any) {
    return this.http.post(`${baseUrl}/remove-journal`, incomingData);
  }
  updateAJournal(incomingData: any) {
    return this.http.post(`${baseUrl}/update-journal`, incomingData);
  }

  pullAllJournals(){
    return this.http.get(`${baseUrl}/get-all-journals`)
  }

  getAllJournals() {
    this.pullAllJournals().subscribe((data: any) => {
      this.listOfJournals.next(data);
    }, (err) => {
      console.log(err);
    })
  }

}