import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxRack } from './fx-rack';

describe('FxRack', () => {
  let component: FxRack;
  let fixture: ComponentFixture<FxRack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FxRack]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FxRack);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
