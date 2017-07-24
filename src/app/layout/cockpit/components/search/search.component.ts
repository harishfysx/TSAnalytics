import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ResultService} from '../../../../shared/services/result.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    @ViewChild('hallTicketNoInput') hallTicketNoInput: ElementRef;
  constructor(private resultService: ResultService) { }

  ngOnInit() {
      this.hallTicketNoInput.nativeElement.value= 1730110391
  }

    onAddStudent() {
      // console.log('student hall ticket number :' + this.hallTicketNoInput.nativeElement.value);
        this.resultService.getStudent(this.hallTicketNoInput.nativeElement.value).subscribe((resp: any) => {
            console.log(resp);
        }, (error) => {
            console.log(error)
        })
    }

}
