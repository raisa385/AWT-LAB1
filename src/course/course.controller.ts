import { Controller, Get, Param, Post, Put, Patch, Delete, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import {CourseService} from './course.service.js';
import { createCourseDTO } from './create-course.dto.js';
import { updateCourseDTO } from './update-course.dto.js';
import 'multer'
import {FileInterceptor} from '@nestjs/platform-express'

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService){}

    @Get()
    getAllCourses(){ return this.courseService.getAllCourses();}

    @Get(':id')
    getCourseById(@Param('id') id:string){ return this.courseService.getCourseById(id);}

    @Post()
    createCourse(@Body() data:createCourseDTO){return this.courseService.createCourse(data);}

    @Put(':id')
    updateCourse(@Param('id') id:string, update:updateCourseDTO){return this.courseService.updateCourse(id,updateCourseDTO);}

    @Patch(':id')
    patchCourse(@Param('id') id:string, @Body() update:updateCourseDTO){ return this.courseService.patchCourse(id, update);}

    @Delete(':id')
    deleteCourse(@Param('id') id:string){ return this.courseService.deleteCourse(id);}

    @Post(':id/upload')
    @UseInterceptors(
        FileInterceptor('file',{limits:{fileSize:2*1024*1024},fileFilter:(req,file,callback)=>{
            if(!file.mimetype.match(/\.(jpg|jpeg|png|pdf)$/)){
                return callback(new Error('only jpg, peg, pdf or png files allowed'),false);
            }
            callback(null,true);
        }})
    )

    uploadCourseMaterial(@Param('id') id: string, @UploadedFile() file:Express.Multer.File){
        if(!file){
            throw new Error('please upload file for course material');
        }
        return this.courseService.uploadCourseMaterial(id,file);
    }
}
