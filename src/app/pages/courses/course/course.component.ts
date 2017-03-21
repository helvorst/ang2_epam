/**
 * Created by hel on 13.03.2017.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Course} from '../../../core/class/course.class';

@Component({
    selector: 'course',
    templateUrl: 'course.template.html',
    styles: [require('./course.styles.scss')]
})

export class CourseComponent {
    @Input() course: Course;
    @Input() index: number;

    @Output() onDeleteCourse = new EventEmitter<[Course, number]>();

    deleteCourse(course: Course, index: number): void {
        this.onDeleteCourse.emit([course, index]);
    };

    editCourse(id: string | number): void {

    };
}
