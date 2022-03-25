import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojasLayoutComponent } from './lojas-layout.component';

describe('lojasLayoutComponent', () => {
  let component: LojasLayoutComponent;
  let fixture: ComponentFixture<LojasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojasLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LojasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
