import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [
    LayoutComponent,
    PaginatorComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class SharedModule { }
