/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class Userservice {
    
  getAll(): string {
    return `Jean, Lucas, Edu, Leo`;
  }
  getOne(id): string {
    return `User ${id}`;
}
  postUser(body): string {
    const {name} = body
    return `User with name ${name} created`;
}
  putUser({id, body}): string {
    const { name } = body
    console.log(name)
    return `user of the id: ${id} and name: ${name} update  with sucess`;
}
  deleteUser(id): string {
    return `User ${id} was deleted`;
}
}
