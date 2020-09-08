import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { CustomizationFormTextComponent } from './customization-form-text/customization-form-text.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    CustomizationFormTextComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
