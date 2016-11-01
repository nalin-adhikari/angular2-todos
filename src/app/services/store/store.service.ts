import { Injectable } from '@angular/core';
import { Todo } from '../../domain/todo';

@Injectable()
export class StoreService {

  todos : Todo [];

  constructor() {
  	this.todos = [
  		new Todo("1","abc")
  	]
  }

  getTodos(): Todo []{
  	return this.todos;
  }

  addTodos(todo){
  	this.todos.push(todo);
  }

  deleteTodos(todo){
  	console.log(todo);
  }

}
