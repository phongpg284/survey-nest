import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository, logger } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { Record } from './entities/record.entity';

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(Record)
    private readonly recordRepository: EntityRepository<Record>,
  ) {}

  async create(createRecordDto: CreateRecordDto) {
    const record = new Record();
    return 'This action adds a new record';
  }

  async findAll(): Promise<Record[]> {
    let record: Record[];
    try {
      record = await this.recordRepository.find({});
    } catch (error) {
      logger.error(error);
    }
    return record;
  }

  async findOne(id: number) {
    const record = await this.recordRepository.findOne({ id });
    if (!record) return `record ${id} not found`;
    return record;
  }

  async update(id: number, updateRecordDto: UpdateRecordDto) {
    return `This action updates a #${id} record`;
  }

  remove(id: number) {
    return `This action removes a #${id} record`;
  }
}
