import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { BookComponent } from './book/book.component';
import { ListBookComponent } from './list-book/list-book.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'helpcenter',
    component: HelpCenterComponent,
  },
  {
    path: 'peoplelist',
    component: ListItemsComponent,
  },
  {
    path: 'bookslist',
    component: ListBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
