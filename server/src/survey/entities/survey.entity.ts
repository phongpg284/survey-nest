import { Collection, Entity, ManyToMany, OneToMany, Property } from '@mikro-orm/core';
import { Question } from '../../question/entities/question.entity';
import { Record } from '../../record/entities/record.entity';
import { BaseEntity } from '../../utils/BaseEntity';

@Entity()
export class Survey extends BaseEntity {
  @Property()
  totalQuestion!: number;

  @OneToMany(() => Record, (record) => record.survey)
  record = new Collection<Record>(this);

  @ManyToMany({ entity: () => Question, owner: true })
  questions = new Collection<Question>(this);
}
