import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store/store.service';
import { Todo } from '../../domain/todo';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

	todos: string [];
	storeService: StoreService;
	deleteComponent: DeleteComponent;

  constructor(storeService: StoreService) {
  	this.storeService = storeService;
  }

  ngOnInit() {
  	this.todos = this.onGetItem();
  }

  onGetItem(): string []{
  	return this.storeService.getTodos();
  }

  onDeleteItem(todo){
  	this.storeService.deleteTodos(todo);
	  this.storeService.getTodos();
  }

}
