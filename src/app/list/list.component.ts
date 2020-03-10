import {Component, OnInit} from '@angular/core';
import {InterfaceService} from '../interface.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public todoService: InterfaceService) { }

  ngOnInit() {
    this.todoService.getTodos();
  }

  onChange(id: number) {
    this.todoService.onToggle(id);
  }

  deleteTodo(id: number) {
    this.todoService.remove(id);
  }

}
