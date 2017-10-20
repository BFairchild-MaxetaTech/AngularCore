import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import the header bar component for use


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
    appTitle = "Demo Angular with .Net Core"


    ngOnInit() {

    }


  //constructor(private _httpService: Http) { }

  //apiValues: string[] = [];

  //ngOnInit() {
  //    this._httpService.get('/api/Test').subscribe(values => {
  //        this.apiValues = values.json() as string[];
  //    });
  //}
}
