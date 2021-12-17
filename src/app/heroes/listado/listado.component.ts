import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes: string[] = ['Spider-Man', 'Batman', 'Pelado Espert'];

  borr: string = "";

  borrarHeroe(){
    console.log('borrando...');
    this.borr = this.heroes.shift() || '';
  }
}
