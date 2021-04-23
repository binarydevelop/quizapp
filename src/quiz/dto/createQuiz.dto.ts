import { IsNotEmpty, MinLength } from "class-validator";
import { category } from "../interface/category.interface";

export class createQuizDto {
    @IsNotEmpty()
    @MinLength(12)
    title: string

    @IsNotEmpty()
    categories: category[];
}