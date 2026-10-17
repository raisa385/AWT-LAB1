import { IsNotEmpty, IsNumber, IsString, Max, Min, IsOptional} from 'class-validator'
import {Type} from 'class-transformer'

export class createCourseDTO{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    code:string;

    @IsString()
    @IsNotEmpty()
    instructor:string;

    @IsNumber()
    @Max(6)
    @Min(1)
    @Type(()=>Number)
    credits:number;

    @IsString()
    @IsOptional()
    description:string;
}