import {
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  Property,
} from '@mikro-orm/core';
import { Question } from 'src/question/entities/question.entity';
import { User } from 'src/user/entities/user.entity';
import { BaseEntity } from 'src/utils/BaseEntity';

@Entity()
export class Survey extends BaseEntity {
  @Property()
  totalQuestion!: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToMany({ entity: () => Question, owner: true })
  questions = new Collection<Question>(this);
}
