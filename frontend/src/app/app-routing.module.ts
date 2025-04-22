import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FormationComponent } from './components/pages/formation/formation.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'formation',
    component: FormationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
