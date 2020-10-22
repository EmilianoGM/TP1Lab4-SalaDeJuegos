import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinarNumeroComponent } from './adivinar-numero.component';

describe('AdivinarNumeroComponent', () => {
  let component: AdivinarNumeroComponent;
  let fixture: ComponentFixture<AdivinarNumeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinarNumeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinarNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
