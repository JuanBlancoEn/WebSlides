import { Component, OnInit } from '@angular/core';
import { fiesta } from '../../interfaces/fiesta.interface';
import { FiestasService } from '../../services/fiestas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  fiestas: fiesta[] = []

  constructor(private fs:FiestasService){}

  ngOnInit(){
    this.fiestas = this.fs.getFiestas();
  }

}
