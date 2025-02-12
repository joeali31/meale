import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealesComponent } from './meales.component';

describe('MealesComponent', () => {
  let component: MealesComponent;
  let fixture: ComponentFixture<MealesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
