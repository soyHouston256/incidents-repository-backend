import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';

@Injectable()
export class AnswerService {
  create(createAnswerDto: CreateAnswerDto) {
    return `This action adds a new answer ${JSON.stringify(createAnswerDto)}`;
  }

  findAll() {
    return `This action returns all answer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} answer`;
  }

  update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return `This action updates a #${id} answer ${updateAnswerDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} answer`;
  }
}
