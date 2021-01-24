import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
        <h1>{{title}}</h1>
        <h2>La base es : <b>{{base}}</b></h2>
        <button (click)="acumular(base)"> + 1</button>
        <span>{{contador}}</span>
        <button (click)="acumular(-base)"> - 1</button>
    `
})

export class  ContadorComponent{
  title: string = 'Contador';
  contador: number = 10;


  base:number = 5; 

 acumular(valor:number){
   this.contador+=valor;
 }

}
