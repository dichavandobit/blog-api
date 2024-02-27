import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostRepository } from './posts.repositoty';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostsController],
  providers: [PostRepository, PostsService],
  exports: [PostsService, TypeOrmModule],
})
export class PostsModule {}
