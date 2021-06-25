import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { Approutes } from './app-routing.module';
import {AppComponent} from './app.component';
import {ExternalComponent} from './layouts/external/external.component';
import {InternalComponent} from './layouts/internal/internal.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {HomeComponent} from './pages/home/home.component';
import {ToastrModule} from "ngx-toastr";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";
import {ComponentsModule} from "./components/components.module";

@NgModule({
  declarations: [
    AppComponent,
    ExternalComponent,
    InternalComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Approutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
