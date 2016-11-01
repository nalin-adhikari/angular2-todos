import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

  todos : string [];

  constructor() {
  	this.todos = ['My first todo.', 'My second todo.'];
  }

  getTodos(){
  	return this.todos;
  }

  addTodos(todo){
  	this.todos.push(todo);
  }

  deleteTodos(todo){
  	console.log(todo);
  }

}
