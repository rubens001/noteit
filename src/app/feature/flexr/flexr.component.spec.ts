import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexrComponent } from './flexr.component';

describe('FlexrComponent', () => {
  let component: FlexrComponent;
  let fixture: ComponentFixture<FlexrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
