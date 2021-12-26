import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Question } from 'src/question/entities/question.entity';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Survey } from './entities/survey.entity';

@Injectable()
export class SurveyService {
  constructor() {}

  create(createSurveyDto: CreateSurveyDto) {
    const questions: Question[] = [];
    for (const questionID of createSurveyDto.questions) {
      // questions.push(this.questionRepository.getReference(questionID));
    }
    const survey = new Survey();
    // survey.questions = questions;
    return 'This action adds a new survey';
  }

  findAll() {
    return `This action returns all survey`;
  }

  findOne(id: number) {
    return `This action returns a #${id} survey`;
  }

  update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return `This action updates a #${id} survey`;
  }

  remove(id: number) {
    return `This action removes a #${id} survey`;
  }
}
