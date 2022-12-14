import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { LogoComponent } from './components/logo/logo.component';
import { InputComponent } from './components/input/input.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [
    LayoutComponent,
    PaginatorComponent,
    LogoComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    NzDropDownModule
  ],
  exports: [
    LayoutComponent,
    InputComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
