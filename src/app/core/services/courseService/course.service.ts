/**
 * Created by Elena_Barantseva on 3/16/2017.
 */
import {Injectable} from '@angular/core';
import {Course} from "../../class/course.class";
import {courses} from './mockList';
import {isNumber} from "util";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class CourseService {
    private url: string = 'http://localhost:3001/courses';
    courses: Course[];

    constructor(private http: Http) {

    };

    public getList(): Observable<Course[]> {
        //return courses;
        return this.http.get(this.url)
            .map((response: Response) =>
                response.json() as Course[]);
    }

    public createCourse(): Course {
        return new Course();
    }

    public getCourseById(id: string | number): Course {
        return courses.find(course => course.id === id);
    }

    public updateCourse(id: string | number): void {

    }

    public deleteCourse(id: string | number, courses: Course[]): void {
        const index = courses.findIndex(course => {
            return course.id === id;
        });
        if (isNumber(index)) {
            courses.splice(index, 1);
        }
        //courses =
            //ourses.filter((course: Course) => course.id !== id)
    }
}