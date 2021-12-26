import { Collection, Entity, ManyToMany, ManyToOne, Property } from '@mikro-orm/core';
import { Survey } from '../../survey/entities/survey.entity';
import { Question } from '../../question/entities/question.entity';
import { User } from '../../user/entities/user.entity';
import { BaseEntity } from '../../utils/BaseEntity';

@Entity()
export class Record extends BaseEntity {
  @Property()
  totalQuestion!: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Survey)
  survey: Survey;

  @ManyToMany({ entity: () => Question, owner: true })
  questions = new Collection<Question>(this);
}
