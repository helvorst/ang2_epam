/**
 * Created by Elena_Barantseva on 3/16/2017.
 */
import {Injectable} from '@angular/core';
import {Course} from "../../class/course.class";
import {courses} from './mockList';
import {isNumber} from "util";

@Injectable()
export class CourseService {
    constructor() {

    };

    public getList(): Course[] {
        return courses;
    }

    public createCourse(): Course {
        return new Course();
    }

    public getCourseById(id: string | number): Course {
        return courses.find(course => course.id === id);
    }

    public updateCourse(id: string | number): void {

    }

    public deleteCourse(id: string | number): void {
        const index = courses.findIndex(course => {
            return course.id === id;
        });
        if (isNumber(index)) {
            courses.splice(index, 1);
        }
    }
}