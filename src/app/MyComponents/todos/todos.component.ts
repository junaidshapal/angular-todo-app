import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  localItem:string = " ";
  todos: Todo[];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.todos = [];
  }

  //constructor(){
  //   //this.localItem = localStorage.getItem("todos") ?? " ";
  //   //this.localItem = JSON.parse(localStorage.getItem('todos') || '{}');
  //   //localStorage.setItem("this","this");
  //   //if(this.localItem == null){
  //   this.todos = [];
  // //}
  // //else{
  //   //this.todos = JSON.parse(this.localItem);
  // //}
  // }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)){
      this.localItem = localStorage.getItem("todos") ?? " ";
    localStorage.setItem("this","this");
    if(this.localItem == null){
      this.todos = [];
      }
      else{
        this.todos = JSON.parse(this.localItem);
      }
    }
  }
  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1); 
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo); 
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active; 
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}

