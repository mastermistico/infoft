import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
const url = 'https://jsonplaceholder.typicode.com/todos'

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private dbPath = '/items';
  private dbPathUsers = '/usuarios'
  customersRef: AngularFireList<any> = null;
  usersRef: AngularFireList<any> = null;
  constructor(public http: HttpClient,
              private db: AngularFireDatabase) { 
      this.customersRef = db.list(this.dbPath);
      this.usersRef = db.list(this.dbPathUsers)
    }

    createCustomer(item: any): void {
      this.customersRef.push(item);
    }
    
    createUser(item: any): Promise<any> {
      return this.usersRef.push(item)
    }

    findUser(child,item): AngularFireList<any>{
      return this.db.list(this.dbPathUsers, ref =>
          ref.orderByChild(child)
          .equalTo(item)
        )
    }

    findUp(child,obj): AngularFireList<any>{
      return this.db.list(this.dbPathUsers,ref => ref.orderByChild(child).equalTo(obj))
    }

    updateCustomer(key: string, value: any): Promise<void> {
      return this.usersRef.update(key, value);
    }
   
    deleteCustomer(key: string): Promise<void> {
      return this.customersRef.remove(key);
    }
   
    getUsersList(): AngularFireList<any> {
      return this.usersRef;
    }  

    list(): Observable<any> {
      return this.http.get(url)
    }

}
