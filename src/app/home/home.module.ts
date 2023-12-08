import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { NgxIntlTelInputModule } from '../ngx/ngx-intl-tel-input/src/lib/ngx-intl-tel-input.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
		ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
