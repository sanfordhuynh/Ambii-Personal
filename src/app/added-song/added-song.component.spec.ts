import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedSongComponent } from './added-song.component';

describe('AddedSongComponent', () => {
  let component: AddedSongComponent;
  let fixture: ComponentFixture<AddedSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
