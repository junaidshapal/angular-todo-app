import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo;
  @Input() i :number | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor(){

  }
  ngOnInit(): void {
  }
  onClick(){
    this.todoDelete.emit(this.todo);
    console.log("Deleted")
  }
  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(this.todo);
  }
}
