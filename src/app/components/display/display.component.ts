import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store/store.service';
import { Todo } from '../../domain/todo';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

	todos: Todo [];
	storeService: StoreService;

  constructor(storeService: StoreService) {
  	this.storeService = storeService;
  }

  ngOnInit() {
  	this.todos = this.onGetItem();
  }

  onGetItem(): Todo []{
  	return this.storeService.getTodos();
  }

  onDeleteItem(todoItem){
	return this.storeService.deleteTodos(todoItem);
  }

}
