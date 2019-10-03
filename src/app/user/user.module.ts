import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  constructor(
    public nombres: string,
    public apellidos: string,
    public cedula: number,
    public tel: number,
    public mail: string
  ){}
 }
