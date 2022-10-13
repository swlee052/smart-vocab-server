import { Card } from '../aggregates/card.entity';

export interface ICardFactory {
  createCard(): Promise<Card>;
}
