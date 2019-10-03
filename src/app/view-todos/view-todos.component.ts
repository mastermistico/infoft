import { Component, OnInit } from '@angular/core';
import { ModelService } from '../data/model.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.scss']
})
export class ViewTodosComponent implements OnInit {
  users: any;
  edit = false;
  constructor(public model: ModelService) { }

  ngOnInit() {
    this.getUsersList();
  }

  isEdit(){
    this.edit = true;
  }

  getUsersList() {
  this.model.getUsersList().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(users => {
    this.users = users;
  });
}


}
