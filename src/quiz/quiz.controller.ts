import { Body, Controller, Get, HttpStatus, Logger, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { createQuizDto } from './dto/createQuiz.dto';
import { quizEntity } from './entity/quiz.entity';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService){}
  private logger: Logger =  new Logger();

  @Get('all')
  async getAllquiz():Promise<quizEntity[]> {
    return await this.quizService.getAllquiz();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() createQuizDto: createQuizDto ): Promise<any> {
    try{
      const { title, categories} =  createQuizDto;
      return await this.quizService.createQuiz(title, categories);
    }
    catch(err){
      this.logger.error(err, err.detail);
      return({
              message: 'Failed creating Quiz.',
              status: HttpStatus.BAD_REQUEST
            })
    }
  }


  @Post('question/add/:quizId')
  async addQuestions(@Param('quizId') quizId,
                     @Body('question') questionString ) {
   return this.quizService.addQuestions(quizId, questionString );
  }
}
