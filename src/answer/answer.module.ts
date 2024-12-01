import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { AnswerRepository } from './answer.repository';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [AnswerController],
  providers: [AnswerService, AnswerRepository, PrismaService],
})
export class AnswerModule {}
