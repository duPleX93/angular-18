import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from './test.definitions';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  http: HttpClient = inject(HttpClient);

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
