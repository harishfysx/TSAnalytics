import {SubjectModel} from './subject.model';

export class StudentModel{

    constructor(
        public _id: string,
        public ticket: number,
        public district: string,
        public stdntname: string,
        public grandtotal: string,
        public grandresult: string
    ) {}



}



