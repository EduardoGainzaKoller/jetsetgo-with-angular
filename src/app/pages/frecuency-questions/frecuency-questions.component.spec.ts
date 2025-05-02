import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecuencyQuestionsComponent } from './frecuency-questions.component';

describe('FrecuencyQuestionsComponent', () => {
  let component: FrecuencyQuestionsComponent;
  let fixture: ComponentFixture<FrecuencyQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrecuencyQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrecuencyQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
