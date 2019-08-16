import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  qt_articles;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.observableSumArt.subscribe((a) => {
      this.qt_articles = this.data.sumArticles();
    })
  }

}
