import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExternalComponent} from './layouts/external/external.component';
import {InternalComponent} from './layouts/internal/internal.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {HomeComponent} from './pages/home/home.component';
import {ToastrModule} from "ngx-toastr";
import {ListComponent} from './components/list/list.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    ExternalComponent,
    InternalComponent,
    SpinnerComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
