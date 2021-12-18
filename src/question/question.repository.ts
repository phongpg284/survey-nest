import { EntityRepository, Repository } from '@mikro-orm/core';
import { Question } from './entities/Question.entity';

@Repository(Question)
export class QuestionRepository extends EntityRepository<Question> {}
