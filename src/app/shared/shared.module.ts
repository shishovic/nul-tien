import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { ImageComponent } from './components/image/image.component';
import { DataService } from './core/services/data.service';
import { DefaultLayoutComponent } from './layout/default-layout.component';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    ImageComponent,
  ],
  exports: [
    DefaultLayoutComponent,
    ImageComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule
  ],
  providers: [DataService],
  bootstrap: []
})
export class SharedModule { }
