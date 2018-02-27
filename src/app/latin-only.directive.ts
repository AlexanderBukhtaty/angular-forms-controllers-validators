import { Directive, forwardRef } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[appLatinOnly]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => LatinOnlyDirective), multi: true }
  ]
})
export class LatinOnlyDirective implements Validator {

  constructor() { }

  validate (control: FormControl) {
    console.log('Latin Only validator was called');
    let error = {
      latinOnlyErr: {
        valid: false
      }
    };

    let pattern = /^[A-z]+$/;

    return pattern.test(control.value) ? null : error;
  }

}
