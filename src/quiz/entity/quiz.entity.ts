import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('quiz')
export class quizEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

}