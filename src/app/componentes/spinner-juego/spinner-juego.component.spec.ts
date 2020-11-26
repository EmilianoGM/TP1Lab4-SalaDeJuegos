import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerJuegoComponent } from './spinner-juego.component';

describe('SpinnerJuegoComponent', () => {
  let component: SpinnerJuegoComponent;
  let fixture: ComponentFixture<SpinnerJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
