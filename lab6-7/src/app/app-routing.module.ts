import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormReadyComponent } from './form-ready/form-ready.component';
import { FilmInfoComponent } from './film-info/film-info.component';


const routes: Routes = [
  {path: '', component: MainComponent},                           /** ссылка на главную*/
  {path: 'form-ready/:id', component: FormReadyComponent},        /** Ссылка на форму заказа фильмов*/
  {path: 'film-info/:id', component: FilmInfoComponent}           /** Ссылка на страницу с информацией по фильму */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
