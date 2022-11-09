import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
   
  }
  
  changer(nameofClass: any){
    document.getElementById(nameofClass)?.addEventListener('click', function () {
      if (this.classList.contains('active')) {
        this.classList.remove('active');
        console.log(this.classList.value)
      } else {
        this.classList.add("active")
        console.log(this.classList.value)
      };
    });
    console.log(nameofClass)
    console.log(document.getElementById(nameofClass)?.focus())

  }
  
  DoCheck() {
    console.log('check');
    document.getElementsByClassName('about').item(1);
  }
}
