/**
 * Created by hel on 13.03.2017.
 */
import {Component, OnInit} from '@angular/core';

import {Course} from '../../core/class/course.class';
import {CourseService} from "../../core/services/courseService/course.service";
import {ModalService} from "../../core/services/modalService/modalService";


@Component({
    selector: 'courses',
    templateUrl: 'courses.template.html',
    styles: [require('./courses.styles.scss')]
})

export class CoursesComponent implements OnInit {

    constructor(private courseSrv: CourseService,
                private modal: ModalService) {

    }


    courses: Course[] = [];
    sub;

    ngOnInit(): void {
        this.courses = this.courseSrv.getList();
    };

    outDeleteCourse(course: Course): void {
        const sub = this.modal.dialog().subscribe(x => {
            if (x) {
                this.courseSrv.deleteCourse(course.id);
            }
            sub.unsubscribe();
        });
    }

}
