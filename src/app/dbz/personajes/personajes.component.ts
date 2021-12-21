import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent{
  //@Input('personajesPadre') personajes: Personaje[] = []; // @Input Para indicarle a un componente que puede recibir un valor desde el componente padre
  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService){

  }
}
