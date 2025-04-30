import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightBarComponent } from './search-flight-bar.component';

describe('SearchFlightBarComponent', () => {
  let component: SearchFlightBarComponent;
  let fixture: ComponentFixture<SearchFlightBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFlightBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFlightBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
