import { Injectable } from '@angular/core';
import { fiesta } from '../interfaces/fiesta.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiestasService {

  private fiestas: fiesta[] = [
    {
      name: "La Tomatina",
    comunidad: "Valencia",
    localidad: "Buñol",
    estacion: "Verano",
    descripcion: "Batalla en medio de la calle para lanzarse tomates en Buñol el último miércoles de agosto.",
    popular: 1,
    imagen: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/e95af64f-e829-43d2-80de-bd137e4dd616/mejores-fiestas-de-espana-tomatina.jpg?format=1500w"
    },
    {
      name: "Las Fallas",
    comunidad: "Valencia",
    localidad: "Valencia",
    estacion: "Primavera",
    descripcion: "Valencia se transforma en un museo al aire libre lleno de esculturas gigantes de madera y papel maché. En la Nit del Foc se queman los ninots en fogatas excepto la ganadora.",
    popular: 1,
    imagen: "https://fotografias.lasexta.com/clipping/cmsimages02/2019/03/16/566C010C-CCB0-40CC-A12A-171B9C97D1E7/98.jpg?crop=6096,3430,x0,y466&width=1900&height=1069&optimize=low&format=webply"
    },
    {
      name: "La Feria de Abril",
    comunidad: "Andalucía",
    localidad: "Sevilla",
    estacion: "Primavera",
    descripcion: "La ciudad se engalana con farolillos y se llena de casetas, para bailar sevillanas, disfrutar de manzanilla y degustar las tapas.",
    popular: 1,
    imagen: "https://t2.uc.ltmcdn.com/es/posts/1/0/4/feria_de_abril_de_sevilla_cuando_es_y_por_que_se_celebra_53401_orig.jpg"
    },
    {
      name: "Carnaval de Tenerife",
    comunidad: "Canarias",
    localidad: "Tenerife",
    estacion: "Invierno",
    descripcion: "Conocido por sus opulentos disfraces, majestuosas carrozas y música en vivo.",
    popular: 1,
    imagen: "https://cnnespanol.cnn.com/wp-content/uploads/2023/02/230222113050-carnaval-santa-cruz-tenerife-espana-full-169.jpg?quality=100&strip=info"
    },
    {
      name: "Sanfermines",
    comunidad: "Navarra",
    localidad: "Pamplona",
    estacion: "Verano",
    descripcion: "La ciudad de Pamplona se llena de personas vestidas con la indumentaria tradicional de camisa y pantalón blancos con un pañuelo rojo al cuello.",
    popular: 1,
    imagen: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/be64acae-1094-44fc-9578-5c568337053c/mejores-fiestas-espana-sanfermin.jpg?format=1500w"
    },
    {
      name: "Festival de los patios",
    comunidad: "Andalucía",
    localidad: "Córdoba",
    estacion: "primavera",
    descripcion: "En Córdoba durante dos semanas los vecinos abren sus patios adornados con una explosión floral.",
    popular: 2,
    imagen: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/8c212d9c-4bbd-4375-912a-90bb022fda65/mejores-fiestas-de-espana-patios.jpg?format=1500w"
    },
    {
      name: "Descenso Internacional del Sella",
    comunidad: "Asturias",
    localidad: "Ribadesella",
    estacion: "Verano",
    descripcion: "Para los amantes de la naturaleza y los deportes acuáticos, una carrera de 15 km acompañada de fiesta.",
    popular: 2,
    imagen: "https://www.aparthotelcampus.es/wp-content/uploads/2016/08/descenso-del-sella.jpg"
    },
    {
      name: "Batalla del vino",
    comunidad: "La Rioja",
    localidad: "Haro",
    estacion: "Verano",
    descripcion: "Unete a miles de amantes del vino mientras los habitantes bombean miles de litros de alcohol con pistolas de agua y mangueras en Haro.",
    popular: 2,
    imagen: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/4be46f59-559d-41b7-9a3f-d046aeb8a570/mejores-fiestas-de-espana-batalla-del-vino.jpg?format=1500w"
    },
    {
      name: "Semana grande de Bilbao",
    comunidad: "Pais Vasco",
    localidad: "Bilbao",
    estacion: "Verano",
    descripcion: "También conocida como Aste Nagusia, esta es una de las festividades más grandes del País Vasco.",
    popular: 2,
    imagen: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/e64c00f6-c9bb-4878-92e2-2ec19852d9e4/mejores-fiestas-espana-semana-grande-bilbao.jpeg?format=1500w"
    },
    {
      name: "El Samaín",
    comunidad: "Galicia",
    localidad: "A Coruña",
    estacion: "Otoño",
    descripcion: "En otoño puedes disfrutar en galicia de los magostos populares y la fiesta celta del Samaín",
    popular: 2,
    imagen: "https://www.escapadarural.com/blog/wp-content/uploads/2020/04/ribadavia-1.jpg"
    }
  ];

  private estacionSeleccionada = new BehaviorSubject<string | null>(null);
  private popularidadSeleccionada = new BehaviorSubject<number | null>(null);

  constructor() { }

  getFiestas(){
    return this.fiestas;
  }

  getEstacionSeleccionada(){
    return this.estacionSeleccionada.asObservable();
  }

  getPopularidadSeleccionada() {
    return this.popularidadSeleccionada.asObservable();
  }

  setEstacionSeleccionada(estacion: string): void{
    this.estacionSeleccionada.next(estacion);
  }

  setPopularSeleccionado(popular: number | null): void {
    this.popularidadSeleccionada.next(popular);
  }

  getFiestasPorEstacion(): fiesta[]{
    const estacionActual = this.estacionSeleccionada.value;
    return estacionActual ? this.fiestas.filter(f => f.estacion === estacionActual): this.fiestas;
  }

  getFiestasPorPopularidad(): fiesta[] {
    const popularActual = this.popularidadSeleccionada.value;
    if (popularActual === 0) {
      // Si no se ha seleccionado ninguna opción de popularidad, se devuelven todas las fiestas sin filtrar
      return this.fiestas;
    } else {
      // Filtramos las fiestas por la popularidad seleccionada (1 para populares, 2 para no populares)
      return this.fiestas.filter(fiesta => {
        if (popularActual === 1) {
          return fiesta.popular === 1;
          console.log("fiesta popular 1");
        } else if (popularActual === 2) {
          return fiesta.popular === 2;
          console.log("fiesta popular 2");
        } else {
          // En caso de que la opción seleccionada no sea null, 1 ni 2, no se aplica ningún filtro y se muestran todas las fiestas
          return true;
        }
      });
    }
  }

getFiestasFiltradas(): fiesta[] {
  const estacionActual = this.estacionSeleccionada.value;
  const popularActual = this.popularidadSeleccionada.value;

  return this.fiestas.filter(fiesta => {
    // Filtrar por estación si está seleccionada
    const coincideEstacion = estacionActual ? fiesta.estacion === estacionActual : true;

    // Filtrar por popularidad si está seleccionada
    const coincidePopularidad = popularActual !== null ? fiesta.popular === popularActual : true;

    // Retornar true si coincide tanto la estación como la popularidad
    return coincideEstacion && coincidePopularidad;
  });
}

}
