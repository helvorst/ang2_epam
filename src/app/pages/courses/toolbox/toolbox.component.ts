import  { Component } from '@angular/core';
import {CourseService} from "../../../core/services/courseService/course.service";

@Component({
	selector: 'toolbox',
	templateUrl: './toolbox.template.html',
	styles: [require('./toolbox.styles.scss')]
	//styles: [require('./logo.styles.scss')]
})

export class ToolboxComponent {
	public search: '1';

	constructor(private courseSrv: CourseService){};

	findCourse(): void {
		console.log(this.search);
	}

	addCourse(): void {
		this.courseSrv.addCourse();
	}

}
