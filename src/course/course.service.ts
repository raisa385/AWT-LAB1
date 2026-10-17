import { Injectable } from '@nestjs/common';
import 

@Injectable()
export class CourseService {
    private courses=["AWT"]

    getAllCourses(){
        return {message: 'get all courses', data: this.courses};
    }
    getCourseById(id:string){
        return{message:'course fetched',id:id};
    }
    createCourse(dto: createCourseDTO){
        let {title,code,lab} = data;
        return `Pretend this creates a course with title ${title}, code ${code} and lab included ${lab}-post`;
    }
    updateCourse(id:string):string { 
        return `pretend this updates a course fully with ID ${id}-put`;
    }
    patchCourse(id:string, params:any):string { 
        //let status: string= params.status;
        //let capacity:string=params.capacity;
        //or by destructuring:
        let {status, capacity}=params;
        return `pretend this updates a course partially with ID ${id},status ${status} and capacity ${capacity}-patch`;
    }
    deleteCourse(id:string):string { return `pretend this deletes a course with ID ${id}`;}
}
