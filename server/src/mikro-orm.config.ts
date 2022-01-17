import { Options } from '@mikro-orm/core';
// import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Logger } from '@nestjs/common';

const logger = new Logger('MikroORM');

const config: Options = {
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  user: 'root',
  password: 'password',
  dbName: 'surveys',
  entities: ['dist/**/*.entity.js'],
  // entities: ['src/**/*.entity.ts'],
  entitiesTs: ['src/**/*.entity.ts'],
  logger: logger.log.bind(logger),

  debug: true,
  //   highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
};

export default config;
