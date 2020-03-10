import { Component, OnInit } from '@angular/core';
import {InterfaceService, Todo} from '../interface.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  value = '';

  constructor(private todoService: InterfaceService) { }

  ngOnInit() {
  }
  addTodo() {
    const todo: Todo = {
      id: Date.now(),
      title: this.value,
      complete: false,
      date: new Date()
    };
    if (this.value.trim() === '') {
      return;
    } else {
      this.todoService.addTodo(todo);
      localStorage.setItem(`${todo.id}`, JSON.stringify(todo));
      this.value = '';
    }
  }
}
