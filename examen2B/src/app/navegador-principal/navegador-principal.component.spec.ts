import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegadorPrincipalComponent } from './navegador-principal.component';

describe('NavegadorPrincipalComponent', () => {
  let component: NavegadorPrincipalComponent;
  let fixture: ComponentFixture<NavegadorPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegadorPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegadorPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
