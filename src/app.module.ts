import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { Userservice } from './user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, Userservice],
})
export class AppModule {}
