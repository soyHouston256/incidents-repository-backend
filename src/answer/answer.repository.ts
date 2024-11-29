import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Injectable()
export class AnswerRepository {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateAnswerDto) {
    return this.prisma.answer.create({
      data: {
        region: dto.region,
        province: dto.province,
        district: dto.district,
        gender: dto.gender,
        kindBusiness: dto.kindBusiness,
        explain: dto.explain,
        date: dto.date,
      },
    });
  }
}
