import { KeyCodes } from './../../enums/keycodes';
import { Todo } from './../../model/todo';
import { Component, Input, Output, OnInit, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { fromEvent } from 'rxjs';
import { filter, mapTo, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-todolist',
  template: `
    <div class="todo-list__container">
      <h1>{{ title | titlecase }}</h1>
      <div class="todo-list">
        <app-todo [todo]="todo" *ngFor="let todo of todos"></app-todo>
      </div>
      <div class="form-group">
        <label for="add-todo">Add todo</label>
        <input #addTodo class="form-control" id="add-todo" type="text">
      </div>
    </div>
  `,
  styles: [`
    .todo-list {
      margin: 20px 0;
    }

    .form-group {
      margin: 10px 0;
    }
  
    .form-group > label {
      display: block;
      margin-bottom: 5px;
    }

    .todo-list__container {
      max-width: 600px;
      min-width: 400px;
    }

    .form-control {
      width: 100%;
      font-size: .9rem;
      padding: 8px;
      border: none;
      border-radius: 3px;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, .2);
      transition: box-shadow 200ms ease-in-out;
    }

    .form-control:focus {
      outline: none;
      box-shadow: 0 0 0 2px dodgerblue;
    }
  `]
})
export class TodoListComponent implements OnInit {
  @ViewChild('addTodo', { static: true }) input: ElementRef<HTMLInputElement>;

  @Input()
  todos: Todo[] = [];

  @Input()
  title: string = 'todo list';

  @Output()
  addTodo = new EventEmitter<Todo>();

  ngOnInit() {
    fromEvent(this.input.nativeElement, 'keypress').pipe(
      filter((e: KeyboardEvent) => e.keyCode === KeyCodes.ENTER),
      map(() => this.input.nativeElement.value),
    ).subscribe(description => {
      this.input.nativeElement.value = '';

      this.addTodo.emit({
        description,
        complete: false
      });
    })
  }
}