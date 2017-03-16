/**
 * Created by hel on 13.03.2017.
 */
// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// import { routes } from './home.routes';

// my components
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { LogoComponent } from './logo/logo.component';
import { ToolboxComponent } from './toolbox/toolbox.component';

// services
import { CourseService } from '../../core/services/courseService/course.service';


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
	providers: [
		CourseService
	]
})
export class CoursesModule {
	constructor() {
	}
}
