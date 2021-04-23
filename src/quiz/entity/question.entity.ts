import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { quizEntity } from "./quiz.entity";

@Entity('question')
export class question extends BaseEntity{
    @PrimaryGeneratedColumn()
    question_id : number;

    @Column({
        nullable: false,
    })
    question_string: string;

    @ManyToOne(() => quizEntity, quiz => quiz.questions)
    quiz: quizEntity
}