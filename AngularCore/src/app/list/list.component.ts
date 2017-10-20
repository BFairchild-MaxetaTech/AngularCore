import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

@Component({
    selector: 'simple-list',
    templateUrl: './list.component.html'
})

export class ListComponent implements OnInit{

    constructor(
        private _httpService: Http
    ) { }
    // variable which is filled from the api. Initalize to nothing.
    apiValues: string[] = []

    ngOnInit() {
        this._httpService.get('/api/Test').subscribe(values => {
            this.apiValues = values.json() as string[];
        });

    }

}
