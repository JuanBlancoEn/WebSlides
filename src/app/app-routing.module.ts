import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { FiestasComponent } from './components/fiestas/fiestas.component';

const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "fiestas", component: FiestasComponent},
  {path: "**", pathMatch: "full", redirectTo: "inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
