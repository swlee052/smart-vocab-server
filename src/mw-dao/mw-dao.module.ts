import { Module } from '@nestjs/common';
import { MwDaoService } from './mw-dao.service';

@Module({
  providers: [MwDaoService],
})
export class MwDaoModule {}
