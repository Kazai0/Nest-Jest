/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Userservice } from './user.service';


@Controller('user')
export class UserController {
    constructor(private readonly userService: Userservice){}

  @Get()
  getAll(): string{
      return this.userService.getAll()
  };

  @Get(':id')
  getOne(@Param() param): string{
      return this.userService.getOne(param.id)
  };

  @Post()
  createUser(@Body() user): string{
      return this.userService.postUser(user)
  }

  @Put(':id')
  changeUser(@Param() param, @Body() user): string{
      return this.userService.putUser({id: param.id, body: user})
  }

  @Delete(':id')
  deleteUser(@Param() param): string{
      return this.userService.deleteUser(param.id)
  }
}