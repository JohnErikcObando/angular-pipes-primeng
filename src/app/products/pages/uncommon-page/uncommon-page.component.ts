import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'John';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural

  public clients: string[] = [
    'Maria',
    'Pedro',
    'John',
    'Fernando',
    'Eduardo',
    'Melissa',
    'Natalia',
    'Fabian',
    'Hailer',
  ];

  public clientsMap = {
    '=0': 'No tenemos ningun Cliente Esperando',
    '=1': 'No tenemos Un Cliente Esperando',
    '=2': 'Tenemos 2 Esperando',
    other: 'Tenemos # clientes Esperando',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //keyValue Pipe

  public person = {
    name: 'John',
    age: 33,
    address: 'buga,Colombia',
  };

  //Async Pipe

  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa');
      console.log('tenemos data en la promesa');
    }, 3500);
  });
}
