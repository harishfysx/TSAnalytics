import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StateAnalyticsComponent} from './state-analytics.component';



const routes: Routes = [
    { path: '', component: StateAnalyticsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StateAnalyticsRoutingModule {}
