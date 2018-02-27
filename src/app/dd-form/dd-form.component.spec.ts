import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdFormComponent } from './dd-form.component';

describe('DdFormComponent', () => {
  let component: DdFormComponent;
  let fixture: ComponentFixture<DdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
