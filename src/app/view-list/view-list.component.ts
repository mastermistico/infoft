import { Component, OnInit } from '@angular/core';
import { ModelService } from '../data/model.service';


@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {
  todo:any = [];
  constructor(public model: ModelService ) { 
    this.model
    .list()
    .subscribe(item => {
      this.todo = item
    })
  }

  ngOnInit() {

  }

}
