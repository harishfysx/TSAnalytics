import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StateAnalyticsComponent} from './state-analytics.component';
import {StateAnalyticsRoutingModule} from './state-analytics.routing.module';

@NgModule({
  imports: [
    CommonModule,
      StateAnalyticsRoutingModule
  ],
  declarations: [StateAnalyticsComponent]
})
export class StateAnalyticsModule { }
