import { IsString } from 'class-validator';

export class CreateVocabCardDto {
  @IsString()
  word: string;
}
