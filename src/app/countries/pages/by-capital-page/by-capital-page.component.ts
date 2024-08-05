import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ''
})
export class ByCapitalPageComponent {

//* creamos contenedor para la respuesta  de nuestra peticion
//? countries va a ser de tipo Country (viene el modelo de interfaces) que inicializamos con un array vacio (= [])
  public countries: Country[] = []
  public isLoading: boolean = false;

  constructor(private countriesService : CountriesService){}


  searchByCapital(term : string): void {
    this.isLoading = true;

//?  para hacer la peticion hay que poner el .subscribe()
    this.countriesService.searchCapital(term).subscribe( countriesData => {
      this.countries = countriesData
      this.isLoading = false;

  //* los datos que regrela la llamada a la api , la guardamos en el contenedor creado arriba
    })


  }



}
