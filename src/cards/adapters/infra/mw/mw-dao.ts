import { Injectable } from '@nestjs/common';
import { yaml } from 'js-yaml';
import fs from 'fs';
import fetch from 'node-fetch';

@Injectable()
export class MwDao {
  getUrl(word: string): string {
    const MERRIAM_WEBSTER_API_KEY: string = yaml.load(
      fs.readFileSync('../config.yml', 'utf8'),
    ).MERRIAM_WEBSTER_API_KEY;
    return `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${MERRIAM_WEBSTER_API_KEY}`;
  }

  async fetchJson(word: string): Promise<any> {
    const url: string = this.getUrl(word);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Status: ${response.status}. Fetch was unsuccessful.`);
    }
    const json = response.json();

    return json;
  }

  async getDefinitionList(word: string): Promise<Definition[]> {
    const json: Array<any> = await this.fetchJson(word);
    const definitionList = [];

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
    return definitionList;
  }
}
