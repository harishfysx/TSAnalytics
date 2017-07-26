import {Component, Input, OnInit} from '@angular/core';
import {Result} from '../../../../shared/models/result.model';
import {ResultService} from '../../../../shared/services/result.service';


@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
    @Input() rows = [];

    constructor(private resultService: ResultService) {}

    ngOnInit(): void {
        this.resultService.getStudents().subscribe((result: any) => {

            console.log('result object',  result);
             // this.rows = result;
        })
    }
}
