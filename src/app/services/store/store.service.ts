import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

  todos : string [];

  constructor() {
  	this.todos = ['My first todo.', 'My second todo.'];
  }

  getTodos(){
  	console.log("Inside getTodos method.");
  	//console.log(this.todos);
  	return this.todos;
  }

}
