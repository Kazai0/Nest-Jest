/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { Userservice } from './user.service';

describe('User Controller', () => {
  let userController: UserController;

  beforeEach(async () => {
    const user: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [Userservice],
    }).compile();

    userController = user.get<UserController>(UserController);
  });
  
  describe('users', ()=>{

    const paramUser = 1

    it('should return "List users"', () =>{
      expect(userController.getAll()).toBe('Jean, Lucas, Edu, Leo');
    });
 
    it('should return "only user"', () => {
      expect(userController.getOne({id: 1})).toBe('User 1')
    });

    it('should return "user created"', ()=>{
      const bodyUser = {
        id: '1',
        name: 'jean',
        age: '94',
        height: 165
      }
  
      expect(userController.createUser(bodyUser)).toBe(`User with name ${bodyUser.name} created`)
    })
    it('should return "user update"', ()=>{
      
      const paramUser = 1
      const bodyUpdate = {
        id: '1',
        name: 'jean',
        age: '94',
        height: 165
      }
      expect(userController.changeUser({id: paramUser},bodyUpdate)).toBe(`user of the id: ${paramUser} and name: ${bodyUpdate.name} update  with sucess`)
    })
    it('should return "delete user"', () => {
      expect(userController.deleteUser({id: paramUser})).toBe(`User ${paramUser} was deleted`)
    });


  });
});
