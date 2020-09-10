import { Component, OnInit } from '@angular/core';
import { Font } from 'ngx-font-picker';

@Component({
  selector: 'app-customization-form-text',
  templateUrl: './customization-form-text.component.html',
  styleUrls: ['./customization-form-text.component.css']
})
export class CustomizationFormTextComponent implements OnInit {

  constructor() { }

  public font: Font = new Font({
    family: 'Roboto',
    size: '14px',
    style: 'regular',
    styles: ['regular']
  });

  color: '#2883e9';
  
  public sizeSelect: boolean = true;

  ngOnInit(): void {
  }

}
