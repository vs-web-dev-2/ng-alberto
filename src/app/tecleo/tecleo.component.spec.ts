import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecleoComponent } from './tecleo.component';

describe('TecleoComponent', () => {
  let component: TecleoComponent;
  let fixture: ComponentFixture<TecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
