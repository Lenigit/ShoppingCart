import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article;

  constructor(private data:DataService) { }

  add = () => {
    let add_art = this.data.articleCart.find((a) => a.id == this.article.id); 
    if (add_art) {
      add_art.qt++;
    } else {
      this.data.articleCart.push({id: this.article.id, qt: 1});
    }
    this.data.observableSumArt.next(1);
  }


  ngOnInit() {
  }

}
