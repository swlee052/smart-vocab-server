import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CardsService } from '../../app/services/cards.service';
import { CreateVocabCardDto } from '../../dto/create-vocab-card.dto';
import { ContentType } from './constants';

@Controller('cards')
export class VocabCardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  create(
    @Param('type') type: ContentType,
    @Body() createCardDto: CreateVocabCardDto,
  ) {
    return this.cardsService.create(createCardDto);
  }

  @Get()
  findAll() {
    return this.cardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardsService.remove(+id);
  }
}
