import {Result} from '../models/result.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ResultService {
    private result: Result = new Result('SOwji', 'A+', 800);
    private studentsUrl = 'http://192.168.0.60:3000/api/student/students';  // URL to web api
    studentSearched = new EventEmitter<Result>();
    constructor(private http: Http) {}



    getStudent(hallTicket: number) {
        console.log('get Result for ' + hallTicket);
        // this.http.get('http://192.168.0.60:3000/api/student/students'+hallTicket,)
        this.studentSearched.emit(this.result);
         // const headers = new Headers({'Access-Control-Allow-Origin': '*'});
        const url = `${this.studentsUrl}/${hallTicket}`;
        return this.http.get(url).map((response: Response) => {
            console.log(response);
            return response  // map wraps data autmotically into observale but not catch method below
        }).catch ((error: Response) => {
            console.log(error)
            return Observable.throw('Something went wrong');
        });
    }



}
