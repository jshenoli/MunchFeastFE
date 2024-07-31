import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorcardComponent } from './vendorcard.component';

describe('VendorcardComponent', () => {
  let component: VendorcardComponent;
  let fixture: ComponentFixture<VendorcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
