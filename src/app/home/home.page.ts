import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedCode: any;
  numpad: any;
  users: any[] = [
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }
  ];

  constructor(private router: Router) { }

  valueChangedSoRouteToPage2() {
    console.log('changed');
    console.log(this.selectedCode);
    console.log(this.numpad);
    this.router.navigateByUrl('/page2/' + this.selectedCode + '/' + this.numpad);
  }


}
