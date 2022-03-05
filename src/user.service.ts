/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid'
const date = []

@Injectable()
export class Userservice {

  getAll(): any {

    return date;
  }
  getOne(id): any {

    const obj = date.filter(x =>(x.id === id))
    return obj;
}
  postUser(body): string {

    const {name, age, height} = body
    const object = {
      id: uuidv4(),
      name: name,
      age: age,
      height: height
    }

    date.push(object)
    return `User with name ${name} created`;
}
  putUser({id, body}): string {

    const { name, age, height } = body

    console.log(name)
    date.forEach(users => {
      if(users.id === id){
        users.name = name? name: null
        users.age = age? age: null
        users.height = height? height: null
      }
    })

    
    return `user of the id: ${id} and name: ${name} update  with sucess`;
}

  deleteUser(id): string {

    const teste = date.map((element, i) => {
      
      const indexOf = i
      if(element.id == id){
        return indexOf
      }
    });

    const found = teste.find(element => element)

    date.splice(found, 1)
    
    return `User ${id} was deleted`;
}
}
