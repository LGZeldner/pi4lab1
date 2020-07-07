import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FilmModule { /** Интерфейс, отображающий строки списка готовых фильмов.
                                 Фильмы хранятся в файле db.json*/
     id?: number;
     name: string;
     picture: string;
     info: string;
     price: string
}
