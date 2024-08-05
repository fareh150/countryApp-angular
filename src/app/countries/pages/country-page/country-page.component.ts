import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})

//con OnInit podemos pedir que se muestre un loading o algo para que termine de cargarse los datos
export class CountryPageComponent implements OnInit {


public country?: Country;

  constructor(
    private activatedRoute : ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {}

  ngOnInit(): void {
    //*cogemos el :id de la url que nos envian
    this.activatedRoute.params
      .pipe(
        //   se pone {id} por que pillamos el id desde el objeto que recibimos
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode(id) )
      )
      .subscribe( country => {
        if (! country) {
          return this.router.navigateByUrl('');
        }
        return this.country = country;

        ;
      })
  }




}
