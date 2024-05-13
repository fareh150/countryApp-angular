import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

@Input()
public placeholdertext: string = ''

  //output hace que dejemos en el aire este dato  para que otro componente pueda usarlo
@Output()
public onValue = new EventEmitter<string>

public emitValue ( value: string ):void {
  this.onValue.emit(value)
}

//*Hemos creado la función emitValue, la cual toma un string como argumento y no retorna ningún valor. Esta función se encarga de asignar el valor recibido al escribir en el input del searchBox (que se pasa como "value"), al output "onValue" utilizando la función emit(). De este modo, prepara los datos para que puedan ser recibidos en otro componente.

//onValue emitValue placeholder


}
