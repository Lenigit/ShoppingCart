import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article-cart',
  templateUrl: './article-cart.component.html',
  styleUrls: ['./article-cart.component.css']
})
export class ArticleCartComponent implements OnInit {

  @Input() article_ref;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.article_ref.article=this.data.articles.find((a)=>a.id==this.article_ref.id);
  }

  add_qt = () => {
    this.data.articleCart.find((a) => a.id == this.article_ref.id).qt +=1; 

    this.data.observableSumArt.next(1);
    this.data.observableTotalCost.next(1);
  }

  sub_qt = () => {
    this.data.articleCart.find((a) => a.id == this.article_ref.id).qt -=1; 

    this.data.observableSumArt.next(-1);
    this.data.observableTotalCost.next(-1);
  }

  delete = () => {
    let article_qt = this.data.articleCart.find((a) => a.id == this.article_ref.id).qt;
    this.data.articleCart.find((a) => a.id == this.article_ref.id).qt =0;

    this.data.observableSumArt.next(-article_qt);
    this.data.observableTotalCost.next(-article_qt);
  }

}
