import { Module } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { MwDaoModule } from 'src/mw-dao/mw-dao.module';
import { DictionaryController } from './dictionary.controller';

@Module({
  imports: [MwDaoModule],
  controllers: [DictionaryController],
  providers: [DictionaryService],
})
export class DictionaryModule {}
