import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertComponent } from './offert.component';

describe('OffertComponent', () => {
  let component: OffertComponent;
  let fixture: ComponentFixture<OffertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
