import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { ArticleCartComponent } from './article-cart/article-cart.component';
import { DataService } from './data.service';
import { MenuComponent } from './menu/menu.component';

const routes : Routes =[
  {path : '', component: CatalogComponent},
  {path : 'cart', component: CartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CatalogComponent,
    CartComponent,
    ArticleCartComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
