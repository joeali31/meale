import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealeslayoutComponent } from './mealeslayout.component';

describe('MealeslayoutComponent', () => {
  let component: MealeslayoutComponent;
  let fixture: ComponentFixture<MealeslayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealeslayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealeslayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
