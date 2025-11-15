import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Distortion } from './distortion';

describe('Distortion', () => {
  let component: Distortion;
  let fixture: ComponentFixture<Distortion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Distortion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Distortion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
