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
        // console.log('get Result for ' + hallTicket);
        const url = `${this.studentsUrl}/${hallTicket}`;
        return this.http.get(url).map((response: Response) => {
            this.studentSearched.emit(response.json());
            return response.json();  // map wraps data autmotically into observale but not catch method below
        }).catch ((error: Response) => {
            console.log(error)
            return Observable.throw('Something went wrong');
        });
    }

    addStudentToFireBase(student: any) {
        return this.http.post('https://harish-udemy.firebaseio.com/data.json', student);
    }

    getStudents() {
        return this.http.get('https://harish-udemy.firebaseio.com/data.json').map((response: Response) => {
            const data = response.json();
            return data;  // map wraps data autmotically into observale but not catch method below
        }).catch ((error: Response) => {
            return Observable.throw('Something went wrong');
        });
    }



}
