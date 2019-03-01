import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private http : HttpClient) {
  }

  showTodayDate(){
    var today = new Date()
    return today
  }

  fetchAll(){
   return (this.http.get('https://api.github.com/repositories').subscribe(res=>res))
  }



}
