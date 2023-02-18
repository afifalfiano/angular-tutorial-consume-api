import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ITodolist } from '../../interface/todolist';

@Component({
  selector: 'app-detail-todolist',
  templateUrl: './detail-todolist.component.html',
  styleUrls: ['./detail-todolist.component.scss']
})
export class DetailTodolistComponent implements OnInit{
  public data!: ITodolist;
  public dueDate!: string;
  constructor(private bsModalService: BsModalService) {
   
  }

  ngOnInit(): void {
    this.dueDate = new Date(Number(this.data.due_date)).toLocaleDateString();
  }

  closeModal(): void {
    this.bsModalService.hide();
  }
}
