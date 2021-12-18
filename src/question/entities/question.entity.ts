import { Property } from '@mikro-orm/core';
import { BaseEntity } from 'src/utils/BaseEntity';

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
}
