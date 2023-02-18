import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { ITodolist } from '../../interface/todolist';
import { TodolistService } from '../../service/todolist.service';

@Component({
  selector: 'app-delete-todolist',
  templateUrl: './delete-todolist.component.html',
  styleUrls: ['./delete-todolist.component.scss']
})
export class DeleteTodolistComponent {
  public data!: ITodolist;
  public onClose: Subject<boolean> = new Subject();
  constructor(
    private bsModalService: BsModalService,
    private todolistService: TodolistService,
    private toastrService: ToastrService
  ) {
  }

  closeModal(): void {
    this.bsModalService.hide();
  }

  deleteData(): void {
    let id = -1;
    if (this.data) {
      id = this.data.id
    }
    this.todolistService.deleteTodolist(id).subscribe(response => {
      this.toastrService.success('Success', 'Success Delete!');
      this.onClose.next(true);
      this.closeModal();
    }, (err: HttpErrorResponse) => {
      this.toastrService.error('Failed', 'Failed Delete!');
      throw new Error(err.error);
    });
  }
}
