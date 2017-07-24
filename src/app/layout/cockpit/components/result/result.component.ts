import {Component, Input, OnInit} from '@angular/core';
import {Result} from '../../../../shared/models/result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
     //result : Result;
    @Input() result: any;
    test = 'Test';

  constructor() { }

  ngOnInit() {

  }

}
