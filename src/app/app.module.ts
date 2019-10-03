import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ModelService } from './data/model.service';
import { CreateItemComponent } from './create-item/create-item.component';
import { EditItemComponent } from './view-todos/edit-item/edit-item.component';
import { ViewTodosComponent } from './view-todos/view-todos.component'


@NgModule({
  declarations: [
    AppComponent,
    ViewListComponent,
    CreateItemComponent,
    EditItemComponent,
    ViewTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
