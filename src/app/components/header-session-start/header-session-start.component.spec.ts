import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSessionStartComponent } from './header-session-start.component';

describe('HeaderSessionStartComponent', () => {
  let component: HeaderSessionStartComponent;
  let fixture: ComponentFixture<HeaderSessionStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSessionStartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSessionStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
