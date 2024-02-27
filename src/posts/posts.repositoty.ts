import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

export class PostRepository extends Repository<Post> {
    public async findAll(): Promise<Post[]> {
        return this.find();
      }
    
      public async findById(id: number): Promise<Post | null> {
        return this.findOneBy({ id: id });
      }
    
      public async store(user: CreatePostDto): Promise<Post> {
        const newUser = this.create(user);
        return this.save(newUser);
      }
    
      public async updateOne(
        id: number,
        updateUserDto: UpdatePostDto,
      ): Promise<Post | undefined> {
        const user = await this.findById(id);
        if (!user) return undefined;
        Object.assign(user, updateUserDto);
        return this.save(user);
      }
    
      public async destroy(id: number): Promise<void> {
        await this.delete(id);
      }
}