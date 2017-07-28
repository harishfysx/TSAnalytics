import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ResultService} from '../../../../shared/services/result.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    @ViewChild('hallTicketNoInput') hallTicketNoInput: ElementRef;
    // student = 'test';
    @ViewChild('f') hallTicketForm: NgForm;
    student: any;
    showInvalidMessage = false;

  constructor(private resultService: ResultService) { }

  ngOnInit() {
       this.hallTicketNoInput.nativeElement.value = 1730110496;
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

    onGetStudent() {
      // console.log('student hall ticket number :' + this.hallTicketNoInput.nativeElement.value);
        // this.hallTicketForm.value.
        this.resultService.getStudent(this.hallTicketNoInput.nativeElement.value).subscribe((resp: any) => {
            console.log(resp);
            this.student = resp.student;
            this.showInvalidMessage = false;
        }, (error) => {
            console.log(error);
            this.showInvalidMessage = true;
        })
    }

    onAddStudent() {
    this.resultService.addStudentToFireBase(this.student).subscribe((resp) => {
        console.log(resp);
    }, (error) => {
        console.log(error)
    });
    }

}
