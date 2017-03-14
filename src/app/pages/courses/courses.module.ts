/**
 * Created by hel on 13.03.2017.
 */
// angular modules
import { NgModule } from '@angular/core';
//
//import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { CommonModule } from '@angular/common';
//// routes
//import { routes } from './home.routes';

import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
	declarations: [
		CoursesComponent,
		CourseComponent,
		LogoComponent,
	],
	imports: [
		//routes,
		//FormsModule,
		//ReactiveFormsModule,
		//CommonModule,
	],
	providers: []
})
export class CoursesModule {
	constructor() {
	}
}
