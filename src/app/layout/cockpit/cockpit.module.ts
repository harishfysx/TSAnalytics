import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CockpitComponent} from './cockpit.component';
import {CockpitRoutingModule} from './cockpit.routing.module';
import {Routes} from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
    { path: '', component: CockpitComponent }
];

@NgModule({
  imports: [
    CommonModule,
      CockpitRoutingModule
  ],
  declarations: [CockpitComponent, SearchComponent, ResultComponent]
})
export class CockpitModule { }
