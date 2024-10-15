import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ITodo } from './api/test.definitions';
import { TestService } from './api/test.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly testService = inject(TestService);
  todos: ITodo[] = [];

  ngOnInit(): void {
    this.testService
      .getTodos()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => (this.todos = data.slice(0, 10)));
  }
}
