import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiResponseService } from '@the-tech-nerds/common-services';
import { StudentController } from './controller/student.controller';
import { Student } from './entities/student.entity';
import { StudentService } from './service/student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [ApiResponseService, StudentService],
  controllers: [StudentController],
  exports: [],
})
export class OrderModule {}
