import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DictionaryModule } from './dictionary/dictionary.module';

@Module({
  imports: [UsersModule, DictionaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
