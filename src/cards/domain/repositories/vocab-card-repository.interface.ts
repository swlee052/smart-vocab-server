import { Card } from '../aggregates/card.entity';

export interface ICardRepository {
  count(): Promise<number>;
  saveAndFlush(card: Card): Promise<void>;
}
