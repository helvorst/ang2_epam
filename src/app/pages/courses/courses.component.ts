/**
 * Created by hel on 13.03.2017.
 */
import {Component, OnInit} from '@angular/core';

import {Course} from '../../core/class/course.class';
import {CourseService} from "../../core/services/courseService/course.service";
import {ModalService} from "../../core/services/modalService/modalService";
import {Observable} from "rxjs";


@Component({
    selector: 'courses',
    templateUrl: 'courses.template.html',
    styles: [require('./courses.styles.scss')]
})

export class CoursesComponent implements OnInit {

    constructor(private courseSrv: CourseService,
                private modal: ModalService) {

    }

    //courses: Observable<Course[]>;
    courses: Course[];
    sub;

    ngOnInit(): void {
        this.courseSrv.getList()
            .subscribe((courses: Course[]) => this.courses = courses);
    };

    outDeleteCourse(course: Course): void {
        const content = {
            title: 'Do you really wanna delete the course?'
        };
        const sub = this.modal.dialog(content).subscribe(x => {
            if (x) {
                this.courseSrv.deleteCourse(course.id, this.courses);
            }
            sub.unsubscribe();
        });
    }

}
