import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ObjectsComponent } from './components/objects/objects.component';
import { LoginComponent } from './base/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './base/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  // Only Users verified by the AuthGuard can access this page
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'rent', component: ObjectsComponent },
];

@NgModule({
  // useHash: true
  // Fixes 404 Not Found nginx error
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }