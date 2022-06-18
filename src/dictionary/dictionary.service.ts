import { Injectable } from '@nestjs/common';
import { MwDaoService } from 'src/mw-dao/mw-dao.service';

@Injectable()
export class DictionaryService {
  getDefinitionList(word: string) {
    return this.dictionary.getDefinitionList(word);
  }
}
