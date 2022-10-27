import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  activeIndex1: number = 0;

  activeIndex2: number = 0;

  scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({
    title: `Tab ${i + 1}`,
    content: `Tab ${i + 1} Content`,
  }));


}
