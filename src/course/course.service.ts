import { Injectable } from '@nestjs/common';
import {createCourseDTO} from './create-course.dto.js'
import { updateCourseDTO } from './update-course.dto.js';
import 'multer'

@Injectable()
export class CourseService {
    getAllCourses(){
        return {message: 'get all courses', data:[]};
    }
    getCourseById(id:string){
        return{message:'course fetched',id:id};
    }
    createCourse(dto: createCourseDTO){
        return {message: 'course created',data:dto};
    }
    updateCourse(id:string, dto:updateCourseDTO){ 
        return {message: 'course updated',id:id,data:dto};
    }
    patchCourse(id:string, dto:updateCourseDTO){ 
        return {message:'course patched', id:id, updatedFields: Object.keys(dto)};
    }
    deleteCourse(id:string){
        return {message:'course deleted',id:id};
    }

    uploadCourseMaterial(id:string, file: Express.Multer.File)
    {
        return{
            message: 'material uploaded',
            id:id,
            filename: file.filename,
            path: file.path
        }
    }
}
