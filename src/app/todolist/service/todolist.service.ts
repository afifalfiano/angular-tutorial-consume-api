import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodolist } from '../interface/todolist';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  private readonly API_URL = 'http://localhost:3000/todolist';
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getAllTodolist(): Observable<ITodolist[]> {
    return this.httpClient.get<ITodolist[]>(this.API_URL);
  }

  getTodolistById(id: number): Observable<ITodolist> {
    return this.httpClient.get<ITodolist>(this.API_URL + `?${id}`);
  }

  createTodolist(body: ITodolist): Observable<ITodolist> {
    return this.httpClient.post<ITodolist>(this.API_URL, body);
  }

  updateTodolist(id: number, body: ITodolist): Observable<ITodolist> {
    return this.httpClient.put<ITodolist>(this.API_URL + `/${id}`, body);
  }

  deleteTodolist(id: number): Observable<Object> {
    return this.httpClient.delete<Object>(this.API_URL + `/${id}`);
  }


}
