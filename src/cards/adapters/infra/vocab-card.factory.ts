import { Injectable, Inject } from '@nestjs/common';
import { Card } from '../../domain/aggregates/card.entity';
import { VocabContent } from '../../domain/entities/vocab-content.entity';
import { ICardFactory } from '../../domain/factories/vocab-card.factory';
import { ICardRepository } from '../../domain/repositories/vocab-card-repository.interface';
import { CardRepoImpl } from './card.repository';
import { MwDao } from './mw/mw.dao';

export interface IDictionaryDao {
  getVocabContent(): Promise<VocabContent>;
}

@Injectable()
export class VocabCardFactoryImpl implements ICardFactory {
  constructor(
    @Inject(MwDao) private dictDao: IDictionaryDao,
    @Inject(CardRepoImpl) private cardRepo: ICardRepository,
  ) {}

  async createCard(): Promise<Card> {
    const vocabContent: VocabContent = await this.dictDao.getVocabContent();
    const cardCount: number = await this.cardRepo.count();
    const newCard: Card = new Card()
    throw new Error('Method not implemented.');
  }
}
