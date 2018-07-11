import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolladoraComponent } from './desarrolladora.component';

describe('DesarrolladoraComponent', () => {
  let component: DesarrolladoraComponent;
  let fixture: ComponentFixture<DesarrolladoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrolladoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolladoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
