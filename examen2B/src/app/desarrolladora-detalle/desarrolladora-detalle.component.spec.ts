import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolladoraDetalleComponent } from './desarrolladora-detalle.component';

describe('DesarrolladoraDetalleComponent', () => {
  let component: DesarrolladoraDetalleComponent;
  let fixture: ComponentFixture<DesarrolladoraDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrolladoraDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolladoraDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
