import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  observableSumArt: Subject<any> = new Subject<any>();
  observableTotalCost: Subject<any> = new Subject<any>();

  constructor() { }

  articles = [
    {
      id: 0,
      name: "Bananas",
      img: "../../assets/imgs/banana.jpg",
      price: 4.5
    },
    {
      id: 1,
      name: "Strawberries",
      img: "../../assets/imgs/strawberry.jpg",
      price: 7.9
    },
    {
      id: 2,
      name: "Tangerines",
      img: "../../assets/imgs/tangerine.jpg",
      price: 3.8
    },
    {
      id: 3,
      name: "Tomatoes",
      img: "../../assets/imgs/tomato.jpg",
      price: 4.5
    },
    {
      id: 4,
      name: "Cherries",
      img: "../../assets/imgs/cherry.jpg",
      price: 9.2
    },
    {
      id: 5,
      name: "Pears",
      img: "../../assets/imgs/pear.jpg",
      price: 7.2
    }
  ];

  articleCart: Array<any> = new Array<any>();
  sumArticles = () => {
    let sum = 0;
    for (let ref of this.articleCart) {
      sum += ref.qt;
    }
    return sum;
  }

  totalCost = () => {
    let total = 0;
    for (let art of this.articleCart) {
      total += art.qt * this.articles.find((a) => a.id == art.id).price;
    }
    return total;
  }

}
