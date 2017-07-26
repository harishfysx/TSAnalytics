import { Component, OnInit } from '@angular/core';
import {ResultService} from '../../shared/services/result.service';
import {Result} from '../../shared/models/result.model';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
    students: any;

    constructor( private resultService: ResultService ) { }

    ngOnInit() {
        /*
       this.resultService.getStudents().subscribe((result: any) => {
           this.students = result.data;
       })
       */
    }

}
