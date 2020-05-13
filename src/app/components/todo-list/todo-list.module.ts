import { TodoModule } from './../list-item/todo.module';
import { TodoListComponent } from './todo-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, TodoModule],
  exports: [TodoListComponent]
})
export class TodoListModule { }