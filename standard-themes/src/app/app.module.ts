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
import { HttpClientModule } from '@angular/common/http';
import { FontPickerModule } from 'ngx-font-picker';
import { FONT_PICKER_CONFIG } from 'ngx-font-picker';
import { FontPickerConfigInterface } from 'ngx-font-picker';
import { MatSidenavModule } from '@angular/material/sidenav';

const DEFAULT_FONT_PICKER_CONFIG: FontPickerConfigInterface = {
  apiKey: 'AIzaSyBR5qH_b4psErMMVZsth_o01VqxI7VKwN8'
};

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
    HttpClientModule,
    FontPickerModule,
    MatSidenavModule
  ],
  providers: [{
    provide: FONT_PICKER_CONFIG,
    useValue: DEFAULT_FONT_PICKER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
