import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { title } from 'node:process';
import { Connection, getConnection } from 'typeorm';
import { question } from './entity/question.entity';
import { quizEntity } from './entity/quiz.entity';

@Injectable()
export class QuizService {
constructor(private connection: Connection){}
    private logger = new Logger('Quiz Service');
    async getAllquiz(){
        return await this.connection.getRepository(quizEntity).find();
    }

    async createQuiz(title, categories){
        const quizRepo = await this.connection.getRepository(quizEntity)
        .create({title})
        .save();
        return quizRepo;
    }

    async addQuestions(quizId ,questionString){
        try{
            const quizObject =  await quizEntity.findOne(quizId);
            const newQuestion = new question();
            newQuestion.question_string = questionString;
            newQuestion.quiz = quizObject;
            newQuestion.save();
            quizObject.questions = quizObject?.questions?? []; 
            quizObject.questions.push(newQuestion);
            quizObject.save();
            return ({
                     message: 'Question added to Quiz',
                     status: HttpStatus.CREATED
                    })
        }
        catch(err){
            this.logger.error(err, err.detail);
            return new HttpException('Failed adding Question to Quiz.', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    
}

   