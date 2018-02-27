import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
  // @ViewChild('registerForm', {read: NgForm })
  // public registerForm: NgForm;
  @ViewChild('registerForm')
  public registerForm: NgForm;

  public model = {
    name: 'default',
    email: null,
    country: 'Казахстан',
    password: {
      pass: null,
      confirm: null,
    }
  };
  constructor() { }

  ngOnInit() {}

  onSubmitForm(e) {
    console.log(this);
  }
}
