import {
  CacheModule,
  commonConfig,
  GatewayMiddleware,
  JwtStrategy,
} from '@the-tech-nerds/common-services';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RouterModule } from 'nest-router';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import configuration from './config/configuration';
import ormconfig = require('./database');
import { routes } from './route';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration, commonConfig],
    }),
    TypeOrmModule.forRoot(ormconfig),
    RouterModule.forRoutes(routes),
    CacheModule,
    OrderModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('jwt_secret'),
        signOptions: { expiresIn: configService.get('jwt_expiration') },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GatewayMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
