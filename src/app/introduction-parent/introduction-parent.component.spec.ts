import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionParentComponent } from './introduction-parent.component';

describe('IntroductionParentComponent', () => {
  let component: IntroductionParentComponent;
  let fixture: ComponentFixture<IntroductionParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
