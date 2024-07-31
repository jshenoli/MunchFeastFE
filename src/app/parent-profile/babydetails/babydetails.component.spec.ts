import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyProfileComponent } from './babydetails.component';

describe('BabydetailsComponent', () => {
  let component: BabyProfileComponent;
  let fixture: ComponentFixture<BabyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BabyProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
