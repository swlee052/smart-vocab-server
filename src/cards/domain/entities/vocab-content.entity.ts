import { Entity } from '../../../common/domain/entity.interface';
import { Definition } from '../value-objects/definition.value-object';

export class VocabContent extends Entity {
  pronunciation?: string;
  definitionList: Definition[];
}
