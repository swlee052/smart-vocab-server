import { Module } from '@nestjs/common';
import { CardsService } from './app/services/cards.service';
import { VocabCardsController } from './adapters/controllers/vocab-cards.controller';

@Module({
  controllers: [VocabCardsController],
  providers: [CardsService],
})
export class CardsModule {}
