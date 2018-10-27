import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationTitleComponent } from './recommendation-title.component';

describe('RecommendationTitleComponent', () => {
  let component: RecommendationTitleComponent;
  let fixture: ComponentFixture<RecommendationTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
