import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  name!: string;
  email!: string;
  subject!: string;
  message!: string;

  ngOnInit(): void {
    console.log(this.name)
  }

}
