import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository, logger } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Survey } from './entities/survey.entity';

export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private readonly surveyRepository: EntityRepository<Survey>,
  ) {}

  async create(createSurveyDto: CreateSurveyDto) {
    const survey = new Survey();
    return 'This action adds a new survey';
  }

  async findAll(): Promise<Survey[]> {
    let survey: Survey[];
    try {
      survey = await this.surveyRepository.find({});
    } catch (error) {
      logger.error(error);
    }
    return survey;
  }

  async findOne(id: number) {
    const survey = await this.surveyRepository.findOne({ id });
    if (!survey) return `Survey ${id} not found`;
    return survey;
  }

  async update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return `This action updates a #${id} survey`;
  }

  remove(id: number) {
    return `This action removes a #${id} survey`;
  }
}
