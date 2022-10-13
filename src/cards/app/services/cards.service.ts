import { Injectable } from '@nestjs/common';
import { CreateVocabCardDto } from '../../dto/create-vocab-card.dto';

@Injectable()
export class CardsService {
  create(createCardDto: CreateVocabCardDto) {
    return 'This action adds a new card';
  }

  findAll() {
    return `This action returns all cards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
