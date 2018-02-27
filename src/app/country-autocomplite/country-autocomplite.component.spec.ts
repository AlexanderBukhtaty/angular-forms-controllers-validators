import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAutocompliteComponent } from './country-autocomplite.component';

describe('CountryAutocompliteComponent', () => {
  let component: CountryAutocompliteComponent;
  let fixture: ComponentFixture<CountryAutocompliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryAutocompliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryAutocompliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
