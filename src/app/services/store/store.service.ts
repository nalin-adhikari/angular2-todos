import { Injectable } from '@angular/core';
import { Todo } from '../../domain/todo';
import { Uuid } from '../../utils/uuid';
import { Array } from '../../utils/array';

@Injectable()
export class StoreService {

  todos : string [];

  constructor() {
  	this.todos = [
  		'This is test todo task'
  	]
  }

  getTodos(): string []{
  	return this.todos;
  }

  addTodos(todo){
    this.todos.splice(0,0,todo);
  }

  deleteTodos(todo){
    var i = this.todos.indexOf(todo);
    if(i != -1) {
      this.todos.splice(i, 1);
    }
  }

}
