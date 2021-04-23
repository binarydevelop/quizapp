import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { question } from "./question.entity";

@Entity('quiz')
export class quizEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false,
        unique: true
    })
    title: string

    @OneToMany(() => question, question => question.quiz)
    questions: question[];

}