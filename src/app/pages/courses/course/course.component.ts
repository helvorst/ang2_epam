/**
 * Created by hel on 13.03.2017.
 */
import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Course } from '../../../core/class/course.class';

@Component({
	selector: 'course',
	templateUrl: 'course.template.html',
	styles: [require('./course.styles.scss')]
})

export class CourseComponent {
	@Input() course: Course;

	@Output() onDeleteCourse = new EventEmitter<Course>();

	deleteCourse(course: Course): void {
		this.onDeleteCourse.emit(course);
	};

	editCourse(id: string | number): void {

	};
}
