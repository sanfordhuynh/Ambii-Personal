import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvotedSongComponent } from './upvoted-song.component';

describe('UpvotedSongComponent', () => {
  let component: UpvotedSongComponent;
  let fixture: ComponentFixture<UpvotedSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpvotedSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvotedSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
