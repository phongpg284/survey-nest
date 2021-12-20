import {
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  Property,
} from '@mikro-orm/core';
import { Question } from '../../question/entities/question.entity';
import { User } from '../../user/entities/user.entity';
import { BaseEntity } from '../../utils/BaseEntity';

@Entity()
export class Survey extends BaseEntity {
  @Property()
  totalQuestion!: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToMany({ entity: () => Question, owner: true })
  questions = new Collection<Question>(this);
}
