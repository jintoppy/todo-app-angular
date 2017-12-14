import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  priorityTodoItem;

  constructor(
    private store: Store<any>
  ){

  }

  ngOnInit(){
    this.store.select('todo')
      .subscribe(todoState => {
        this.priorityTodoItem = todoState.priorityItem;
      });
  }

  addTodo(inputVal){
    this.store.dispatch(addTodo(inputVal));
  }
}
