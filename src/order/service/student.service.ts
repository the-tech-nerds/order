import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRep: Repository<Student>,
  ) {}

  async create(): Promise<any> {
    const user = new Student();
    user.Country = 'Timber';
    user.Name = 'Saw';
    return this.studentRep.save(user);
  }

  async getAll(): Promise<any> {
    const x = await this.studentRep.find();
    console.log(x);
    return x;
  }
}
