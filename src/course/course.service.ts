import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

    getAllCourses():string{return 'Pretend there is a nice list of all courses here-get';}
    getCourseById(id:string):string{return `Pretend this returns a course with ID ${id}-get`;}
    createCourse():string{ return 'Pretend this creates a course-post';}
    updateCourse(id:string):string { return `pretend this updates a course fully with ID ${id}-put`;}
    patchCourse(id:string):string { return `pretend this updates a course partially with ID ${id}-patch`;}
    deleteCourse(id:string):string { return `pretend this deletes a course with ID ${id}`;}
}
