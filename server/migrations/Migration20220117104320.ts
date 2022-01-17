import { Migration } from '@mikro-orm/migrations';

export class Migration20220117104320 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `user` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `first_name` varchar(255) not null, `last_name` varchar(255) not null, `username` varchar(255) not null, `password` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `survey` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `total_question` int(11) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `record` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `total_question` int(11) not null, `user_id` int(11) unsigned not null, `survey_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `record` add index `record_user_id_index`(`user_id`);');
    this.addSql('alter table `record` add index `record_survey_id_index`(`survey_id`);');

    this.addSql('create table `question` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `title` varchar(255) not null, `options` json not null, `answer` json not null, `type` varchar(255) null, `point` int(11) not null, `is_multiple` tinyint(1) not null, `user_answer` json null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `record_questions` (`record_id` int(11) unsigned not null, `question_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `record_questions` add index `record_questions_record_id_index`(`record_id`);');
    this.addSql('alter table `record_questions` add index `record_questions_question_id_index`(`question_id`);');
    this.addSql('alter table `record_questions` add primary key `record_questions_pkey`(`record_id`, `question_id`);');

    this.addSql('create table `survey_questions` (`survey_id` int(11) unsigned not null, `question_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `survey_questions` add index `survey_questions_survey_id_index`(`survey_id`);');
    this.addSql('alter table `survey_questions` add index `survey_questions_question_id_index`(`question_id`);');
    this.addSql('alter table `survey_questions` add primary key `survey_questions_pkey`(`survey_id`, `question_id`);');

    this.addSql('alter table `record` add constraint `record_user_id_foreign` foreign key (`user_id`) references `user` (`id`) on update cascade;');
    this.addSql('alter table `record` add constraint `record_survey_id_foreign` foreign key (`survey_id`) references `survey` (`id`) on update cascade;');

    this.addSql('alter table `record_questions` add constraint `record_questions_record_id_foreign` foreign key (`record_id`) references `record` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `record_questions` add constraint `record_questions_question_id_foreign` foreign key (`question_id`) references `question` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `survey_questions` add constraint `survey_questions_survey_id_foreign` foreign key (`survey_id`) references `survey` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `survey_questions` add constraint `survey_questions_question_id_foreign` foreign key (`question_id`) references `question` (`id`) on update cascade on delete cascade;');
  }

}
