import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of} from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService
{
  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor( private httpClient: HttpClient ) { }

  private getCountriesRequest( url: string ): Observable<Country[]>
  {
    //?                      recibe un array de tipo Country
    return this.httpClient.get<Country[]>(url)
      .pipe
      (
        catchError(error => of([])),
        delay( 2000 )
      )
      //pipe ayuda a modificar la respuesta de las peticiones
      //?pillamos el error  y con el of hacemos que la respuesta se vuelva un array vacio asi modificamos la tabla que mostramos
  }

  searchCountryByAlphaCode ( code: string ): Observable<Country | null>
  {
    //https://restcountries.com/v3.1/alpha/cri
  const url = `${this.apiUrl}/alpha/${code}`
  return this.httpClient.get<Country[]>(url)
    .pipe(
      map( countries  => countries.length>0 ? countries[0] : null),
      catchError( () => of (null))
    )
  }

  searchCapital ( term: string ) : Observable<Country[]>
  {
    const url = `${this.apiUrl}/capital/${term}`
    return this.getCountriesRequest(url)
  }

  searchCountry ( term: string ): Observable<Country[]>  {
    const url = `${this.apiUrl}/name/${term}`
    return this.getCountriesRequest(url)
  }

  searchRegion ( term: string )
  {
  //https://restcountries.com/v3.1/region/{region}
    const url = `${this.apiUrl}/region/${term}`
    return this.getCountriesRequest(url)
  }
}
