import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionParentComponent } from './connection-parent.component';

describe('ConnectionParentComponent', () => {
  let component: ConnectionParentComponent;
  let fixture: ComponentFixture<ConnectionParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
