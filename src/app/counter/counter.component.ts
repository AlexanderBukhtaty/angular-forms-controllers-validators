import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() set value(v) {
    if (v) {
      this._value = v;
      this.valueChange.emit(this._value);
    }
  }
  get value() {
    return this._value;
  }
  @Output() valueChange: EventEmitter<number> = new EventEmitter();
  private _value = 0;


  constructor() { }


  ngOnInit() {
  }


  increment() {
    this.value++;
  }


  decrement() {
    this.value--;
  }

}
