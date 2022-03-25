import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLojaComponent } from './banner-loja.component';

describe('BannerLojaComponent', () => {
  let component: BannerLojaComponent;
  let fixture: ComponentFixture<BannerLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerLojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
