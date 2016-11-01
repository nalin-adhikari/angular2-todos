import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { DisplayComponent } from './components/display/display.component';
import { StoreService } from './services/store/store.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
