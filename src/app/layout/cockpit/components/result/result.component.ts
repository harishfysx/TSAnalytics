import {Component, Input, OnInit} from '@angular/core';
import {Result} from '../../../../shared/models/result.model';
import {ResultService} from '../../../../shared/services/result.service';


@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

     rows = [];

    constructor(private resultService: ResultService) {
        this.fetch((data) => {
            this.rows = data;
        })
    }

    ngOnInit(): void {
        this.resultService.getStudents().subscribe((result: any) => {
            this.fetch((data) => {
                this.rows = data;
            })
        })
    }

    fetch(cb) {
        this.resultService.getStudents().subscribe((result: any) => {
            cb(JSON.parse(result._body))
        });
    }

}
