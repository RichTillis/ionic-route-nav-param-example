import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  page2Code;
  page2Numpad;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.page2Code = this.activatedRoute.snapshot.paramMap.get("code");
    this.page2Numpad = this.activatedRoute.snapshot.paramMap.get("numpad");

    console.log('code: ' + this.page2Code);
    console.log('numpad: ' + this.page2Numpad); 
  }
}