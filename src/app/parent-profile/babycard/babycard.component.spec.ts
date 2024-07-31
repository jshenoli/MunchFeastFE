import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabycardComponent } from './babycard.component';

describe('BabycardComponent', () => {
  let component: BabycardComponent;
  let fixture: ComponentFixture<BabycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BabycardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
