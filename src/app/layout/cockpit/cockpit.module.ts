import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CockpitComponent} from './cockpit.component';
import {CockpitRoutingModule} from './cockpit.routing.module';
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
      CockpitRoutingModule,
      NgxDatatableModule,
      FormsModule
  ],
  declarations: [CockpitComponent, SearchComponent, ResultComponent]
})
export class CockpitModule { }
