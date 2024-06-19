import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FiestasService } from '../../services/fiestas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private fiestasService: FiestasService, private router:Router) {}

  cambiarEstacion(estacion: string) {
    this.fiestasService.setEstacionSeleccionada(estacion);
    this.router.navigate(['/fiestas']);
  }

  cambiarPopularidad(popularidad: number) {
    this.fiestasService.setPopularSeleccionado(popularidad);
    this.router.navigate(['/fiestas']);
  }

}
