import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { AnswerRepository } from './answer.repository';

@Injectable()
export class AnswerService {
  constructor(private readonly answerRepository: AnswerRepository) {}
  create(createAnswerDto: CreateAnswerDto) {
    //return `This action adds a new answer ${JSON.stringify(createAnswerDto)}`;
    return this.answerRepository.create(createAnswerDto);
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
