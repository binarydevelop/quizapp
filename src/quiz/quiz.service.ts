import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {

    async getAllquiz(){
        return await 'working';
    }

    async createQuiz(title, categories){
        return await `${title} + ${categories}`
    }

}
