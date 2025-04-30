import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCarBarComponent } from './search-car-bar.component';

describe('SearchCarBarComponent', () => {
  let component: SearchCarBarComponent;
  let fixture: ComponentFixture<SearchCarBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCarBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCarBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
