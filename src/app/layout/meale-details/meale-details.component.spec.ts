import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealeDetailsComponent } from './meale-details.component';

describe('MealeDetailsComponent', () => {
  let component: MealeDetailsComponent;
  let fixture: ComponentFixture<MealeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
