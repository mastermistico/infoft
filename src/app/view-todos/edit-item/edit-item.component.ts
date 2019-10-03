import { Component, OnInit, Input, Query } from '@angular/core';
import { ModelService } from '../../data/model.service';
import { ViewChild } from '@angular/core';
import { NgForm  } from '@angular/forms';
import {UserModule} from '../../user/user.module';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  @Input() item:any
  isVal:boolean = true;
  submitted = false;
  models:any;
  isRep: boolean= false
  @ViewChild('customForm', {static: false}) ngForm: NgForm; 
  constructor(private model: ModelService) { }

  ngOnInit() {
  }

  updateActive() {
    this.model
      .updateCustomer(this.item.key, this.models)
      .then((res) => {
        console.log("update") 
        alert("guardado exitoso")       
      })
      .catch(err => console.log(err));
  }
  
  onSubmit() {
    this.getData()
    //
  }

  newUser(user:any){
    this.models = new UserModule(
      user['nombres'].value,
      user['apellidos'].value,
      this.item['cedula'],
      user['tel'].value,
      user['mail'].value
    )
    this.updateActive()
  }

  getData(){
    /*this.getIdData('cedula',this.ngForm.controls)
    .subscribe(res => {      
      let ced = res.filter(it => it.mail!==this.item.mail)
      console.log('res ced',ced)
      if(ced.length === 0){
        this.getIdData('mail',this.ngForm.controls).subscribe((res2)=>{          
          let ma = res.filter(it => it.cedula!==this.item.cedula)
          console.log('entro',ma)
          if(ma.length === 0){
            console.log('res mail',res)
            this.newUser(this.ngForm.controls)
            this.isVal = true
          } else {
            this.isVal = false
          }
        })
      } else {
        console.log('aca')
        this.isVal = false
      }
    })*/
    let cel,ma
    this.model
      console.log(this.ngForm.controls['mail'].value)
      this.model.findUp('mail', this.ngForm.controls['mail'].value)
      .valueChanges(['child_changed']).subscribe(res=>{
        console.log(res,'uno')
        if(res.length > 1){
          console.log(res,'dos')
          ma=true
          this.isVal = false
        }else{
          this.isVal =true
          this.newUser(this.ngForm.controls)
          console.log(res)
          ma= false;
        }
      })
        
  }
  getIdData(path,form){
    return  this.model.findUser(path,form[path].value)
      .valueChanges(['child_changed'])
  }
   
  /*deleteCustomer() {
    this.model
      .deleteCustomer(this.item.key)
      .catch(err => console.log(err));
  }+*/

}
