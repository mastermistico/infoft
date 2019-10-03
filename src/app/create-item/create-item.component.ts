import { Component, OnInit, OnChanges } from '@angular/core';
import { ValidationErrors, AbstractControl, NgForm } from '@angular/forms';

import { ModelService } from '../data/model.service';
import {UserModule} from '../user/user.module';
import { ViewChild } from '@angular/core';
import { forkJoin, Subscription, Observable } from 'rxjs';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})

export class CreateItemComponent implements OnInit {
  id:any;
  title:any;

  formChangesSubscription: any;
  submitted = false;
  models:any;
  formUser:any;
  isVal:boolean = true;
  @ViewChild('customForm', {static: false}) ngForm: NgForm;
  constructor(private model: ModelService) { 
                
               }

//  https://stackabuse.com/angular-form-validation/

  ngOnInit() {
   }

  ngAfterViewChecked(){
    //this.getData()
    //if(this.ngForm.valid){
    //  this.getData()
    //}
  }

  newCustomer(): void {
    this.submitted = false;
    this.id = ''
    this.title = ''
  }

  newUser(user:any){
    this.models = new UserModule(
      user['nombres'].value,
      user['apellidos'].value,
      user['cedula'].value,
      user['tel'].value,
      user['mail'].value
    )
    //this.save()
    this.model.createUser(this.models).then((res) => {
      console.log('guardado',res)
      this.ngForm.reset()
      this.submitted = true
      this.isVal = true
    })
    .catch((err)=>{
      alert('error al guardar usuario: '+err)
    })
  }
 
  save() {
    this.model.createUser(this.models);
    this.id = ''
    this.title = ''
  }
 
  onSubmit(form) {
    this.formUser = form;
    this.getData()
    //
  }

  getData(){
    this.getIdData('cedula',this.ngForm.controls)
    .subscribe(res => {
      console.log('res',res)
      if(res.length === 0){
        this.getIdData('mail',this.ngForm.controls).subscribe((res)=>{
          if(res.length === 0){
            this.newUser(this.ngForm.controls)
          } else {
            this.isVal = false
          }
        })
      } else {
        this.isVal = false
      }
    })
  }
  getIdData(path,form){
    console.log('val',path,form[path].value)
    return  this.model.findUser(path,form[path].value)
      .valueChanges(['child_added'])
  }
}
