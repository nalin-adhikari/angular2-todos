import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../../services/store/store.service';
import { Todo } from '../../domain/todo';
import { Uuid } from '../../utils/uuid';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  storeService: StoreService;
  @Input() title: string;
  

  constructor(storeService: StoreService) {
    this.storeService = storeService;
  }

  ngOnInit() {
  }

  onAddItem(item){
    //var todo = new Todo(item);
    this.storeService.addTodos(item);
    this.storeService.getTodos();
  }

}
