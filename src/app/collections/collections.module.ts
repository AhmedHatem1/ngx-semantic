import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { CamerasComponent } from './categories/cameras/cameras.component';
import { BooksComponent } from './categories/books/books.component';
import { FurnitureComponent } from './categories/furniture/furniture.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [CollectionsHomeComponent, TableComponent, CamerasComponent, BooksComponent, FurnitureComponent, TabsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule { }
