import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from "./item/item.component";
import {ListComponent} from "./list/list.component";
import {MenuComponent} from "./menu/menu.component";
import {SpinnerComponent} from "./spinner/spinner.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    ItemComponent,
    ListComponent,
    MenuComponent,
    SpinnerComponent
  ],
  exports: [
    ListComponent,
    MenuComponent,
    ItemComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class ComponentsModule {
}
