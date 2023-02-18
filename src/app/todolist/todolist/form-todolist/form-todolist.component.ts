import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ITodolist } from '../../interface/todolist';
import { TodolistService } from '../../service/todolist.service';

@Component({
  selector: 'app-form-todolist',
  templateUrl: './form-todolist.component.html',
  styleUrls: ['./form-todolist.component.scss']
})
export class FormTodolistComponent implements OnInit {
  public data?: ITodolist;
  public title!: string;
  public onClose: Subject<boolean> = new Subject();
  formTodolist: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    status: new FormControl('todo', [Validators.required]),
    due_date: new FormControl('', [Validators.required])
  })
  constructor(
    private bsModalService: BsModalService,
    private todolistService: TodolistService,
    private toastrService: ToastrService
  ) {
  }
  ngOnInit(): void {
    if (this.data) {
      this.title = 'Update Todo'
      this.doInitFormUpdate();
    } else {
      this.title = 'Create Todo'
    }
  }

  doInitFormUpdate() {
    this.formTodolist.setValue({
      title: this.data?.title,
      description: this.data?.description,
      status: this.data?.status,
      due_date: this.setDefaultDate(Number(this.data!.due_date))
    })
  }

  setDefaultDate(due_date: number) {
    const date = new Date(due_date)
    const year = date.getFullYear()

    let month: number | string = date.getMonth() + 1
    let day: number | string = date.getDate()

    if (month < 10) month = '0' + month
    if (day < 10) day = '0' + day

    const finalDate = `${year}-${month}-${day}`
    return finalDate;
  }

  doCreate(body: ITodolist) {
    body.due_date = Number(new Date(this.formTodolist.value.due_date).getTime());
    this.todolistService.createTodolist(body).subscribe(response => {
      this.toastrService.success('Success', 'Success Create!');
      this.onClose.next(true);
      this.closeModal();
    }, (err: HttpErrorResponse) => {
      this.toastrService.error('Failed', 'Failed Create!');
      throw new Error(err.error);
    })
  }

  doUpdate(id: number, body: ITodolist) {
    body.due_date = Number(new Date(this.formTodolist.value.due_date).getTime());
    this.todolistService.updateTodolist(id, body).subscribe(response => {
      this.toastrService.success('Success', 'Success Update!');
      this.onClose.next(true);
      this.closeModal();
    }, (err: HttpErrorResponse) => {
      this.toastrService.error('Failed', 'Failed Update!');
      throw new Error(err.error);
    })
  }

  submit() {
    if (this.data) {
      this.doUpdate(this.data!.id, this.formTodolist.value);
    } else {
      this.doCreate(this.formTodolist.value);
    }
  }



  closeModal(): void {
    this.bsModalService.hide();
  }

}
