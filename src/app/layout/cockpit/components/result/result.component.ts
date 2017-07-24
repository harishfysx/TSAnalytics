import {Component, Input, OnInit} from '@angular/core';
import {Result} from '../../../../shared/models/result.model';
declare var $;
@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
    // result : Result;
    @Input() result: any;
    test = 'Test';
    studenets = [
        {fullName: 'James', hallTicket: 12345, totalMarks: 234 },
        {fullName: 'Bond', hallTicket: 12345, totalMarks: 234 },
        {fullName: 'Test', hallTicket: 12345, totalMarks: 234 },
        {fullName: 'James', hallTicket: 12345, totalMarks: 234 },
        {fullName: 'James', hallTicket: 12345, totalMarks: 234 },
        {fullName: 'James', hallTicket: 12345, totalMarks: 234 },
    ]
    constructor() { }

    ngOnInit() {
        $(function () {

            $('#example').DataTable();
        })
    }


}
