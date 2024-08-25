import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  activeSection: string = 'home';
  isMenuOpen = false;

  ngOnInit(): void {
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const bounding = element.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.top <= window.innerHeight / 2) {
          this.activeSection = section;
        }
      }
    });
  }

}
