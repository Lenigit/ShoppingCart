import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  article_refs;
  totCost = 0;
  qt_articles = 0;
  
  constructor(private data:DataService) { }

  ngOnInit() {
    this.qt_articles = this.data.sumArticles();
    this.data.observableSumArt.subscribe((a) =>{
      this.qt_articles = this.data.sumArticles();
    })
    
    this.article_refs = this.data.articleCart;

    this.totCost = this.data.totalCost();
    this.data.observableTotalCost.subscribe((a) => {
      this.totCost = this.data.totalCost();
    })

  }
}
