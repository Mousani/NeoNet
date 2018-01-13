import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVednorComponent } from './view-vednor.component';

describe('ViewVednorComponent', () => {
  let component: ViewVednorComponent;
  let fixture: ComponentFixture<ViewVednorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVednorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVednorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
