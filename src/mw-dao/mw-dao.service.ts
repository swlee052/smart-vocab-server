import { Injectable } from '@nestjs/common';
import { Definition } from '../dictionary/entities/wordData';
import { MERRIAM_WEBSTER_API_KEY } from '../mw-dao/mw-dao.config';
import fetch from 'node-fetch';

@Injectable()
export class MwDaoService {
  private getUrl(word: string): string {
    return `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${MERRIAM_WEBSTER_API_KEY}`;
  }

  private async fetchJson(word: string): Promise<any> {
    const url: string = this.getUrl(word);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Status: ${response.status}. Fetch was unsuccessful.`);
    }
    const json = response.json();

    return json;
  }

  public async getDefinitionList(word: string): Promise<Definition[]> {
    const json: Array<any> = await this.fetchJson(word);
    const definitionList: Definition[] = [];

    for (let i = 0; i < json.length; i++) {
      if (json[i].hasOwnProperty('hom')) {
        const Definition: Definition = {
          definition: json[i].shortdef,
          functionalLabel: json[i].fl,
          exampleSentences: json[i].hwi.prs,
        };
        definitionList.push(Definition);
        continue;
      }
      break;
    }
    console.log(definitionList);
    return definitionList;
  }
}
