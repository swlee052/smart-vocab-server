import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CardsService } from '../../app/services/cards.service';
import { CreateCardDto } from '../../dto/create-card.dto';
import { UpdateCardDto } from '../../dto/update-card.dto';
import { ContentType } from './constants';

@Controller('cards')
export class VocabCardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  create(
    @Param('type') type: ContentType,
    @Body() createCardDto: CreateCardDto,
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardsService.update(+id, updateCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardsService.remove(+id);
  }
}
