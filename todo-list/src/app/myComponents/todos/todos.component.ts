import { Component, OnInit } from '@angular/core';
import { todo } from '../../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
 
  localItem!: string | null;
  Todos!: todo[] ;


  constructor() {

    this.localItem = localStorage.getItem('todos');
        if(this.localItem !== null) {
    this.Todos = JSON.parse(this.localItem) 
    }
    else{
      console.log(this.Todos);
      this.Todos=[];
    }
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:todo) {
    console.log("deletedTodo");
    // this.Todos = this.Todos.filter(t => t.sno !== todo.sno);
    const index= this.Todos.indexOf(todo);
    this.Todos.splice(index,1);
    localStorage.setItem('todos', JSON.stringify(this.Todos));
  }
  addTodo(todo:todo) {
    console.log("AddedTodo");
    this.Todos.push(todo); 
    localStorage.setItem('todos', JSON.stringify(this.Todos));
  }
  toggleTodo(todo:todo) {
    const index= this.Todos.indexOf(todo);
    this.Todos[index].active = !this.Todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.Todos));

  }
}
