import { Injectable, Inject } from '@nestjs/common';
import { Card } from '../../domain/aggregates/card.entity';
import { ICardRepository } from '../../domain/repositories/vocab-card-repository.interface';
import { MwDao } from './mw/mw.dao';
import { IDictionaryDao } from './vocab-card.factory';

@Injectable()
export class CardRepoImpl implements ICardRepository {
  constructor(@Inject(MwDao) private dictDao: IDictionaryDao) {}
  count(): Promise<number> {
    throw new Error('Method not implemented.');
  }

  saveAndFlush(vocabCard: Card) {
    throw new Error('Method not implemented.');
  }
}
