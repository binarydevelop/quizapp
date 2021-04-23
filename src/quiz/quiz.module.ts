import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  quizEntity } from './entity/quiz.entity';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
  imports: [TypeOrmModule.forFeature([quizEntity])],
  controllers: [QuizController],
  providers: [QuizService]
})
export class QuizModule {}
