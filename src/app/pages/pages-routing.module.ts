import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PqrsHistoryComponent} from "./pqrs-history/pqrs-history.component";

export const PagesRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pqrs-history/:code', component: PqrsHistoryComponent },
];
