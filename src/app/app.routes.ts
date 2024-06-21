import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';

// landing page
import { LayoutComponent } from './user/layout/layout.component'
import { HomeComponent } from './user/home/home.component';

export const routes: Routes = [

  // frontend route

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: '', component: LayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
