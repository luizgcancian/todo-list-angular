import { Component, ViewChild, ElementRef } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  updatedTodos: any = [];
  newTodo = '';
  @ViewChild('enterTodo') enterTodo!: ElementRef;
  todos = [
    {
      content: 'Example',
      completed: false,
    },
  ];
  toggleDone(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  deleteTodo(i: number) {
    this.updatedTodos = this.todos.filter((todo, index) => {
      return i !== index;
    });
    this.todos = this.updatedTodos;
  }

  updateNewTodo(value: string) {
    this.newTodo = value;
  }

  addNewTodo() {
    this.todos.push({ content: this.newTodo, completed: false });
    this.enterTodo.nativeElement.value = '';
  }
}
