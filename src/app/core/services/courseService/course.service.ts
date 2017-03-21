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
    courses: Course[] = [];

    constructor(private http: Http) {

    };

    // public getList(): Observable<Course[]> {
    //     //return courses;
    //
    //     return this.http.get(this.url)
    //         .map((response: Response) =>
    //             response.json() as Course[]);
    // }
    public getList(): Course[] {
        //return courses;

        this.http.get(this.url)
            .map((response: Response) =>
                response.json() as Course[])
            .subscribe(data => this.courses.push(...data));
        return this.courses;
    }

    public addCourse(): Course {
        const newCourse = new Course('newid', 'newtitle', '', 9, 'desc');
        this.courses.push(newCourse);
        return newCourse;
    }

    public getCourseById(id: string | number): Course {
        return courses.find(course => course.id === id);
    }

    public updateCourse(id: string | number): void {

    }

    public deleteCourse(index: number): void {
        // const index = this.courses.findIndex(course => {
        //     return course.id === id;
        // });
        // if (isNumber(index)) {
            this.courses.splice(index, 1);
        //}

    }
}