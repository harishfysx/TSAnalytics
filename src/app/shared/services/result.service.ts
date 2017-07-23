
import {Result} from '../models/result.model';
import {EventEmitter} from "@angular/core";
export class ResultService {
    private result: Result = new Result('SOwji', 'A+', 800);
    studentSearched = new EventEmitter<Result>();
    constructor() {}



    getStudent(hallTicket: number) {
        console.log('get Result for ' + hallTicket);
        this.studentSearched.emit(this.result);
    }
}
