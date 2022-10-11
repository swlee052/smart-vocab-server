import { IsUUID } from 'class-validator';

export abstract class Entity {
  @IsUUID()
  readonly id: any;

  constructor(id?: any) {
    this.id = id;
  }
}
