import { Question } from 'src/question/entities/question.entity';

export class CreateRecordDto {
  totalQuestion: number;
  questions: Question[];
}
