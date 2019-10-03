import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewListComponent } from './view-list/view-list.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ViewTodosComponent  } from './view-todos/view-todos.component'
import { EditItemComponent } from './view-todos/edit-item/edit-item.component'


const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: ViewListComponent },
  { path: 'Crear', component: CreateItemComponent },
  { path: 'Listar', component: ViewTodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
