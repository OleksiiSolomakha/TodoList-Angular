import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  complete: boolean;
  date: any;
}

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {

  public todos: Todo[] = [
    {id: 1, title: 'First thing to do', complete: false, date: new Date()},
    {id: 2, title: 'Second thing to do', complete: true, date: new Date()},
  ];


  constructor() { }

  public onToggle(id: number) {
    const i = this.todos.findIndex(todo => todo.id === id);
    this.todos[i].complete = !this.todos[i].complete;
  }

  public remove(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    localStorage.removeItem(id.toString());
  }

  public addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  public getTodos() {
   for (let i = 0; i < localStorage.length; i++) {
     const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
     this.todos.push(item);
   }
  }
}
