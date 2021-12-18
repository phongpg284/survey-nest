import { Question } from 'src/question/entities/question.entity';

export class CreateSurveyDto {
  totalQuestion: number;
  questions: Question[];
}
