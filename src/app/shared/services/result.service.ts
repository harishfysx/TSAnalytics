import {Result} from '../models/result.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {StudentModel} from '../models/student.model';

@Injectable()
export class ResultService {
    private result: Result = new Result('SOwji', 'A+', 800);
    private studentFromClient: StudentModel;
    private studentsUrl = 'http://192.168.0.60:3000/api/student/students';  // URL to web api
    studentSearched = new EventEmitter<any>();
    constructor(private http: Http) {}



    getStudent(hallTicket: number) {
        console.log('get Result for ' + hallTicket);
        // this.http.get('http://192.168.0.60:3000/api/student/students'+hallTicket,)

         // const headers = new Headers({'Access-Control-Allow-Origin': '*'});
        const url = `${this.studentsUrl}/${hallTicket}`;
        // const url = `https://harish-udemy.firebaseio.com/AppName.json`;

        return this.http.get(url).map((response: Response) => {
            this.studentSearched.emit(response.json());
            return response.json();  // map wraps data autmotically into observale but not catch method below
        }).catch ((error: Response) => {
            console.log(error)
            return Observable.throw('Something went wrong');
        });
    }



}
