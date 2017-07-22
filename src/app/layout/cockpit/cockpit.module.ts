import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CockpitComponent} from './cockpit.component';
import {CockpitRoutingModule} from './cockpit.routing.module';
import {Routes} from '@angular/router';

const routes: Routes = [
    { path: '', component: CockpitComponent }
];

@NgModule({
  imports: [
    CommonModule,
      CockpitRoutingModule
  ],
  declarations: [CockpitComponent]
})
export class CockpitModule { }
