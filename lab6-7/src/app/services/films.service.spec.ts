import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FilmsService } from './films.service';
import { FilmModule } from '../film/filmModule';


describe('FilmsService', () => {
  let filmsService: FilmsService;
  let httpTestingController:HttpTestingController;


  beforeEach(() => {
  TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers: [
      FilmsService, HttpClient
    ]
  });
      httpTestingController = TestBed.get(HttpTestingController);
      filmsService = TestBed.get(FilmsService);
});

afterEach(() =>{
httpTestingController.verify();
});


  it('should be created', () => {
    const service: FilmsService = TestBed.get(FilmsService);
    expect(service).toBeTruthy();
  });

    it('should retrieve all films', () => {
      const dummyfilms:FilmModule[] = [
        {id:1, name:"Тор", picture:"/assets/img/film1.jpg", info:"Информация о фильме", price:"400 руб."},
        {id:2, name:"Weeds", picture:"/assets/img/film2.jpg", info:"Информация о фильме", price:"350 руб."},
      ];
      filmsService.getAll().then(films =>{
        expect(films).toEqual(dummyfilms);
      });
      const request = httpTestingController.expectOne(`http://localhost:3000/${filmsService.url}`);
      expect(request.request.method).toBe('GET');
      request.flush(dummyfilms);
    });


    it('should retrieve film by ID', () => {
      const dummyCake:FilmModule[] = [
        {id:1, name:"Тор", picture:"/assets/img/film1.jpg", info:"Информация о фильме", price:"400 руб."}
      ];
      const id = 1;
      filmsService.getById(id).then(film =>{
        expect(film).toEqual(dummyCake);
      });
      const request = httpTestingController.expectOne(`http://localhost:3000/${filmsService.url}/${id}`);
      expect(request.request.method).toBe('GET');
      request.flush(dummyCake);
    });
  
});



