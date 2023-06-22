import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DefaultLayoutComponent } from './layout/default-layout.component';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    HeaderComponent
  ],
  exports: [
    DefaultLayoutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
