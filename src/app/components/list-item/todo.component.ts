import { Todo } from '../../model/todo';
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-todo',
  template: `
    <div class="todo">
      <label [for]="todo.id">
        <input [id]="todo.id" type="checkbox" name="complete" [(ngModel)]="todo.complete" />
        <span [ngStyle]="{'text-decoration': todo.complete ? 'line-through' : 'none' }">{{ todo.description }}</span>
      </label>
    </div>
  `,
  styles: [`
    .todo {
      margin: 5px 0;
    }
  `]
})
export class TodoComponent implements OnInit {
  @Input()
  todo: Todo;

  ngOnInit() {

  }
}