import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AuthService {
  constructor(private readonly dbService: DbService) { }
  async create(createAuthDto: Prisma.UserCreateInput) {
    return this.dbService.user.create({
      data: createAuthDto
    })
  }

  async findAll() {
    return this.dbService.user.findMany()
  }

  async findOne(id: number) {
    return this.dbService.user.findMany({
      where: {
        id
      }
    })
  }


  async update(id: number, updateAuthDto: Prisma.UserUpdateInput) {
    return `This action updates a #${id} auth`;
  }

  async remove(id: number) {
    return this.dbService.user.delete({
      where: {
        id
      }
    })
  }
}
