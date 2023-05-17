import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Carrera } from 'src/app/domain/carrera';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.scss']
})
export class TextoComponent {

  listadoCarreras: Carrera[] = []

  constructor(private carreraService: CarreraService,
      private router: Router) {
    this.listadoCarreras = carreraService.getList()
    console.log('listadoCarreras', this.listadoCarreras)
  }

  editar(carrera: Carrera){
    console.log(carrera)
    let params: NavigationExtras = {
      queryParams: {
        carrera: carrera,
        nombre: 'Morocho'
      }
    }
    this.router.navigate(['/carrera'], params)
  }

  eliminar(event:Event ,carrera: Carrera) {
    event.preventDefault();
    const indice=this.listadoCarreras.indexOf(carrera);
    if (indice !== -1){
      this.listadoCarreras.splice(indice,1);

    }
    
  }
}



