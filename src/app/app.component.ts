import { Component } from '@angular/core';
import { RepoService } from './repo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routingApp';
  message;
  currentDate;

  constructor(private myService : RepoService){
  }

  ngOnInit(){
    this.message = this.myService.fetchAll()
  }
  
  showData(){
    this.currentDate = this.myService.showTodayDate()
  }

}
