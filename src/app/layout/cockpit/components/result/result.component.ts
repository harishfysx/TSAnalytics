import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Result} from '../../../../shared/models/result.model';
import {ResultService} from '../../../../shared/services/result.service';


@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ResultComponent implements OnInit {
    @ViewChild('students') table: any;
     rows = [];
    expanded: any = {};
     timeout: any;

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

    onPage(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log('paged!', event);
        }, 100);
    }

    fetch(cb) {
        this.resultService.getStudents().subscribe((result: any) => {
            cb(JSON.parse(result._body))
        });
    }

    toggleExpandRow(row) {
        // console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }

    onDetailToggle(event) {
        // console.log('Detail Toggled', event);
    }

    getBadgeCss(passType: string, outCome: string) {
        let cssClasses;
        if (outCome === 'P') {
            cssClasses = {
                'badge' : true,
                'badge-info': true
            }
        } else if (outCome === 'F' ) {
            cssClasses = {
                'badge' : true,
                'badge-danger': true
            }
        }
        return cssClasses;
    }

}
