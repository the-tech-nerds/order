import { Controller, Get } from '@nestjs/common';
import { StudentService } from '../service/student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly appService: StudentService) {}

  @Get()
  getHello() {
    return this.appService.create();
  }

  @Get('/all')
  getAll() {
    return this.appService.getAll();
  }
}
