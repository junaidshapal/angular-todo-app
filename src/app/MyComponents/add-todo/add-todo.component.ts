import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit {

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title:string = ""
  desc:string = ""
  constructor(){

  }
  ngOnInit(): void {
  }

  onSubmit(){
    //console.log('Clicked')
    const todo ={
      sno: 3,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }


}
