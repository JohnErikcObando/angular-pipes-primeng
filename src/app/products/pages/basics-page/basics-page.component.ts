import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'John';
  public nameUpeer: string = 'JOHN';
  public fullName: string = 'John ErIKc ObANdo RAmIREz';
  public customDate: Date = new Date();
}
