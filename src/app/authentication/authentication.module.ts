import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {AuthenticationRoutes} from "./authentication.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(AuthenticationRoutes),
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class AuthenticationModule { }
