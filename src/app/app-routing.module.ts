import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExternalComponent} from "./layouts/external/external.component";
import {AuthGuard} from "./auth.guard";
import {InternalComponent} from "./layouts/internal/internal.component";

const routes: Routes = [
  {
    path: '',
    component: InternalComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: '/authentication/login', pathMatch: 'full'},
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      }
    ]
  },
  {
    path: '',
    component: ExternalComponent,
    children: [
      {
        path: 'authentication',
        loadChildren:
          () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
