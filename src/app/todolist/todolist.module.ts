import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist/todolist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormTodolistComponent } from './todolist/form-todolist/form-todolist.component';
import { DeleteTodolistComponent } from './todolist/delete-todolist/delete-todolist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailTodolistComponent } from './todolist/detail-todolist/detail-todolist.component';



@NgModule({
  declarations: [
    TodolistComponent,
    FormTodolistComponent,
    DeleteTodolistComponent,
    DetailTodolistComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TodolistModule { }
