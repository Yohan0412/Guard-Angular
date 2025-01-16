import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';

  const routes: Routes = [

  {path:'', component: HomeComponent },
  {path:'admin', component: AdminComponent},

];

@NgModule({
  imports: [RouterLink , RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
