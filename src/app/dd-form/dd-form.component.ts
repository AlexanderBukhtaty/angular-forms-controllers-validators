import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

const latinOnlyValidator = (control: FormControl) => {
    console.log('Latin Only validator was called');
    let error = {
      latinOnlyErr: {
        valid: false
      }
    };

    let pattern = /^[A-z]+$/;

    return pattern.test(control.value) ? null : error;
};

@Component({
  selector: 'app-dd-form',
  templateUrl: './dd-form.component.html',
  styleUrls: ['./dd-form.component.css']
})
export class DdFormComponent implements OnInit {
  public regForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.regForm = new FormGroup({
      name: new FormControl('defaultName', [Validators.required]),
      email: new FormControl('defaultName', []),
      country: new FormControl('Казахстан', []),
      password: new FormGroup({
        pass: new FormControl('', [Validators.required]),
        confirm: new FormControl('', [Validators.required]),
      }),
    });
    /*
    this.regForm = this.formBuilder.group({
      name: ['name', [Validators.required]],
      email: ['email', [Validators.required]],
      country: ['Казахстан', [Validators.required]],
      password: this.formBuilder.group({
        pass: ['', [Validators.required]],
        confirm: ['', [Validators.required]]
      })
    });
    */

    this.regForm.valueChanges.subscribe((data) => {
      console.log(data);
    });

  }

}
