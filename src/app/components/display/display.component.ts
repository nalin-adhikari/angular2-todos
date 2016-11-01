import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store/store.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

	todos: string [];
	storeService: StoreService;

  constructor(storeService: StoreService) {
  	this.storeService = storeService;
  }

  ngOnInit() {
  	this.todos = this.onGetItem();
  }

  onGetItem(): string []{
  	return this.storeService.getTodos();
  }

}
