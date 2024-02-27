import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    return await this.postRepository.save(createPostDto);
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: number) {
    return this.postRepository.findOneBy({
      id: id
    })
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postRepository.update(id, updatePostDto);
  }

  remove(id: number) {
    return this.postRepository.delete(id);
  }
}
