import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { delay, filter, map, Observable } from 'rxjs';
import { ITodolist } from '../interface/todolist';
import { TodolistService } from '../service/todolist.service';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { DeleteTodolistComponent } from './delete-todolist/delete-todolist.component';
import { FormTodolistComponent } from './form-todolist/form-todolist.component';
import { DetailTodolistComponent } from './detail-todolist/detail-todolist.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todolist$?: Observable<ITodolist[]>; 
  searchTodolist = new FormControl();
  modalRef?: BsModalRef;
  faTrash = faTrash;
  faPencil = faPencil;
  constructor(private readonly todolistService: TodolistService, private modalService: BsModalService) {}

  ngOnInit(): void {
      this.getTodolist();
  }
  
  getTodolist() {
    this.todolist$ = this.todolistService.getAllTodolist();
  }
  
  search(searchTodolist: string): void {
    this.todolist$ = this.todolistService.getAllTodolist().pipe(
      delay(500),
      map((todolist: ITodolist[]) => {
        const filterData = todolist.filter((item) => {
          const checkKeyword = new RegExp(`${searchTodolist}`, 'ig')
          if (!item.title.match(checkKeyword)) {
            return;
          }
          return {...item}
        })
        return filterData;
      }),
    )
  }

  createTodo(): void {
    this.modalRef = this.modalService.show(FormTodolistComponent, {
      initialState: {
        data: undefined
      },
      animated: true,
    });
    this.modalRef.content.onClose.subscribe((response: boolean) => {
      if (response) {
        this.getTodolist();
      }
    })
    console.log('create');

  }

  updateTodo($event: ITodolist): void {
    this.modalRef = this.modalService.show(FormTodolistComponent, {
      initialState: {
        data: $event
      },
      animated: true,
    });
    this.modalRef.content.onClose.subscribe((response: boolean) => {
      if (response) {
        this.getTodolist();
      }
    })
    console.log('update');
  }

  deleteTodo($event: ITodolist): void {
    this.modalRef = this.modalService.show(DeleteTodolistComponent, {
      initialState: {
        data: $event
      },
      animated: true,
    });
    this.modalRef.content.onClose.subscribe((response: boolean) => {
      if (response) {
        this.getTodolist();
      }
    })
    console.log('delete');
  }

  detailTodo($event: ITodolist): void {
    this.modalRef = this.modalService.show(DetailTodolistComponent, {
      initialState: {
        data: $event
      },
      animated: true,
    });
  }

 }
