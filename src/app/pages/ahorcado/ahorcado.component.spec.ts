import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoComponent } from './ahorcado.component';

describe('AhorcadoComponent', () => {
  let component: AhorcadoComponent;
  let fixture: ComponentFixture<AhorcadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorcadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorcadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
