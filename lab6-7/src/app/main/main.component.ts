import { Component, OnInit, Input } from '@angular/core';
import { FilmModule } from '../film/filmModule';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  films;
  next:boolean = false;
  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private filmsService:FilmsService){

  }
  ngOnInit() {
    this.updateData();
  }
  async updateData() {                  /** Получаем все фильмы, заносим их в переменную 'films'*/

    try
    {
      this.films = await this.filmsService.getAll();

    } catch (e)
    {
      console.log(e);
    }
  }
    onNext(){                /** Меняет значение параметра next на противоположное.
                               Используется при выводе оставшихся фильмов, при нажатии на кнопку "показать ещё" */
    this.next = !this.next;
    return false;
  }
}


