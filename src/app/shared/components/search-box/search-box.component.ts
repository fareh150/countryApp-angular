import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit {


private debouncer: Subject<string> = new Subject<string>()

@Input()
public placeholdertext: string = ''

  //output hace que dejemos en el aire este dato  para que otro componente pueda usarlo
@Output()
public onValue = new EventEmitter<string>

ngOnInit(): void {
  this.debouncer
  .pipe(
    debounceTime(300)
  )
  .subscribe( value =>
  {
    console.log('valor', value);
  })
}

public emitValue ( value: string ):void {
  this.onValue.emit(value)
}
//*Hemos creado la función emitValue, la cual toma un string como argumento y no retorna ningún valor. Esta función se encarga de asignar el valor recibido al escribir en el input del searchBox (que se pasa como "value"), al output "onValue" utilizando la función emit(). De este modo, prepara los datos para que puedan ser recibidos en otro componente.
//onValue emitValue placeholder

onKeyPress( searchTerm: string )
{
  this.debouncer.next( searchTerm )
}

}
