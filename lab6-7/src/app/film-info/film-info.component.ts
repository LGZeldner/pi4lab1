import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {
  id:number;
  film;

  constructor(private activeRoute:ActivatedRoute,
    private filmsService:FilmsService) {
    this.activeRoute.params.subscribe(param => {
      this.id = param.id;

    });
   }

   async ngOnInit() {
    this.film = await this.filmsService.getById(this.id);          /**  Получаем фильм по id */
  }


}
