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
    }

    loadStudentClient() {
        this.resultService.getStudentsPromise().then((result: any) => {
            // console.log(result)
            this.rows = result;
        });
    }
    ngOnInit(): void {
        this.loadStudentClient();
        this.resultService.newStudentAddedEvent.subscribe((addedStudent: boolean) =>{
            if (addedStudent) {
                this.loadStudentClient();
            }
        })
    }

    onPage(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log('paged!', event);
        }, 100);
    }

    toggleExpandRow(row) {
        // console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }

    onDetailToggle(event) {
        // console.log('Detail Toggled', event);
    }
    //
    onDelStudent(id: string) {
        console.log('to be deleted' + id);
        this.resultService.deleteStudent(id).then((response) => {
            console.log(response);
            this.loadStudentClient();
        })
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
