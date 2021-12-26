import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from '../../utils/BaseEntity';

@Entity()
export class Question extends BaseEntity {
  @Property()
  title!: string;

  @Property()
  options!: [string];

  @Property()
  answer!: [number];

  @Property({ nullable: true })
  type?: string;

  @Property()
  point!: number;

  @Property()
  isMultiple!: boolean;

  @Property({ nullable: true })
  userAnswer?: [number];
}
