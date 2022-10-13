import { Entity } from '../../../common/domain/entity.interface';

export class Card extends Entity {
  private priority: number;
  private title: string;
  private content: any;
}
