import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimateComponent } from './components/clase/primate/primate.component';
import { PrimerComponent } from './components/curso/primer/primer.component';
import { PregconjComponent } from './components/ejercicio/pregconj/pregconj.component';
import { PregdetconjComponent } from './components/ejercicio/pregdetconj/pregdetconj.component';
import { GradoComponent } from './components/grado/grado.component';
import { LoginComponent } from './components/login/login.component';
import { ConjuntosComponent } from './components/pritema/conjuntos/conjuntos.component';
import { DetconjComponent } from './components/pritema/detconj/detconj.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistroComponent},
  {path: 'grado', component: GradoComponent},
  {path: 'primer', component: PrimerComponent},
  {path: 'primate', component: PrimateComponent},
  {path: 'conjuntos', component: ConjuntosComponent},
  {path: 'pregconj', component: PregconjComponent},
  {path: 'detconj', component: DetconjComponent},
  {path: 'pregdetconj', component: PregdetconjComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
