import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor( private dbzService: DbzService){

  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo); //usa el servicio para guardar el nuevo personaje

    this.nuevo = { //reinicia el nuevo a 0, para cuando se apreta el boton agregar, se ponen estos datos en el input
      nombre: '',
      poder: 0,
    };
  }
}
