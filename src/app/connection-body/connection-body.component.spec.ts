import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionBodyComponent } from './connection-body.component';

describe('ConnectionBodyComponent', () => {
  let component: ConnectionBodyComponent;
  let fixture: ComponentFixture<ConnectionBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
