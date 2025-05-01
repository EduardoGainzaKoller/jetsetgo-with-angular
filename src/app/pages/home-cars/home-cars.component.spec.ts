import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarsComponent } from './home-cars.component';

describe('HomeCarsComponent', () => {
  let component: HomeCarsComponent;
  let fixture: ComponentFixture<HomeCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
