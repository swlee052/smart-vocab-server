import { IsNumber } from 'class-validator';
import { Entity } from '../../../common/domain/entity.interface';

export class Card extends Entity {
  @IsNumber()
  private priority: number;
  private content: any;
}
