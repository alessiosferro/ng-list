import { Todo } from './model/todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <app-todolist (addTodo)="updateTodos($event)" [todos]="todos" title="my awesome todo list"></app-todolist>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class AppComponent {
  todos: Todo[] = [
    {
      id: 1,
      description: 'Eat pizza',
      complete: false
    },
    {
      id: 2,
      description: 'Do homeworks',
      complete: true
    }
  ];

  updateTodos(todo: Todo) {
    this.todos = [
      ...this.todos,
      {
        id: this.todos.length + 1,
        ...todo,
      }
    ]
  }

}
