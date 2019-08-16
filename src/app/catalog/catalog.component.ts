import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  articles : Array<any>
  constructor(private data:DataService) { }

  ngOnInit() {
    this.articles = this.data.articles;
  }

}
