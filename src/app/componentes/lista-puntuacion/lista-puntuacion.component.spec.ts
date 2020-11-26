import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPuntuacionComponent } from './lista-puntuacion.component';

describe('ListaPuntuacionComponent', () => {
  let component: ListaPuntuacionComponent;
  let fixture: ComponentFixture<ListaPuntuacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPuntuacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPuntuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
