import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from "../../actions";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todoItems = [];
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.select('todo')
      .subscribe(todoState => {
        this.todoItems = todoState.list;
      });
  }

  setAsCompleted(todoItemIndex){
    this.store.dispatch(TodoActions.setTodoAsCompleted(todoItemIndex));
  }

  removeItem(todoItemIndex){
    this.store.dispatch(TodoActions.removeTodo(todoItemIndex));
  }

  setAsPriority(todoItem){
    this.store.dispatch(TodoActions.setPriorityTodo(todoItem));
  }

}
