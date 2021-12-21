import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{ //un servicio es simplemente una clase con el decorador @Injectable(). Usados para evitar manipulación de datos en los componentes.

    private _personajes: Personaje[] = [
        { 
          nombre: 'kokú',
          poder: 15000,
        },
        {
          nombre: 'Espert',
          poder: 20000,
        },
      ];

    get personajes(): Personaje[]{
        return [...this._personajes]; //Mandado por JS por referencia. Pero cuando lo envolvemos en [...], es como que crea uno nuevo.
    }

    constructor(){
        console.log('Servicio DBZService inicializado');
    }

    agregarPersonaje(pj: Personaje){
        this._personajes.push(pj);
    }
}