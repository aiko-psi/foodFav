import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowCategoriesComponent} from './show-categories/show-categories.component';



const categoriesRoutes: Routes = [
    {
        path: '',
        component: ShowCategoriesComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(categoriesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CategoriesRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
