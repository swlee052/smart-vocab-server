import { Injectable } from '@nestjs/common';
import { Repository } from '../../../common/domain/repository.interface';
import { Card } from '../aggregates/card.entity';

@Injectable()
export class CardRepository implements Repository {
  private cards: Card[];

  create(card: Card) {
  }

  exists(t: any): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(t: any): Promise<void> {
    throw new Error('Method not implemented.');
  }
  save(t: any): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
