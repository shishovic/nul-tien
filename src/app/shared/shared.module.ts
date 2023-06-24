import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ImageComponent } from './components/image/image.component';
import { DataService } from './core/services/data.service';
import { DefaultLayoutComponent } from './layout/default-layout.component';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    HeaderComponent,
    ImageComponent
  ],
  exports: [
    DefaultLayoutComponent,
    HeaderComponent,
    ImageComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: []
})
export class SharedModule { }
