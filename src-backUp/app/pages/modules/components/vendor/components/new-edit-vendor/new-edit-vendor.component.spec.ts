import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditVendorComponent } from './new-edit-vendor.component';

describe('NewEditVendorComponent', () => {
  let component: NewEditVendorComponent;
  let fixture: ComponentFixture<NewEditVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEditVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
