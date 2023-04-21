import { Module } from '@nestjs/common';
import { CommitModule } from './commit/commit.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CommitModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule { }
