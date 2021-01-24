import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
  }


  heroes:string[] = ['Spiderman','IronMan','Hulk','Thor'];
  borrado:string = '';

  borrarHeroe():void{
    const h = this.heroes.shift() || '';
    this.borrado = h;
    console.log("Borrando ",h,' ...'); 
  }
}
