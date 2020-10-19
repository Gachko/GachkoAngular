import { Component, OnInit, Input, forwardRef  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BasketCounterComponent),
  multi: true
};

@Component({
  selector: 'app-basket-counter',
  providers: [ COUNTER_CONTROL_ACCESSOR],
  templateUrl: './basket-counter.component.html',
  styleUrls: ['./basket-counter.component.scss']
})
export class BasketCounterComponent implements ControlValueAccessor {
  
  private onTouch: Function;
  private onModelChange: Function;

  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  
  writeValue(value) {
    this.value = value || 0;
  }

  step: number = 1;
  min: number = 1;
 max: number = 20;

  value: number = 1;

  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
  
  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
}
