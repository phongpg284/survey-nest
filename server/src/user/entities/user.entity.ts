import 'reflect-metadata';
import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core';
import { BaseEntity } from '../../utils/BaseEntity';
import { Record } from '../../record/entities/record.entity';

@Entity()
export class User extends BaseEntity {
  @Property()
  firstName!: string;

  @Property()
  lastName!: string;

  @Property()
  username!: string;

  @Property()
  password!: string;

  @OneToMany(() => Record, (record) => record.user)
  records = new Collection<Record>(this);
}
