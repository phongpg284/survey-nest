import 'reflect-metadata';
import { Collection, OneToMany, Property } from '@mikro-orm/core';
import { Survey } from 'src/survey/entities/survey.entity';
import { BaseEntity } from 'src/utils/BaseEntity';

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
