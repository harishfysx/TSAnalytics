import { Component, OnInit } from '@angular/core';
import {ResultService} from '../../shared/services/result.service';
import {Result} from '../../shared/models/result.model';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
    searchedResult: any;

    constructor( private resultService: ResultService ) { }

    ngOnInit() {
       this.resultService.studentSearched.subscribe((result: any) => {
           console.log('from cockpit',result)
           this.searchedResult = result;
       })
    }

}
