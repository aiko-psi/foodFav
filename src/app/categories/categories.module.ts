import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowCategoriesComponent} from './show-categories/show-categories.component';
import {CategoriesRoutingModule} from './categories-routing.module';



@NgModule({
  declarations: [
      ShowCategoriesComponent
  ],
  imports: [
      CommonModule,
      CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
