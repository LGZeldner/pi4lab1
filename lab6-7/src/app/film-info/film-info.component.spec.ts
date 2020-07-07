import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmInfoComponent } from './film-info.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { FilmsService } from '../services/films.service';

describe('CakeInfoComponent', () => {
  let component: FilmInfoComponent;
  let fixture: ComponentFixture<FilmInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[],
      providers:[HttpClient, FilmsService],
      declarations: [ FilmInfoComponent, HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
