import { FurnitureComponent } from './categories/furniture/furniture.component';
import { BooksComponent } from './categories/books/books.component';
import { CamerasComponent } from './categories/cameras/cameras.component';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "", component: CollectionsHomeComponent, children: [
      { path: 'cameras', component: CamerasComponent },
      { path: 'books', component: BooksComponent },
      { path: 'furniture', component: FurnitureComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
