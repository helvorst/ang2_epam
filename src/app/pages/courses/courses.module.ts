/**
 * Created by hel on 13.03.2017.
 */
// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//// routes
//import { routes } from './home.routes';

// my components
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { LogoComponent } from './logo/logo.component';
import { ToolboxComponent } from './toolbox/toolbox.component';



@NgModule({
	declarations: [
		CoursesComponent,
		CourseComponent,
		LogoComponent,
		ToolboxComponent
	],
	imports: [
		//routes,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
	],
	providers: []
})
export class CoursesModule {
	constructor() {
	}
}
