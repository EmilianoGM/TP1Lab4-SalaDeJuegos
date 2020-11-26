import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonResetearComponent } from './button-resetear.component';

describe('ButtonResetearComponent', () => {
  let component: ButtonResetearComponent;
  let fixture: ComponentFixture<ButtonResetearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonResetearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonResetearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
