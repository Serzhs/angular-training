import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Input() loading!: boolean;
  @Output() onSubmit = new EventEmitter();
  // for two way binding starts
  @Input()  value!: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log('loading', this.loading)
    console.log(this.value)
  }

  onChange(event: Event) {
    const element = event.target as HTMLInputElement

    this.valueChange.emit(element.value)
  }

  submitHandler(event: Event) {
    event.preventDefault()

    this.onSubmit.emit()
  }
}
