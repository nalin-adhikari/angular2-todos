import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../../services/store/store.service';

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
  	console.log(item);
  }

}
