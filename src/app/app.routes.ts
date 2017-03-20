import { Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses';
import { NoContentComponent } from './pages/no-content';
import {LoginComponent} from "./pages/login/login.component";

import { AuthGuard } from './core/guard/auth-guard.service';

export const ROUTES: Routes = [
	{path: '', component: CoursesComponent, canActivate: [AuthGuard]},
	{path: 'login', component: LoginComponent},
	{path: '',   redirectTo: '/', pathMatch: 'full' },
	{path: '**', component: NoContentComponent},
];
