import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentboardComponent } from './parentboard.component';

describe('ParentboardComponent', () => {
  let component: ParentboardComponent;
  let fixture: ComponentFixture<ParentboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
