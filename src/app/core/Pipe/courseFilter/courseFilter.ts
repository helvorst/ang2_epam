import {Pipe, PipeTransform} from "@angular/core";
import {Course} from "../../class/course.class";


@Pipe({name: 'courseFilter'})
export class CourseFilter implements PipeTransform {
    transform(courses: Course[], filter: string) {
        return courses.filter(course => course.title.indexOf(filter) > -1)
    }
}