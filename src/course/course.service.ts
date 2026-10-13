import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

    getAllCourses():string{return 'Pretend there is a nice list of all courses here-get';}
    getCourseById(id:string):string{return `Pretend this returns a course with ID ${id}-get`;}
    createCourse(data:any):string{
        let {title,code,lab} = data;
        return `Pretend this creates a course with title ${title}, code ${code} and lab included ${lab}-post`;
    }
    updateCourse(id:string):string { return `pretend this updates a course fully with ID ${id}-put`;}
    patchCourse(id:string, params:any):string { 
        //let status: string= params.status;
        //let capacity:string=params.capacity;
        //or by destructuring:
        let {status, capacity}=params;
        return `pretend this updates a course partially with ID ${id},status ${status} and capacity ${capacity}-patch`;
    }
    deleteCourse(id:string):string { return `pretend this deletes a course with ID ${id}`;}
}
