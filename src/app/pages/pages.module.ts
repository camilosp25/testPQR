import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {PagesRoutes} from "./pages-routing.module";
import { PqrsHistoryComponent } from './pqrs-history/pqrs-history.component';



@NgModule({
  declarations: [
    PqrsHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
  ]
})
export class PagesModule { }
