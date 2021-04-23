import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { createQuizDto } from './dto/createQuiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService){}

  @Get('all')
  async getAllquiz(){
    return await this.quizService.getAllquiz();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() createQuizDto: createQuizDto ){
      const { title, categories} =  createQuizDto
      return await this.quizService.createQuiz(title, categories);
  }
}
