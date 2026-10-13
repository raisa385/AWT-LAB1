import { Controller, Get, Param, Post, Put, Patch, Delete, Query, Body } from '@nestjs/common';
import {CourseService} from './course.service.js';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService){}

    @Get()
    getAllCourses():string{ return this.courseService.getAllCourses();}

    @Get(':id')
    getCourseById(@Param('id') id:string):string{ return this.courseService.getCourseById(id);}

    @Post()
    createCourse(@Body() data:any):string{return this.courseService.createCourse(data);}

    @Put(':id')
    updateCourse(@Param('id') id:string):string{return this.courseService.updateCourse(id);}

    @Patch(':id')
    patchCourse(@Param('id') id:string, @Query() params: any):string{ return this.courseService.patchCourse(id, params);}

    @Delete(':id')
    deleteCourse(@Param('id') id:string):string{ return this.courseService.deleteCourse(id);}
}
