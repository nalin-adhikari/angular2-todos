import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store/store.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

	storeService: StoreService;

  constructor(storeService: StoreService) {
  	this.storeService = storeService;
  }

  ngOnInit() {
  }

  onDeleteItem(todo){
  	this.storeService.deleteTodos(todo);
  }

}
