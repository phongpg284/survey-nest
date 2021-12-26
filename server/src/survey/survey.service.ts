import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository, logger } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Question } from 'src/question/entities/question.entity';
import { QuestionService } from 'src/question/question.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Survey } from './entities/survey.entity';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private readonly surveyRepository: EntityRepository<Survey>,
    private questionService: QuestionService,
  ) {}

  async create(createSurveyDto: CreateSurveyDto) {
    const survey = new Survey();
    for (const questionID of createSurveyDto.questions) {
      const question = await this.questionService.findOne(questionID);
      if (typeof question === 'string') return question;
      survey.questions.add(question);
    }
    survey.totalQuestion = createSurveyDto.questions.length;
    this.surveyRepository.persistAndFlush(survey);
    return survey;
  }

  async findAll() {
    try {
      const surveys = await this.surveyRepository.find({}, ['questions']);
      return surveys;
    } catch (error) {
      logger.error(error);
      throw new Error(error);
    }
  }

  async findOne(id: number) {
    const survey = await this.surveyRepository.findOne({ id }, ['questions']);
    if (!survey) return 'No survey found!';
    return survey;
  }

  async update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return `This action updates a #${id} survey`;
  }

  async remove(id: number) {
    return `This action removes a #${id} survey`;
  }
}
