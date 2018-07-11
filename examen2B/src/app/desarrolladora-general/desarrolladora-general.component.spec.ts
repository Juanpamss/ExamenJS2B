import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolladoraGeneralComponent } from './desarrolladora-general.component';

describe('DesarrolladoraGeneralComponent', () => {
  let component: DesarrolladoraGeneralComponent;
  let fixture: ComponentFixture<DesarrolladoraGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrolladoraGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolladoraGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
