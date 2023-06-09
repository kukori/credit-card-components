import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'card-holder-input',
  styleUrl: 'card-holder-input.css',
  shadow: true,
})
export class CreditCardInput {
  @Prop() error: boolean;
  @Prop() value: string = "";
  @Prop() name: string = "card-holder";
  @Event() change: EventEmitter<string>;
  @Event() changed: EventEmitter<string>;

  private handleOnKeyDown = (event: KeyboardEvent) => {
    if(["0","1","2","3","4","5","6","7","8","9"].includes(event.key)) {
      event.preventDefault();
    }
  }

  private handleOnInput = (event: InputEvent) => {
    let newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
    this.change.emit(newValue);
    this.changed.emit(newValue);
  }

  private getClass = () => {
    return this.error ?  "card-holder-input error" : "card-holder-input";
  }

  render() {
    return <input tabIndex={3} name={this.name} value={this.value} onKeyDown={this.handleOnKeyDown} onInput={this.handleOnInput} class={this.getClass()} placeholder='Cardholder Name' />;
  }
}