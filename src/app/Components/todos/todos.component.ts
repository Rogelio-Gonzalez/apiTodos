import { Component, Input, OnInit } from '@angular/core';

interface IDataResponse{
  id_n : number;
  titulo : string;
  completado : boolean;
}

interface IApiResponse{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor() { }
  TodosData : IDataResponse;
  @Input()
  id: number;
  ngOnInit() {
    this.TodosData =<IDataResponse>{};
    this.getTodosData();
    
  }
  getTodosData(){
    fetch(`https://jsonplaceholder.typicode.com/todos/${this.id}` )
      .then(response => response.json())
      .then((data : IApiResponse ) => {
        console.log(data);
        this.TodosData.id_n =data.id; 
        this.TodosData.titulo = data.title;
        this.TodosData.completado = data.completed;
        
        
      });
    
    }
    
  
  

}
