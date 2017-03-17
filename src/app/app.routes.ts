import { Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses';
import { NoContentComponent } from './pages/no-content';
import {LoginComponent} from "./pages/login/login.component";

export const ROUTES: Routes = [
	{path: 'courses', component: CoursesComponent},
	{path: 'login', component: LoginComponent},
	// { path: '',   redirectTo: '/courses0', pathMatch: 'full' },
	// {path: '**', component: NoContentComponent},
];
