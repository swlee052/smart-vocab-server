import { Controller, Get } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { Definition } from './entities/wordData';

@Controller('dictionary')
export class DictionaryController {
  constructor(private readonly dictService: DictionaryService) {}

  @Get()
  public async getDefinitionList(word: string): Promise<Definition[]> {
    return this.dictService.getDefinitionList(word);
  }
}
