import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'CanFly',
  standalone: false,
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Vuela' : 'No Vuela';
  }
}
