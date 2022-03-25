import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLojaComponent } from './header-loja.component';

describe('HeaderLojaComponent', () => {
  let component: HeaderLojaComponent;
  let fixture: ComponentFixture<HeaderLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
