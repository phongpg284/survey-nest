import 'reflect-metadata';
import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core';
import { Survey } from '../../survey/entities/survey.entity';
import { BaseEntity } from '../../utils/BaseEntity';

@Entity()
export class User extends BaseEntity {
  @Property()
  name!: string;

  @Property()
  username!: string;

  @Property()
  password!: string;

  @OneToMany(() => Survey, (survey) => survey.user)
  surveys = new Collection<Survey>(this);
}
