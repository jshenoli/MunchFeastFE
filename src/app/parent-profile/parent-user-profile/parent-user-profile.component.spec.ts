import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentUserProfileComponent } from './parent-user-profile.component';

describe('ParentUserProfileComponent', () => {
  let component: ParentUserProfileComponent;
  let fixture: ComponentFixture<ParentUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentUserProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
