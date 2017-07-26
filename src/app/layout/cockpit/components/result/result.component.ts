import {Component} from '@angular/core';
import {Result} from '../../../../shared/models/result.model';


@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent {


    rows = [];



    constructor() {
        this.fetch((data) => {
            this.rows = data;
        });
    }

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/students.json`);

        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };

        req.send();
    }

}
