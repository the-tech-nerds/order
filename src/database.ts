import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormconfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  host: process.env.MONGO_HOST || 'orderdb',
  url: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DATABASE}:${process.env.MONGO_PORT}/order?authSource=admin&readPreference=primary&gssapiServiceName=mongodb`,
  useNewUrlParser: true,
  maxQueryExecutionTime: 10000,
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],

  // We are using migrations, synchronize should be set to false.
  synchronize: true,

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,
  logging: true,
  logger: 'file',

  // Allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev.
  migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
  cli: {
    // Location of migration should be inside src folder
    // to be compiled into dist/ folder.
    migrationsDir: 'src/migrations',
  },
  cache: {
    type: 'redis',
    duration: 1000,
    options: {
      host: 'redis',
      port: 6379,
    },
  },
};
export = ormconfig;
