import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDetalleExtendidoComponent } from './juego-detalle-extendido.component';

describe('JuegoDetalleExtendidoComponent', () => {
  let component: JuegoDetalleExtendidoComponent;
  let fixture: ComponentFixture<JuegoDetalleExtendidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoDetalleExtendidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDetalleExtendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
