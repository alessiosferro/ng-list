import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, FormsModule],
  exports: [TodoComponent]
})
export class TodoModule { }