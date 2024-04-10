import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, HeaderComponent, FooterComponent, MainComponent, HelpCenterComponent, ListItemsComponent, ItemCardComponent, BookComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
