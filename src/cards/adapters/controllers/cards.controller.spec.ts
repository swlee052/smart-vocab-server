import { Test, TestingModule } from '@nestjs/testing';
import { VocabCardsController } from './vocab-cards.controller';
import { CardsService } from '../../app/services/cards.service';

describe('CardsController', () => {
  let controller: VocabCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VocabCardsController],
      providers: [CardsService],
    }).compile();

    controller = module.get<VocabCardsController>(VocabCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
