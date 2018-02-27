import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-country-autocomplite',
  templateUrl: './country-autocomplite.component.html',
  styleUrls: ['./country-autocomplite.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CountryAutocompliteComponent), multi: true}
  ]
})
export class CountryAutocompliteComponent implements OnInit, ControlValueAccessor {
  public inputValue: string = '';
  public countries: string[] = [
    'Россия',
    'США',
    'Казахстан',
    'Канада',
    'Испания',
    'Италия',
    'Норвегия',
    'Франция',
    'Германия',
  ];
  public options: string[] = [];
  public hideOptions: boolean = true;
  propagateChange: (any) => void;
  propagateTouch: (any) => void;

  constructor() { }

  ngOnInit() {
  }

  writeValue(value) {
    this.inputValue = value;
    this.hideOptions = true;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.propagateTouch = fn;
  }

  public newTerm(term: string) {
    this.hideOptions = false;
    this.options.length = 0;
    this.countries.forEach((item) => {
      if (item.indexOf(term) !== -1) {
        this.options.push(item);
      }
    });
  }

  public selectOption(option) {
    this.hideOptions = true;
    this.inputValue = option;
    this.propagateChange(this.inputValue);
  }
}
