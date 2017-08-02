import {Result} from '../models/result.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {StudentModel} from '../models/student.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResultService {
    private result: Result = new Result('SOwji', 'A+', 800);
    private studentFromClient: StudentModel;
    private studentsUrl = 'http://192.168.0.60:3000/api/student/students';  // URL to web api
    studentSearched = new EventEmitter<any>();
    constructor(private http: Http) {}
    newStudentAddedEvent = new EventEmitter<boolean>();

    getStudent(hallTicket: number) {
        // console.log('get Result for ' + hallTicket);
        const url = `${this.studentsUrl}/${hallTicket}`;
        return this.http.get(url).map((response: Response) => {
            // this.studentSearched.emit(response.json());
            return response.json();  // map wraps data autmotically into observale but not catch method below
        }).catch ((error: Response) => {
            console.log(error)
            return Observable.throw('Something went wrong');
        });
    }

    addStudent(student: any) {
        // console.log(student);
        return this.http.post('http://192.168.0.60:3000/api/college/student', {'student': student})
            .map((response: Response) => {
                return response.json();
            }).catch ((error: Response) => {
                 const errorObj = error.json();
                if (errorObj.message === '11000') {
                    return Observable.throw('11000');
                }
                 Observable.throw('Something went wrong');
            });
    }

    getStudents() {
        return this.http.get('http://192.168.0.60:3000/api/student/sampleStudents').catch((error: Response) => {
            return Observable.throw('Something went wrong')
        });
    }
    //
    getStudentPromise(): Promise<any[]> {
        return this.http.get('http://192.168.0.60:3000/api/college/sampleStudents')
            .toPromise()
            .then(response => response.json() as any[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}
