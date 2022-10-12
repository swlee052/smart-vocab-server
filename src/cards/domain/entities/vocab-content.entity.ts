import { Entity } from '../../../common/domain/entity.interface';
import { Definition } from '../value-objects/definition.value-object';

export class VocabContent extends Entity {
  word: string;
  pronunciation?: string;
  definitionList: Definition[];
}
