import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {PagesRoutes} from "./pages-routing.module";
import { PqrsHistoryComponent } from './pqrs-history/pqrs-history.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ComponentsModule} from "../components/components.module";

@NgModule({
  declarations: [
    PqrsHistoryComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(PagesRoutes),
        FontAwesomeModule,
        ComponentsModule,
    ]
})
export class PagesModule { }
