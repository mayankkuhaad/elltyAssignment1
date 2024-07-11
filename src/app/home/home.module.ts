import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { AppComponent } from '../app/app.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [HomeComponent,NgModule ],
  bootstrap:    [ HomeComponent ]
})
export class AppModule { }
