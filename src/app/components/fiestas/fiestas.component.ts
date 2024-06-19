import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { fiesta } from '../../interfaces/fiesta.interface';
import { FiestasService } from '../../services/fiestas.service';

@Component({
  selector: 'app-fiestas',
  templateUrl: './fiestas.component.html',
  styleUrl: './fiestas.component.css'
})
export class FiestasComponent implements OnInit  {

  @Input() estacion: string = "";
  @Input() popularidad: number = 0;

  fiestas: fiesta[] = [];
  fiestasFiltradas: fiesta[] = [];

  constructor(private fs:FiestasService){}

  ngOnInit() {
      // Subscripcion al parametro estacion y filtrado
    this.fs.getEstacionSeleccionada().subscribe(estacion => {
      if (estacion !== null) {
        this.estacion = estacion; 
        this.filtrarFiestas();
      }
    });
    // Subscripcion al parametro popularidad y filtrado
    this.fs.getPopularidadSeleccionada().subscribe(popularidad => {
      this.popularidad = popularidad ?? 0;
      this.filtrarFiestas();
    });
  }

  ngOnChanges(){
    this.filtrarFiestas();
  }

  filtrarFiestas() {
    // Si hay una estacion o la popularidad es mayor que 0 se filtra ya que nunca van a suceder las dos porque 
    // cuando se cambia uno de los valores el otro se resetea en el navbar
    if (this.estacion !== '' || this.popularidad > 0) {
      this.fiestasFiltradas = this.fs.getFiestasPorEstacion().filter(fiesta => {
        const coincidePopularidad = this.popularidad > 0 ? fiesta.popular === this.popularidad : true;
        return coincidePopularidad;
      });
    } else {
      // Si no hay filtro de estación ni de popularidad, mostrar todas las fiestas
      this.fiestasFiltradas = this.fs.getFiestas();
    }
  }

}
