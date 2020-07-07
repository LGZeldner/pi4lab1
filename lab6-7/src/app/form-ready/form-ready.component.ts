import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmModule } from '../film/filmModule';
import { FilmsService } from '../services/films.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-form-ready',
  templateUrl: './form-ready.component.html',
  styleUrls: ['./form-ready.component.css']
})
export class FormReadyComponent implements OnInit {
  formReady: FormGroup;
  film;
  id:number;
  disabled = false;
  constructor(  private activeRoute:ActivatedRoute,
    private router:Router,
    private filmsService:FilmsService,
    public db:AngularFireDatabase
    ) {
    this.activeRoute.params.subscribe(param => {
      this.id = param.id;

    });
  }

  async ngOnInit() {
    this.film = await this.filmsService.getById(this.id);          /** Получаем фильм по id*/
    this.formReady = new FormGroup({                              /**создание новой формы для заказа фильмов из списка готовых */
    film_name: new FormControl( { value: this.film.name, disabled: this.disabled }),
    film_price: new FormControl( { value: this.film.price, disabled: this.disabled }),
    name_customer: new FormControl( { value: '', disabled: this.disabled } , [Validators.required]),
    address: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
    tel: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
    email: new FormControl({ value: '', disabled: this.disabled }, [Validators.required, Validators.email]),
    date: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
    });
    }
onSubmit(){
  this.db.list('customers').push( this.formReady.value);                           /** Заносим данные с формы в БД */
  alert('Ваш заказ успешно отправлен! Наш администратор скоро с Вами свяжется!');  /** Выводим сообщение об успешной отправке формы*/
  this.router.navigate(['/']);                                                     /** Перенаправляемся на главную страницу*/
  }
  public mask = [8,'(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/]; /** Маска для корректного ввода телефона */
}
