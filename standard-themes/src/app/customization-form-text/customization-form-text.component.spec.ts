import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizationFormTextComponent } from './customization-form-text.component';

describe('CustomizationFormTextComponent', () => {
  let component: CustomizationFormTextComponent;
  let fixture: ComponentFixture<CustomizationFormTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizationFormTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizationFormTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
