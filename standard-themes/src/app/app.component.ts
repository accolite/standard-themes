import { Component, ElementRef } from '@angular/core';
import { Theme } from './Theme.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'standard-themes';
  appId = 'theme1';
  expcolor = 'red';
  property1 = '--color2';
  property2 = '--color';
  
  constructor(private elementRef: ElementRef) { }
  
  // themes: Observable<Array<Theme>> = this.http.get<Array<Theme>>("assets/themes.json");
  
  switchTheme(appId: string) {
    this.appId = appId; 
  }

  changeTheme(){
  this.elementRef.nativeElement.style.setProperty(this.property1, this.expcolor);
  }

}
