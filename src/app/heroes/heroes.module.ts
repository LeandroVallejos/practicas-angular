import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule //este trae los ngif ngfor, etc. En definitiva, las directivas y pipes basicas de Angular. Si no lo pongo, no puedo usarlos en el html
    ]

})
export class HeroesModule{

}