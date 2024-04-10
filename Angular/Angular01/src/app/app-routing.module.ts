import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MainComponent } from './main/main.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { ListItemsComponent } from './list-items/list-items.component';

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
  // {
  //   path: 'books',
  //   component: ListItemsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
